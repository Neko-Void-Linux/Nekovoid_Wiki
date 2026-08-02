---
title: musl
description: Qué es musl, por qué Neko-Void la usa y en qué se diferencia de glibc
---

# musl

## Resumen

musl es una librería estándar de C, la capa que todo programa en C usa para operaciones básicas: reservar memoria, acceder a archivos, manejar cadenas de texto y más. La mayoría de las distribuciones Linux usan **glibc**; musl es una alternativa más ligera centrada en la corrección, la simplicidad y el tamaño reducido.

Neko-Void prefiere musl donde es viable. Es una de las decisiones técnicas que mantiene el sistema ligero, en línea con el principio del proyecto de libertad y minimalismo.

## Por qué musl

| Aspecto | musl | glibc |
|---|---|---|
| Tamaño | Pequeño | Grande |
| Diseño | Simple, predecible | Rico en funciones, complejo |
| Uso de memoria | Menor | Mayor |
| Compatibilidad | La mayoría del software | Casi todo |
| Enlazado estático | Limpio, soportado | Problemático |

El trade-off principal de musl es la compatibilidad: algo de software cerrado y algunos programas antiguos esperan glibc y pueden necesitar workarounds. Para el resto — que es la mayor parte del ecosistema de software libre — musl funciona sin problema.

## Cómo saber qué librería usa un sistema

Ejecuta:

```bash
$ ldd /bin/ls | grep -E 'musl|glibc|libc\.so'
```

Un sistema musl muestra una ruta tipo `/lib/ld-musl-x86_64.so.1`. Un sistema glibc muestra `libc.so.6` y `/lib64/ld-linux-x86-64.so.2`.

## Ejecutar software glibc en un sistema musl

Cuando un programa requiere glibc, tienes opciones:

- **Flatpak.** El camino más limpio. Flatpak empaqueta su propio runtime, así que las aplicaciones glibc corren dentro de un Flatpak sin tocar el sistema base. Neko-Void incluye soporte de Flatpak por esto.
- **chroot o contenedor glibc.** Para casos más pesados, un chroot de Void glibc o un contenedor Distrobox ofrece un entorno glibc completo.
- **Binarios estáticos.** Cuando el software ofrece un build estático, no lleva dependencias de librería y corre en cualquier sitio.

Evita mezclar librerías glibc en un sistema base musl. Es frágil y no está soportado.

## Véase también

- [runit](./runit) — el sistema de init que usa Neko-Void, parte de la misma filosofía ligera.
- Documentación de Void Linux sobre [musl](https://docs.voidlinux.org/config/musl.html).
