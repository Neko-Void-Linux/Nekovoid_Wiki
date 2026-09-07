---
title: musl
description: Qué es musl, por qué Neko-Void la usa y en qué se diferencia de glibc
---

# musl

## Resumen

musl es una librería estándar de C. Todo programa en C depende de ella para reservar memoria, acceder a archivos, manejar cadenas de texto y otras operaciones básicas. La mayoría de las distribuciones Linux usan glibc; musl es una alternativa más ligera, construida en torno a la corrección, la simplicidad y el tamaño reducido.

Neko-Void usa musl donde es viable. Mantiene el sistema ligero y se mantiene fuera del camino.

## Por qué musl

| Aspecto | musl | glibc |
|---|---|---|
| Tamaño | Pequeño | Grande |
| Diseño | Simple, predecible | Rico en funciones, complejo |
| Uso de memoria | Menor | Mayor |
| Compatibilidad | La mayoría del software | Casi todo |
| Enlazado estático | Limpio, soportado | Problemático |

El trade-off es la compatibilidad. Algo de software cerrado y algunos programas antiguos esperan glibc y necesitan workarounds. El resto del ecosistema de software libre corre en musl sin problema.

## Cómo saber qué librería usa un sistema

```bash
$ ldd /bin/ls | grep -E 'musl|glibc|libc\.so'
```

Un sistema musl muestra una ruta tipo `/lib/ld-musl-x86_64.so.1`. Un sistema glibc muestra `libc.so.6` y `/lib64/ld-linux-x86-64.so.2`.

## Ejecutar software glibc en un sistema musl

Cuando un programa requiere glibc, hay tres caminos habituales:

- **Flatpak.** La opción más limpia. Flatpak empaqueta su propio runtime, así que las aplicaciones glibc corren sin tocar el sistema base. Neko-Void incluye soporte de Flatpak por esto.
- **chroot o contenedor glibc.** Para casos más pesados, un chroot de Void glibc o un contenedor Distrobox ofrece un entorno glibc completo.
- **Binarios estáticos.** Un build estático no lleva dependencias de librería y corre en cualquier sitio.

No mezcles librerías glibc en un sistema base musl. Es frágil y no está soportado.
