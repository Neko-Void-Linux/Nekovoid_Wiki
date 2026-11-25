---
title: Guía de instalación
description: Guía completa paso a paso para instalar Neko Void Linux, desde la comprobación de requisitos hasta los primeros pasos posteriores.
---

# Guía de instalación

Bienvenido a la guía integral de instalación de **Neko Void Linux**. En esta página encontrarás todos los pasos necesarios de principio a fin: comprobar los requisitos del sistema, crear el medio de instalación en USB, arrancar en modo Live y completar la instalación gráfica con el **Instalador Kasha**.

::: tip Navegación rápida
Puedes desplazarte a cualquier sección de esta guía usando el menú lateral derecho de contenidos o estos accesos directos:
- [1. Requisitos del sistema](#requisitos-del-sistema)
- [2. Creando el medio de instalación](#creando-el-medio-de-instalacion)
- [3. Arrancando en modo Live](#arrancando-en-modo-live)
- [4. Instalando Neko Void (Instalador Kasha)](#instalando-neko-void)
- [5. Pasos posteriores y configuración](#pasos-posteriores)
:::

---

## Requisitos del sistema

Antes de iniciar la instalación, asegúrate de que tu equipo cumple con las especificaciones de hardware necesarias. Neko Void está diseñado para ser extremadamente ligero y ágil, aunque los recursos requeridos varían según el entorno de escritorio o gestor de ventanas seleccionado.

| Categoría | Requisitos mínimos | Requisitos recomendados |
|---|---|---|
| **Entornos ligeros (XFCE, MATE, IceWM)** | 2 GB de RAM | 4 GB de RAM |
| **Otros entornos / Compositores modernos** | 4 GB de RAM | 8 GB de RAM o más |
| **Procesador mínimo** | Intel Celeron o Pentium (64 bits), 1 núcleo, 1.10 GHz | CPU de 64 bits de 2 núcleos o más (2.0 GHz+) |
| **Almacenamiento** | 64 GB de espacio disponible | 120 GB o más (recomendado SSD) |
| **Memoria gráfica (VRAM)** | GPU integrada o dedicada con 16 MB | GPU dedicada o iGPU con 512 MB o superior |

### Lista de verificación previa

Revisa estos puntos clave antes de continuar:

- [x] **Arquitectura de 64 bits**: El procesador de tu equipo soporta instrucciones x86_64.
- [x] **Espacio en disco**: El disco de destino dispone de al menos 64 GB libres.
- [x] **Copia de seguridad**: Respalda en una unidad externa o en la nube cualquier dato importante del disco donde vayas a instalar el sistema.
- [x] **Elección del entorno**: Selecciona un entorno acorde a la memoria RAM de tu equipo (por ejemplo, IceWM o XFCE para máquinas con 2 GB).

::: warning Aviso importante sobre seguridad de datos
El proceso de instalación modifica o formatea las particiones del disco seleccionado. Confirma que el disco elegido sea el correcto y respalda tus datos antes de aplicar los cambios de particionado.
:::

### Comprobar el hardware en Linux

Si te encuentras en una sesión de Linux o en un USB en vivo, puedes verificar los componentes de tu equipo ejecutando estos comandos en la terminal:

```bash
$ free -h                        # Memoria RAM disponible
$ lscpu                          # Arquitectura y datos del procesador
$ lsblk -d -o NAME,SIZE,MODEL    # Discos detectados y su capacidad
$ lspci | grep -E 'VGA|3D|Display' # Tarjeta gráfica detectada
```

---

## Creando el medio de instalación

La forma más fácil y recomendada de preparar la instalación de Neko Void es mediante una memoria USB utilizando **[Ventoy](https://www.ventoy.net/en/download.html)**.

Ventoy convierte tu memoria USB en una unidad de arranque múltiple donde solo necesitas copiar y pegar archivos ISO directamente, sin necesidad de formatear cada vez que añadas una nueva imagen.

### Instrucciones de preparación (Windows, macOS o Linux)

1. **Descargar Ventoy**: Accede a la [página oficial de descargas de Ventoy](https://www.ventoy.net/en/download.html), descarga el paquete correspondiente a tu sistema operativo y extráelo.
2. **Instalar Ventoy en el USB**: Conecta tu memoria USB (mínimo 8 GB recomendados), ejecuta la aplicación de Ventoy (`Ventoy2Disk`), selecciona tu unidad USB en la lista y presiona el botón **Install** (Instalar).
   ::: danger Advertencia
   La instalación de Ventoy formateará la memoria USB seleccionada. Asegúrate de que no contenga archivos esenciales.
   :::
3. **Copiar la imagen ISO**: Al terminar la instalación, el USB aparecerá como una unidad de almacenamiento estándar llamada `Ventoy`. Descarga la última **ISO de Neko Void** desde [neko-void-linux.online](https://www.neko-void-linux.online/#downloads) y simplemente copia o arrastra el archivo `.iso` al interior de la memoria USB.

<div class="theme-aware-image">
  <img class="theme-image-light" src="/guides/installation/ventoy-ex-sp.png" alt="Captura de la herramienta Ventoy2Disk en español" />
  <img class="theme-image-dark" src="/guides/installation/ventoy-ex-sp-dark.png" alt="Captura de la herramienta Ventoy2Disk en modo oscuro" />
</div>

---

## Arrancando en modo Live

Con tu memoria USB preparada:

1. **Inserta la memoria USB** en la computadora donde instalarás Neko Void.
2. **Enciende o reinicia el equipo**.
3. **Abre el menú de arranque (Boot Menu)**: Nada más encender el equipo, presiona repetidamente la tecla del menú de arranque de tu placa madre (habitualmente `F12`, `F11`, `F8`, `F10`, `Esc` o `Supr/Del` según el fabricante).
4. **Selecciona tu memoria USB** en la lista y presiona `Enter`.

### Menú de arranque de Neko Void

Al iniciar la imagen ISO se mostrará el menú del cargador de arranque de Neko Void:

<div class="theme-aware-image">
  <img src="/guides/installation/boot-menu.png" alt="Menú de arranque de Neko Void mostrando la opción Live" />
</div>

Selecciona la primera opción (**Neko Void Live**) y presiona `Enter`. El sistema iniciará la sesión gráfica en vivo.

### Credenciales de la sesión Live

Una vez en el escritorio, podrás navegar y comprobar el funcionamiento de tu hardware (Wi-Fi, audio, resolución de pantalla) antes de instalar:

- **Usuario:** `anon`
- **Contraseña:** `voidlinux`

<div class="theme-aware-image">
  <img src="/guides/installation/live-mode.png" alt="Vista previa del escritorio en vivo de Neko Void" />
</div>

---

## Instalando Neko Void

Cuando estés listo para instalar Neko Void de forma permanente en el almacenamiento de tu equipo, abre el instalador haciendo doble clic en el icono **Instalar Neko Void** del escritorio.

<div class="theme-aware-image">
  <img src="/guides/installation/installer.png" alt="Icono de acceso al instalador Kasha en el escritorio" />
</div>

Se abrirá el **Instalador Kasha**. Selecciona tu idioma preferido y continúa con el asistente a través de los siguientes pasos:

### 1. Tipo de instalación

Selecciona el modo de instalación:

- **Instalación limpia (borrar todo el disco)**: Recomendado para la mayoría de usuarios. Formatea automáticamente el disco elegido y crea la estructura de particiones óptima para Neko Void.
- **Particionado manual**: Para usuarios con experiencia que deseen conservar particiones existentes, puntos de montaje específicos o configuraciones de arranque dual (dual-boot).

<div class="theme-aware-image">
  <img src="/guides/installation/type-i.png" alt="Selección del tipo de instalación en el instalador Kasha" />
</div>

### 2. Particiones del disco

En la sección **Particiones**, selecciona el disco duro o SSD de destino. Verifica el nombre y capacidad del dispositivo (`/dev/sda`, `/dev/nvme0n1`, etc.) para evitar seleccionar un disco secundario por error.

<div class="theme-aware-image">
  <img src="/guides/installation/partitions.png" alt="Configuración de particiones y disco en el instalador Kasha" />
</div>

### 3. Entorno de escritorio

Elige tu interfaz gráfica y entorno de usuario favorito entre las opciones disponibles (entornos completos como XFCE o MATE, o gestores de ventanas ligeros).

<div class="theme-aware-image">
  <img src="/guides/installation/desks.png" alt="Selección del entorno de escritorio en el instalador" />
</div>

### 4. Gestor de arranque (GRUB)

Configura el cargador de arranque `GRUB`. Selecciona el disco principal donde se instalará el registro maestro o la partición EFI para que el equipo arranque Neko Void de manera automática.

<div class="theme-aware-image">
  <img src="/guides/installation/grub.png" alt="Selección del disco de destino para el gestor de arranque GRUB" />
</div>

### 5. Configuración del sistema

Personaliza los parámetros regionales y de red:

- **Nombre del equipo (Hostname)**: Identificador de la máquina en tu red local.
- **Zona horaria**: Selecciona tu región y huso horario.
- **Distribución de teclado**: Selecciona el idioma y mapa de teclado correspondiente a tus teclas.

<div class="theme-aware-image">
  <img src="/guides/installation/config-sys.png" alt="Configuración del sistema: nombre de equipo, zona horaria y teclado" />
</div>

### 6. Cuentas de usuario y Root

Configura los accesos del sistema:

- **Nombre y usuario**: Tu cuenta de uso cotidiano y su contraseña.
- **Inicio de sesión automático (Auto-Login)**: Actívalo si prefieres acceder al escritorio sin ingresar contraseña al encender el equipo.

<div class="theme-aware-image">
  <img src="/guides/installation/users.png" alt="Configuración de usuario y opción de auto-login" />
</div>

### 7. Seguridad y escalador de privilegios

- **Contraseña de Root**: Define la contraseña del administrador del sistema. Por seguridad, se recomienda utilizar una contraseña distinta a la del usuario normal.
- **Escalador de privilegios**: Selecciona la herramienta para elevar privilegios. Se recomienda `doas` por su ligereza y simplicidad de configuración.

<div class="theme-aware-image">
  <img src="/guides/installation/root.png" alt="Configuración de la contraseña root y selección del escalador doas" />
</div>

### 8. Finalización y reinicio

Revisa el resumen final y presiona el botón para iniciar la instalación. Kasha particionará el disco, copiará el sistema base, aplicará la configuración e instalará GRUB.

Cuando el instalador indique que la instalación ha concluido con éxito:

1. Retira la memoria USB del ordenador.
2. Presiona el botón **Reiniciar ahora**.
3. El equipo se reiniciará directamente en tu nueva instalación limpia de Neko Void.

---

## Pasos posteriores

¡Felicidades! Ya tienes Neko Void instalado en tu ordenador. Continúa explorando los siguientes temas clave para personalizar y administrar tu sistema:

- **Sistema Init y Servicios**: Aprende a gestionar demonios y servicios con [runit (Sistema Init)](/es/docs/concepts/runit).
- **Servidores y protocolos gráficos**: Conoce la configuración de [Wayland](/es/docs/concepts/wayland) y [Xorg (X11)](/es/docs/concepts/xorg).
- **Configuración del sistema**: Consulta la [Configuración global](/es/docs/configuration/) para ajustar opciones avanzadas.
- **Gestión de paquetes**: Descubre el gestor [Kore Package Manager](/es/dev/projects/kore-package-manager/) y el gestor nativo de Void Linux `xbps`.
- **Solución de problemas**: Si encuentras algún inconveniente con Wi-Fi, audio o gráficos, revisa la guía de [Problemas comunes](/es/guides/troubleshooting/common-issues).
