---
title: Compilar Kasha
description: Cómo compilar y ejecutar el instalador Kasha
---

# Compilar Kasha

## Dependencias

Instala lo siguiente antes de compilar:

- `gcc`
- `make`
- `pkg-config`
- Cabeceras de desarrollo de `gtk+-3.0`
- Para soporte LUKS: `bash`, `grub`, `xxd` y `sed`

En Devuan o Arch, usa la rama universal del proyecto.

## Compilación

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

## Cambiar el logotipo

Para reemplazar el logotipo del instalador, convierte la imagen con `xxd` y déjala en el proyecto:

```bash
$ xxd -i logo.png > include/logo.h
```

Luego reemplaza `logo.h` en el árbol de código.

## Ejecutar

El instalador necesita root para manipular discos, formatear particiones y montar sistemas de archivos:

```bash
# ./neko_installer
```

O usa la regla de conveniencia:

```bash
# make run
```
