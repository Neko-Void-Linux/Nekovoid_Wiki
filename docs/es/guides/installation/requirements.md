---
title: Requisitos Neko Void
description: Comprueba si tu equipo está preparado para instalar y ejecutar Neko Void
---

# Requisitos Neko Void

Esta página resume el hardware necesario y ofrece una comprobación rápida antes de crear el medio de instalación.

| Categoría | Requisitos mínimos | Requisitos recomendados |
|---|---|---|
| **Entorno XFCE, MATE e IceWM** | 2 GB de RAM | 4 GB de RAM |
| **Otros entornos de escritorio** | 4 GB de RAM | 4 GB de RAM o más |
| **Procesador mínimo** | Intel Celeron o Pentium, 1 núcleo, 1.10 GHz, arquitectura de 64 bits | Intel Celeron o Pentium de segunda generación, 2 núcleos, 64 bits |
| **Almacenamiento** | 64 GB | 64 GB o más |
| **Memoria gráfica** | GPU integrada o dedicada con 16 MB | iGPU o GPU dedicada con 512 MB o más |

## Antes de instalar

Confirma estos puntos antes de iniciar la instalación:

- El procesador utiliza una arquitectura de 64 bits.
- El disco de destino tiene al menos 64 GB disponibles para el sistema.
- Tienes una copia de seguridad de los archivos importantes del disco de destino.
- Has elegido un entorno de escritorio acorde con la memoria disponible.

::: warning
La instalación puede modificar las particiones del disco. Revisa el disco seleccionado y respalda tus datos antes de continuar.
:::

## Comprobar el hardware

Puedes consultar la información principal desde una sesión Linux con estos comandos:

```bash
$ free -h                 # Memoria RAM disponible
$ lscpu                   # Arquitectura y procesador
$ lsblk -d -o NAME,SIZE,MODEL  # Discos y capacidad
$ lspci | grep -E 'VGA|3D|Display'  # GPU detectada
```

Compara la salida con la tabla anterior. Si `lspci` no está disponible, omite esa línea y revisa la memoria gráfica desde la configuración del sistema.

## Elegir el entorno adecuado

Con 2 GB de RAM, prioriza XFCE, MATE o IceWM. Con 4 GB o más puedes considerar otros entornos, teniendo en cuenta que las aplicaciones abiertas también consumen memoria.

La memoria gráfica recomendada ayuda a mantener una experiencia más fluida, especialmente al usar compositores, pantallas de alta resolución o aplicaciones visuales.

## Lista de comprobación

Antes de arrancar desde el medio de instalación, confirma que:

1. La ISO se descargó completamente.
2. El medio de instalación fue creado en el dispositivo USB correcto.
3. Los archivos del disco de destino están respaldados.
4. El equipo arranca desde USB y puedes identificar el disco donde instalarás Neko Void.
