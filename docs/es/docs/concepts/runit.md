---
title: runit
description: El sistema de init runit que usa Neko-Void, cómo funciona y cómo gestionar servicios
---

# runit

> [!NOTE]
> Esta documentación es un extracto directo de la [extensa guía de runit de la Wiki de Gentoo](https://wiki.gentoo.org/wiki/Runit), disponible bajo la licencia [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Toda la información se ha extraído de Gentoo para asegurar su precisión.

runit es un conjunto ligero de herramientas para la supervisión de procesos, inspirado originalmente en daemontools, que ofrece una gestión de servicios rápida y confiable. Puede utilizarse como alternativa a sysvinit o systemd, ya sea de forma independiente o junto con OpenRC. Además, runit puede emplearse como sistema de inicialización PID 1 o como una capa de supervisión para gestionar servicios definidos por OpenRC.

## Arquitectura

Para obtener información más detallada sobre los aspectos de supervisión de procesos de runit, consulta daemontools-encore. A continuación, se presenta un resumen.

Las funciones de supervisión de procesos en runit son implementadas por `runsv`, que funciona de manera similar al comando `supervise` de daemontools. Toma la ruta absoluta o relativa de un directorio de servicio (o servicedir) como su argumento. Un directorio de servicio de runit válido debe contener al menos un archivo ejecutable llamado `run`, y opcionalmente puede incluir un archivo `down` y un subdirectorio `log` (o enlace simbólico). Estos componentes funcionan de manera análoga a sus equivalentes en daemontools. Sin embargo, a diferencia de `supervise`, si hay un subdirectorio `log` presente, el mismo proceso `runsv` gestiona tanto el proceso principal `run` como el proceso `log/run` y maneja internamente la tubería que los conecta. Por ejemplo, si un directorio de servicio `S` contiene un subdirectorio `log` para registro, `ps` mostraría el proceso `runsv S` con dos procesos secundarios. El registrador sigue siendo controlado mediante `sv`, apuntando a `S/log` como el servicio.

Además, el directorio de servicio puede incluir un archivo ejecutable `finish` para tareas de limpieza cada vez que el proceso supervisado se cierra. `runsv` llama a `finish` con dos argumentos: el código de salida del proceso `run` (o -1 si no salió normalmente) y el byte menos significativo del estado de salida (según el comportamiento POSIX de waitpid()). Por ejemplo, el segundo argumento será 0 si `run` salió normalmente, o el número de la señal si fue terminado por una señal. `runsv` aplica un retraso de 1 segundo antes de reiniciar `run` o invocar a `finish` para prevenir bucles de cierre rápidos. Un proceso supervisado se ejecuta dentro de la sesión de su proceso padre `runsv`. Para convertirlo en un líder de sesión, utiliza la opción `chpst -P` dentro de `run`. Si `runsv` recibe la señal SIGTERM, actúa como si se hubiera emitido el comando `sv exit` para el servicio correspondiente.

Al igual que `supervise`, `runsv` mantiene archivos de control en un subdirectorio `supervise`. Si se encuentra un enlace simbólico a un directorio `supervise`, `runsv` lo seguirá para buscar los archivos de control. Además, `runsv` incluye archivos legibles en `supervise` (como `stat` y `pid`) que almacenan el ID del proceso y la información de estado del proceso supervisado. Consulta la página del manual de `runsv` para obtener más detalles.

El programa `runsvdir` supervisa varios procesos en paralelo utilizando un directorio de escaneo (o scandir), de manera similar a `svscan` de daemontools, actuando como la raíz del árbol de supervisión. Monitorea el scandir en busca de cambios (verificando inodo, dispositivo o tiempo de modificación al menos cada 5 segundos), iniciando nuevos procesos `runsv` para cualquier nuevo servicedir detectado, o reiniciando `runsv` para cualquier servicedir terminado. También envía SIGTERM a los procesos `runsv` cuyo servicedir correspondiente ya no esté presente. A diferencia de `svscan`, `runsvdir` acepta un segundo argumento que funciona como `readproctitle` y especifica un búfer de registro continuo visible en la salida de `ps`. Los primeros cinco caracteres permanecen estáticos, mientras que los caracteres posteriores rotan a medida que se añaden nuevos mensajes de registro. La opción `-P` permite que `runsvdir` haga que los procesos hijos de `runsv` sean líderes de sesión mediante `setsid()`. Cuando `runsvdir` recibe SIGHUP, envía SIGTERM a sus hijos antes de salir. Consulta la página de manual de `runsvdir` para más detalles.

`svlogd` es el programa de registro en la suite runit, análogo al `multilog` de daemontools, pero con una interfaz de usuario diferente. Acepta rutas de directorios de registro como argumentos, que no necesitan comenzar con `.` o `/`. Para anteponer una marca de tiempo en formato TAI64N a las líneas registradas, invoca `svlogd` con la opción `-t`. La opción `-tt` añade una marca de tiempo UTC (`YYYY-MM-DD_HH:MM:SS.xxxxx`), y `-ttt` utiliza el formato ISO8601 (`YYYY-MM-DDTHH:MM:SS.xxxxx`). Las acciones sobre las líneas de registro se definen en un archivo `config` dentro del directorio de registro. Las líneas de acción que comienzan con `s`, `n`, `!`, `+`, o `-` funcionan igual que en `multilog`, donde el `+` en los patrones significa "uno o más" del siguiente carácter. Los patrones ignoran las marcas de tiempo. `svlogd` rota los registros al recibir SIGALRM y vuelve a leer `config` después de recibir SIGHUP. Para obtener todos los detalles, consulta la página de manual de `svlogd`.

`chpst` es una utilidad de encadenamiento que altera el entorno de ejecución de un proceso supervisado. Incluye opciones similares a `envdir`, `envuidgid`, `pgrphack`, `setuidgid`, `setloc` y `softlimit` de daemontools, además de funciones específicas de runit. Por ejemplo, `chpst -n` ajusta el valor nice del proceso, `chpst -/` cambia el directorio raíz antes de ejecutar el siguiente comando en la cadena (`chroot()`), y `chpst -b nuevonombre` sustituye `argv[0]` para ejecutar el siguiente programa con un nuevo nombre. Si se invoca con nombres como `envdir` o `setuidgid`, `chpst` se comporta idénticamente a las respectivas herramientas. Para obtener los detalles completos, consulta la página de manual de `chpst`.

`sv` es la herramienta de control para los procesos supervisados por runit. Acepta un subcomando y las rutas de los directorios de servicio como argumentos. Las rutas son relativas a `$SVDIR` o `/service` si `$SVDIR` no está definido. Los subcomandos como `up`, `down`, `once` y `exit` equivalen a `svc -u`, `svc -d`, `svc -o` y `svc -dx` de daemontools, respectivamente. El subcomando `status` ofrece una funcionalidad similar a `svstat`, mostrando si el proceso supervisado está en ejecución (run) o detenido (down), si su script `finish` se está ejecutando, si el proceso está en transición de estados y metadatos adicionales como PID, tiempo de actividad y si está en pausa o terminado. Otros subcomandos envían señales a los procesos supervisados de forma fiable. Por ejemplo, `sv alarm` envía SIGALRM para rotar los registros, y `sv hup` envía SIGHUP para recargar la configuración del registro. Consulta la página de manual de `sv` para ver el conjunto completo de comandos.

## Uso

### Gestión Básica de Servicios
Para gestionar los servicios supervisados por `runit`, puedes utilizar el comando `sv`. La sintaxis básica es `sv <comando> <servicio>`.

- **Comprobar el estado de un servicio:**
  ```bash
  sv status <servicio>
  ```
  Esto mostrará si el servicio está en ejecución o detenido, su PID y cuánto tiempo ha estado en ese estado. También puedes comprobar el estado de todos los servicios en el directorio de escaneo con `sv status *`.

- **Iniciar un servicio:**
  ```bash
  sv up <servicio>
  ```

- **Detener un servicio:**
  ```bash
  sv down <servicio>
  ```
  Esto envía una señal SIGTERM al proceso y lo detiene.

- **Reiniciar un servicio:**
  ```bash
  sv restart <servicio>
  ```

- **Enviar una señal específica a un servicio:**
  Por ejemplo, para enviar un SIGHUP (usado a menudo para recargar la configuración sin detenerse):
  ```bash
  sv hup <servicio>
  ```

### Gestión de Directorios de Servicio
Los servicios se representan mediante directorios que contienen al menos un script ejecutable llamado `run`.
En sistemas típicos, los servicios disponibles se almacenan en un repositorio (por ejemplo, `/etc/sv`), y los servicios habilitados son enlaces simbólicos ubicados en el directorio de escaneo (por ejemplo, `/var/service` o `/run/openrc/sv`).

- **Habilitar un servicio (iniciar en el arranque):**
  Crea un enlace simbólico desde el repositorio de servicios al directorio de escaneo:
  ```bash
  ln -s /etc/sv/<servicio> /var/service/
  ```

- **Deshabilitar un servicio (no iniciar en el arranque):**
  Elimina el enlace simbólico del directorio de escaneo:
  ```bash
  rm /var/service/<servicio>
  ```
  *(Nota: esto también detendrá el servicio si `runsvdir` detecta la eliminación del enlace).*

### Control de Procesos Personalizado
Puedes personalizar cómo reacciona `runsv` a los comandos `sv` creando un subdirectorio `control` dentro del directorio de servicio y colocando scripts ejecutables de un solo carácter en él:
- `control/t`: Se ejecuta cuando se usa `sv term` (o `sv down`). Útil para secuencias de apagado controladas.
- `control/u`: Se ejecuta cuando se usa `sv up`, justo antes del script `run` principal.
- `control/d`: Se ejecuta después de enviar SIGTERM/SIGCONT cuando se usa `sv down`.

### La interfaz tipo LSB del programa sv
`sv` también acepta un conjunto de subcomandos similares a las acciones de los scripts de inicialización LSB:
- Los comandos `sv start`, `sv stop` y `sv shutdown` son equivalentes a `sv -v up`, `sv -v down` y `sv -v exit`, respectivamente.
- Los comandos `sv force-stop` y `sv force-shutdown`, o equivalentemente, `sv Down` y `sv Exit` (con mayúsculas 'D' y 'E'), se comportan como `sv stop` y `sv shutdown`, respectivamente, excepto que si la acción solicitada no se completa durante el período de espera, se envía una señal SIGKILL al proceso supervisado al agotarse el tiempo, como si se hubiera utilizado el comando `sv kill`. En ese caso, la línea de estado impresa por `sv` es precedida por 'kill:' seguido de un espacio.
- Los comandos `sv reload` y `sv try-restart` son equivalentes a `sv -v hup` y `sv -v term` respectivamente, excepto que este último también envía una señal SIGCONT al proceso supervisado después de la señal SIGTERM, como si se hubiera usado un comando `sv cont`.
- El comando `sv restart` es equivalente a `sv term` seguido de `sv cont` y luego `sv -v up`. Por tanto, a diferencia de `sv try-restart`, `sv restart` cancela el efecto de "no reiniciar" de un comando `sv once` previo.
- Los comandos `sv force-reload` y `sv force-restart` se comportan como `sv try-restart` y `sv restart`, respectivamente, excepto que si la acción solicitada no se completa en el tiempo de espera, se envía una señal SIGKILL al expirar el tiempo, al igual que con `sv force-stop` y `sv force-shutdown`. El comando `sv Term` (con 'T' mayúscula) es equivalente a `sv force-reload`.

El programa `sv` puede invocarse con el nombre de un directorio de servicio (usando cualquier mecanismo de sustitución `argv[0]`). En ese caso, el código de salida intenta cumplir con la especificación LSB: es 2 para errores de uso y 151 para errores fatales (rango reservado), en lugar de 100. Retorna 0, 3 o 4 según corresponda si el subcomando es status, y retorna 1 en error (no fatal) para otros subcomandos. Esto es útil si se coloca un enlace simbólico a `sv` en `/etc/init.d`, funcionando como un script LSB: al ejecutar este "script" con una acción, realmente se ejecuta `sv` con el nombre del servicio (por ejemplo, `/etc/init.d/foo try-restart` ejecuta `sv try-restart foo`).

Para la descripción completa de la funcionalidad de `sv`, consulta su página de manual.

### El archivo check
El programa `sv` acepta una opción `-v` ('verbose' o detallado) que hace que espere a que la acción se complete, e imprima el estado final, como si se usara `sv status`. El período de espera es el valor de la variable `SVWAIT` (en segundos), o 7 segundos por defecto. También se puede especificar con `-w`, sobrescribiendo `SVWAIT`. Si la acción se completa antes del límite, el estado muestra 'ok:' seguido de un espacio. Si no, `sv` sale con código distinto a cero y muestra 'timeout:'.

Para `sv -v up` (y `term` o `kill` si se espera que esté encendido), la acción termina cuando `runsv` considera que el proceso está en 'run'. Sin embargo, en servicios de servidor, el proceso puede no estar listo inmediatamente, pues hace tareas de inicialización. Runit permite usar un ejecutable `check` en el directorio de servicio para verificar si está listo. Al ejecutar los subcomandos anteriores, una vez en estado 'run', `sv` ejecuta `check` (si existe). Si este devuelve 0, considera que está listo e imprime 'ok'. Si no, reintenta cada 420 milisegundos hasta agotar el tiempo, donde imprimiría 'timeout'.
Además, el comando `sv check` puede usarse para verificar manualmente ejecutando el archivo `check` periódicamente durante el período de espera, sin alterar el estado. El comando `sv status` no usa el archivo `check`. Consulta el manual de `sv` para más información.

