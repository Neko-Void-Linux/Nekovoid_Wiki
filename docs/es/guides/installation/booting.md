---
title: Arranque en modo Live
description: Cómo arrancar la sesión Live y el instalador de Neko-Void desde la memoria USB
---

# Arranque en modo Live

## Resumen

El arranque en modo Live te permite probar Neko-Void OS directamente desde la memoria USB sin realizar modificaciones en tus unidades de almacenamiento, además de darte acceso al instalador del sistema.

## Pasos

1. **Conectar la memoria USB**: Inserta la unidad USB preparada en tu computadora.
2. **Reiniciar el equipo**: Reinicia tu computadora.
3. **Acceder al menú de arranque (Boot Menu)**: Al encender el equipo, presiona repetidamente la tecla del Boot Menu de tu BIOS/UEFI (generalmente `F12`, `F11`, `F8`, `F10` o `Esc` según el fabricante de la placa base).
4. **Seleccionar la unidad USB**: En la lista de dispositivos, elige tu memoria USB.
5. **Iniciar Neko Void**: En el menú de inicio (GRUB o Ventoy), selecciona la primera opción para arrancar Neko Void en modo Live y presiona `Enter`.

## Credenciales de la sesión Live

Si el entorno solicita inicio de sesión en modo Live o en la terminal, utiliza las siguientes credenciales predeterminadas:

- **Usuario:** `anon`
- **Contraseña:** `voidlinux`

## Véase también

- [Instalar Neko Void](./installing)
- [Crear medio de instalación](./installation-media)
