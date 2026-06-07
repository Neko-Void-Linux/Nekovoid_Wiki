# Instalador Kasha

Un instalador de sistemas Linux modular construido con C y GTK+ 3.0.

## Características

- **Particionado Automático y Manual:**
    - *Modo UEFI:* Tabla de particiones GPT, ESP de 512MB (FAT32) y raíz Ext4.
    - *Modo Legacy:* Tabla de particiones MBR (MS-DOS), raíz Ext4 única con bandera de arranque (bootable).
- **Modos de Instalación:** Instalación limpia (borrar disco), Instalar Junto a (dual-boot), o Manual.
- **Cifrado:** Soporte LUKS para particiones.
- **Gestor de Arranque:** Instalación de GRUB tanto para sistemas EFI como BIOS.
- **Configuración del Sistema:** Gestión de idioma, nombre de host, zona horaria y cuenta de usuario.

