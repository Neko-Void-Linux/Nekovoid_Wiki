---
title: Instalador Kasha
description: Resumen de Kasha, el instalador modular en C y GTK que usa Neko-Void
---

# Instalador Kasha

Kasha es el instalador del sistema que usa Neko-Void. Está escrito en C con una interfaz GTK+ 3.0 y se encarga del particionado del disco, la configuración del gestor de arranque, el cifrado y la configuración básica del sistema.

- **Lenguaje:** C
- **Toolkit de UI:** GTK+ 3.0
- **Código fuente:** [Codeberg](https://codeberg.org/javiercplus/Kasha-Installer)

## Características

- **Modos de particionado:**
    - UEFI: tabla GPT, ESP de 512MB (FAT32), raíz Ext4.
    - Legacy: tabla MBR (MS-DOS), raíz Ext4 única con bandera de arranque.
- **Modos de instalación:** limpia (borrar disco), junto a otro sistema (dual-boot) o manual.
- **Cifrado:** soporte LUKS para particiones.
- **Gestor de arranque:** GRUB tanto para sistemas EFI como BIOS.
- **Configuración del sistema:** idioma, nombre de host, zona horaria y cuenta de usuario.

## Arquitectura

### Estructura del proyecto

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

## Compilación y ejecución

### Dependencias

Instala lo siguiente antes de compilar:

- `gcc`
- `make`
- `pkg-config`
- Cabeceras de desarrollo de `gtk+-3.0`
- Para soporte LUKS: `bash`, `grub`, `xxd` y `sed`

En Devuan o Arch, usa la rama universal del proyecto.

### Compilación

Compila para el entorno por defecto:

```bash
$ make
```

Para otras distribuciones (Artix, Arch, Devuan, Debian):

```bash
$ make universal
```

Limpia los artefactos de compilación:

```bash
$ make clean
```

### Cambiar el logotipo

Para reemplazar el logotipo del instalador, convierte la imagen con `xxd` y déjala en el proyecto:

```bash
$ xxd -i logo.png > include/logo.h
```

Luego reemplaza `logo.h` en el árbol de código.

### Ejecutar

El instalador necesita root para manipular discos, formatear particiones y montar sistemas de archivos:

```bash
# ./neko_installer
```

O usa la regla de conveniencia:

```bash
# make run
```
