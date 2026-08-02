---
title: Neko-Void OS Builder
description: Resumen de las herramientas y el proceso para construir la ISO Live de Neko-Void
---

# Neko-Void OS Builder

El builder de Neko-Void OS es el conjunto de scripts que producen la ISO Live de Neko-Void. La imagen resultante incluye soporte non-free out of the box: Steam, herramientas de gaming y drivers propietarios.

El sistema de compilación se basa en `live-maker` de Void Linux, extendido con la selección de paquetes, kernels y configuración de Neko-Void.

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

## Véase también

- [Compilar ISO](./build) — los comandos de compilación y las ediciones disponibles.
