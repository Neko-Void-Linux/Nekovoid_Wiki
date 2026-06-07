# Arquitectura y Estructura

## Estructura del Proyecto

- `include/`: Contiene `neko_installer.h` con las estructuras de datos principales y los prototipos de funciones.
- `src/core/`: Lógica de la aplicación y pasos de instalación.
    - `main.c`: Punto de entrada e inicialización de GTK.
    - `installer.c`: Coordinación del hilo de instalación y registros (logging).
    - `installer_steps.c`: Pasos individuales (particionado, formateo, copia de archivos, configuración secundaria).
    - `partition_utils.c`: Lógica para el descubrimiento de discos y mapeo de particiones.
    - `utils.c`: Ayudantes genéricos (ejecución de shell, obtención de UUID, detección de EFI).
- `src/ui/`: Componentes de la interfaz de usuario en GTK+ 3.0.
    - `ui.c`: Desarrollo de la ventana principal y estructura de pestañas.
    - `ui_partition.c`: Diálogos de selección de partición y particionado manual.
    - `ui_callbacks.c`: Manejadores de eventos para la navegación y la entrada del usuario.

