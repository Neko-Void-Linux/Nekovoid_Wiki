---
title: Compilar la ISO de Neko-Void
description: Comandos y opciones para construir la ISO Live de Neko-Void
---

# Compilar la ISO de Neko-Void

## Requisitos previos

Antes de compilar, completa la [configuración inicial](./) de la página de resumen: clona el repositorio e inicializa los submódulos. La compilación se ejecuta desde el directorio `live-maker`.

## Ediciones estándar

Compila las ISO estándar de Neko-Void:

```bash
$ cd live-maker

# Edición X.Org
$ bash neko-builder.sh xorg

# Edición Xlibre
$ bash neko-builder.sh xlibre
```

## Ediciones rolling (último kernel)

Compila las ediciones con el kernel más reciente:

```bash
$ cd live-maker

# Edición Rolling X.Org
$ bash neko-builder.sh rolling

# Edición Rolling Xlibre
$ bash neko-builder.sh rollibre
```

## Uso avanzado

El script `neko-builder.sh` admite argumentos para compilaciones interactivas o personalizadas:

```bash
$ ./neko-builder.sh                     # Modo interactivo
$ ./neko-builder.sh <desktop>           # Compilar un escritorio específico
$ ./neko-builder.sh <desktop> -e "pkg"  # Añadir paquetes extra
$ ./neko-builder.sh doble               # Compilar xlibre + xorg
$ ./neko-builder.sh doble-isor          # Compilar rollibre + rolling
```

## Véase también

- [Resumen de Neko-Void OS Builder](./) — configuración inicial y estructura del repositorio.
