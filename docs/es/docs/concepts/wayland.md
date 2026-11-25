---
title: Wayland
description: Protocolo gráfico Wayland en Neko Void, compositores soportados, Xwayland y solución de problemas
---

# Wayland

Wayland es un protocolo de comunicación moderno para Linux y sistemas tipo Unix que define cómo las aplicaciones interactúan directamente con el subsistema gráfico para renderizar elementos en pantalla y procesar la entrada de teclado, ratón y paneles táctiles.

A diferencia del modelo tradicional de X11, Wayland elimina el intermediario del servidor gráfico independiente. Las aplicaciones renderizan sus gráficos directamente en búferes de memoria compartida y se comunican con el compositor (el gestor de ventanas). El compositor actúa como el servidor gráfico definitivo, combinando todos los búferes del sistema para dibujar la escena final que se presenta en la pantalla del monitor.

## Requisitos

La gran mayoría de los compositores de Wayland requieren soporte de **Kernel Mode Setting (KMS)** a nivel del núcleo Linux. Wayland por sí mismo no proporciona una interfaz de usuario completa; requiere un compositor independiente o un entorno de escritorio que integre su propio compositor (por ejemplo, KDE Plasma con KWin).

Para que el controlador de la GPU y el compositor Wayland se comuniquen adecuadamente, ambos deben utilizar la misma API de búfer:

| API de búfer | Compatibilidad de controladores GPU | Soporte de compositores Wayland |
| :--- | :--- | :--- |
| **GBM** | Prácticamente todos (incluyendo NVIDIA ≥ 495) | Prácticamente todos |
| **EGLStreams** | NVIDIA heredado | Limitado (p. ej. GNOME heredado) |

> [!NOTE] Soporte NVIDIA
> Los controladores de NVIDIA a partir de la versión 495 soportan de forma nativa la API GBM.

### Comprobación de registros en Neko Void (runit)

Dado que Neko Void utiliza **runit** y prescinde de systemd, la herramienta `journalctl` no está presente. Para revisar qué renderizador está activo y verificar la inicialización gráfica, consulta la salida estándar de tu compositor en la TTY o inspecciona el archivo de registro generado por tu gestor de inicio de sesión:

```bash
cat ~/.local/share/sddm/wayland-session.log
```

Para forzar GBM como backend de forma global con tarjetas NVIDIA, añade las siguientes variables en `/etc/environment` o en tu perfil de usuario (`~/.bash_profile` / `~/.profile`):

```bash
GBM_BACKEND=nvidia-drm
__GLX_VENDOR_LIBRARY_NAME=nvidia
```

## Compositores disponibles

Además de entornos completos como KDE Plasma, Neko Void ofrece soporte de primera clase para diversos compositores independientes y ligeros. Muchos de ellos utilizan **Noctalia shell** como entorno de shell predeterminado:

### Mosaico (Tiling)

- **Niri**: Un compositor de mosaico dinámico con desplazamiento horizontal continuo (scrollable tiling).
- **MangoWM**: Compositor ligero y rápido con efectos visuales, basado en wlroots y scenefx.
- **Sway**: Compositor de mosaico compatible con la sintaxis de atajos de i3, construido sobre wlroots.

### Apilamiento (Stacking)

- **LabWC**: Compositor de ventanas apiladas basado en wlroots, inspirado en la filosofía y ligereza de Openbox.

### Alternativas en repositorios de Void Linux

Los repositorios oficiales de Void Linux disponen de una amplia selección de compositores adicionales:

- **SwayFX**: Derivado de Sway con efectos visuales avanzados (sombras, esquinas redondeadas y desenfoque).
- **River**: Compositor de mosaico dinámico y flexible, inspirado en dwm y bspwm.
- **Cagebreak**: Compositor en mosaico basado en cage e inspirado en ratpoison.
- **Qtile**: Gestor de ventanas y compositor Wayland altamente personalizable escrito en Python (paquete `qtile-wayland`).
- **Wayfire**: Compositor 3D con transiciones y animaciones fluidas inspirado en Compiz.

## Gestores de inicio de sesión

Los siguientes gestores de pantalla disponibles en Neko Void soportan el inicio de sesiones Wayland:

- **Emptty**: Gestor de inicio de sesión TUI ultraligero sin dependencias X11.
- **LightDM**: Gestor configurable con soporte para sesiones Wayland.
- **SDDM**: Gestor moderno basado en QML, recomendado para KDE Plasma y entornos basados en Qt.
- **GDM**: Gestor de pantalla oficial del proyecto GNOME.
- **Greetd**: Daemon extensible de login que soporta diversos frontends en consola y gráficos.

