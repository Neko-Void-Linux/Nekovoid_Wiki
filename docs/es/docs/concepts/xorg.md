---
title: Xorg
description: Servidor de pantalla X11 en Neko Void, inicio de sesión, paquetes y configuración de dispositivos
---

# Xorg (X11)

X.Org Server (comúnmente conocido como Xorg Server o simplemente como Xorg) es la implementación del servidor de pantallas del sistema de ventanas X (X11) mantenida por la fundación X.Org, y es uno de los servidores de pantalla más extendidos y estables en el ecosistema Linux. Su ubicuidad lo ha convertido en un estándar histórico para aplicaciones gráficas, con amplia compatibilidad y adopción en la mayoría de distribuciones.

## Iniciando una sesión X

El comando `Xorg` generalmente no se ejecuta de forma directa por el usuario. En su lugar, el servidor X se inicializa a través de un gestor de inicio de sesión gráfico (Display Manager) o manualmente mediante el comando `xinit`.

Para iniciar un gestor de ventanas o entorno de escritorio usando `xinit`, añade el comando de ejecución correspondiente en tu archivo personal `~/.xinitrc` antes de la última línea. Por ejemplo, para iniciar i3:

```bash
exec /bin/i3
```

> [!NOTE]
> Si tu entorno gráfico requiere servicios de comunicación interprocesos (como control de volumen multimedia, applets de bandeja o notificaciones de escritorio), inicia la sesión mediante D-Bus anteponiendo `dbus-run-session` en la misma línea:
>
> ```bash
> exec dbus-run-session /bin/i3
> ```

En la mayoría de los casos no es necesario configurar `xinit`, ya que la edición que hayas elegido de Neko Void suele incluir un gestor de pantalla preinstalado y habilitado por defecto mediante runit.

> [!TIP] Opciones de instalación de paquetes en Void Linux
> - **Meta-paquete completo (`xorg`)**: Los repositorios de Void proporcionan el paquete `xorg`, el cual instala automáticamente el servidor base, los controladores de vídeo comunes y utilidades esenciales.
> - **Alternativa minimalista (`xorg-minimal`)**: Si buscas una instalación ligera y reducida al mínimo, puedes instalar `xorg-minimal`. Ten en cuenta que este paquete no incluye tipografías básicas, por lo que es indispensable instalar también `xorg-fonts` para evitar pantallas negras, fuentes ilegibles o fallos de renderizado en tu entorno.

## Generación de xorg.conf

Xorg puede ser configurado a nivel global mediante `/etc/X11/xorg.conf` o `/etc/xorg.conf`.

Si necesitas generar un archivo de configuración base automático, puedes ejecutar:

```bash
Xorg :0 -configure
```

Este comando generará el archivo `xorg.conf.new` en el directorio `/root/`, el cual puedes revisar y mover a `/etc/xorg.conf` o `/etc/X11/xorg.conf`.

## Configuración modular (xorg.conf.d)

En sistemas modernos, Xorg detecta automáticamente la gran mayoría del hardware de vídeo y dispositivos de entrada sin requerir intervención manual. Sin embargo, puedes crear archivos de configuración modulares dentro de `/etc/X11/xorg.conf.d/` para aplicar reglas específicas.

### Configuración del teclado con libinput

Para definir el comportamiento de teclados y dispositivos de entrada se recomienda utilizar el controlador `libinput`. A continuación se muestra un ejemplo para establecer la distribución de teclado en español mediante `/etc/X11/xorg.conf.d/30-keyboard.conf`:

```ini
Section "InputClass"
    Identifier "keyboard-all"
    Driver "libinput"
    MatchIsKeyboard "on"
    Option "XkbLayout" "es"
EndSection
```

Para consultar más ejemplos y opciones avanzadas de configuración de entrada, puedes revisar la documentación de referencia de [Input device configuration en Fedora Project](https://fedoraproject.org/wiki/Input_device_configuration#xorg.conf.d).
