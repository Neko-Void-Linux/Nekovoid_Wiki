---
title: Neko-Void OS Builder
description: Resumen de las herramientas y el proceso para construir la ISO Live de Neko-Void
---

# Neko-Void OS Builder

El builder de Neko-Void OS es el conjunto de scripts que construyen la ISO Live de Neko-Void. La imagen resultante trae soporte non-free out of the box: Steam, herramientas de gaming y drivers propietarios.

Se construye sobre `live-maker` de Void Linux, extendido con la selección de paquetes, kernels y configuración de Neko-Void.

- **Base:** `live-maker` de Void Linux
- **Código fuente:** [Codeberg](https://codeberg.org/javiercplus/Neko-Void)
- **Salida:** ISO Live arrancable (ediciones X.Org y Xlibre)

## Configuración inicial

Clona el repositorio e inicializa los submódulos:

```bash
$ git clone https://codeberg.org/javiercplus/Neko-Void.git
$ cd Neko-Void
$ git submodule update --init --recursive
```

Los submódulos incluyen Neko Wizard y el módulo del instalador Kasha, que se integran en la ISO.

## Compilar la ISO

### Requisitos previos

Completa la configuración anterior antes de compilar. La compilación se ejecuta desde el directorio `live-maker`.

### Ediciones estándar

Compila las ISO estándar de Neko-Void:

```bash
$ cd live-maker

# Edición X.Org
$ bash neko-builder.sh xorg

# Edición Xlibre
$ bash neko-builder.sh xlibre
```

### Ediciones rolling

Compila las ediciones con el kernel más reciente:

```bash
$ cd live-maker

# Edición Rolling X.Org
$ bash neko-builder.sh rolling

# Edición Rolling Xlibre
$ bash neko-builder.sh rollibre
```

### Uso avanzado

El script `neko-builder.sh` admite argumentos para compilaciones interactivas o personalizadas:

```bash
$ ./neko-builder.sh                     # Modo interactivo
$ ./neko-builder.sh <desktop>           # Compilar un escritorio específico
$ ./neko-builder.sh <desktop> -e "pkg"  # Añadir paquetes extra
$ ./neko-builder.sh doble               # Compilar xlibre + xorg
$ ./neko-builder.sh doble-isor          # Compilar rollibre + rolling
```