## Xwayland

**Xwayland** es una capa de compatibilidad que permite ejecutar videojuegos y aplicaciones clásicas diseñadas exclusivamente para X11 dentro de una sesión nativa de Wayland de manera transparente.

Para habilitarlo, instala el paquete correspondiente:

```bash
# Para la mayoría de compositores basados en wlroots y KDE:
xbps-install -S xorg-server-xwayland

# Si utilizas Niri, se requiere el gestor auxiliar xwayland-satellite:
xbps-install -S xwayland-satellite
```

> [!IMPORTANT] Consideraciones sobre Xwayland
> - **Seguridad**: Al tratarse de un servidor X en memoria, no proporciona el aislamiento de seguridad estricto que caracteriza a Wayland.
> - **Rendimiento**: Ofrece un rendimiento cercano a X11 nativo, aunque en hardware NVIDIA antiguo puede haber variaciones.
> - **Compatibilidad**: Aunque cubre la mayoría de casos de uso, algunas herramientas avanzadas de captura global de X11 requieren ajustes o alternativas nativas.

### Detectar aplicaciones que se ejecutan sobre Xwayland

Puedes verificar si una ventana activa está utilizando Xwayland con cualquiera de estos métodos:

1. **Con `xeyes`**: Ejecuta `xeyes` en la terminal. Si los ojos siguen el puntero cuando está sobre la ventana de la aplicación, dicha aplicación está corriendo bajo Xwayland.
2. **Con `xwininfo`**: Ejecuta `xwininfo` en una terminal. Al pasar el cursor sobre una ventana Xwayland, el puntero se convertirá en una cruz (`+`). Al hacer clic en la ventana se imprimirá la información técnica correspondiente.

## Consejos y trucos

### Herramientas de automatización

- **`ydotool`**: Utilidad genérica de automatización por línea de comandos para simular pulsaciones y movimientos. Requiere habilitar el servicio `ydotoold` con runit en `/var/service/` y añadir tu usuario al grupo `input` (`usermod -aG input <usuario>`).
- **`wtype`**: Emulador de pulsaciones de teclado diseñado específicamente para compositores compatibles con el protocolo virtual keyboard de Wayland.
- **Librerías Python (`keyboard`, `mouse`)**: Permiten interceptar y simular eventos globales de entrada leyendo directamente desde `/dev/input/` (requieren permisos de superusuario o pertenecer a `input`).

### Reasignación de teclas y botones

- **`input-remapper`**: Herramienta gráfica para mapear teclas, botones del ratón, macros y combinaciones complejas.
- **`xremap`**: Demonio de remapeo de teclas agnóstico para Wayland con configuración en YAML y soporte para atajos específicos por aplicación.

## Solución de problemas

### Pantalla remota y transmisión

- **`wayvnc`**: Servidor VNC para compositores basados en wlroots (como Sway).
- **`krfb` & `krfb-virtualmonitor`**: Solución VNC para KWin en KDE Plasma con capacidad para crear monitores virtuales adicionales.
- **`waypipe`**: Proxy transparente para aplicaciones de Wayland que permite reenviar interfaces gráficas mediante túneles SSH:

```bash
waypipe ssh usuario@servidor.local env QT_QPA_PLATFORM=wayland-egl dbus-launch kcalc
```

### Captura de entrada en videojuegos y máquinas virtuales

A diferencia de X11, Wayland no permite por seguridad que cualquier aplicación capture globalmente el teclado y ratón. El compositor se encarga de confinar el puntero y gestionar atajos mediante extensiones de protocolo dedicadas (como `pointer-constraints` y `relative-pointer`). Asegúrate de que tu compositor tenga habilitadas estas extensiones.

### Temas GTK en compositores independientes

Para sincronizar tus temas GTK, cursores e iconos en compositores independientes sin un panel de control integrado, instala la utilidad gráfica **`nwg-look`**:

```bash
xbps-install -S nwg-look
```

Para más detalles, consulta la [guía de configuración GTK-3 en Wayland de Sway](https://github.com/swaywm/sway/wiki/GTK-3-settings-on-Wayland).

### Aplicaciones X11 con escalado borroso en Xwayland

En monitores con escalado HiDPI fraccional, algunas aplicaciones X11 pueden verse borrosas debido al remuestreo de mapa de bits. Este comportamiento está documentado en la [propuesta de escalado nítido para xserver](https://gitlab.freedesktop.org/xorg/xserver/-/work_items/1318).
