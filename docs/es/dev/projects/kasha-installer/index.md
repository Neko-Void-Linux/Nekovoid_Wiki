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

## Véase también

- [Arquitectura](./architecture) — cómo está estructurado Kasha.
- [Compilación](./build) — cómo compilar y ejecutar Kasha.
