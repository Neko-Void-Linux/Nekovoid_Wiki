---
title: Kore Package Manager
description: Resumen de kpm, un gestor de paquetes minimalista en Rust para AppImages y tarballs
---

# Kore Package Manager

Kore (`kpm`) es un gestor de paquetes para Linux escrito en Rust. Instala aplicaciones distribuidas como tarballs (`.tar.gz`, `.tar.xz`, `.tar.bz2`) y AppImages (`.AppImage`) en una ubicación aislada, manteniendo limpio el directorio home.

Corre en Void Linux, Arch y cualquier sistema donde el software pre-compilado deba aterrizar sin tocar el sistema base. Ofrece una interfaz de terminal interactiva (TUI) y comandos directos por CLI.

- **Licencia:** BSD
- **Lenguaje:** Rust
- **Código fuente:** [GitHub](https://github.com/ezequielgk/Kore-Package-Manager)
- **Changelog:** [v2.1.6](https://github.com/ezequielgk/Kore-Package-Manager/blob/main/CHANGELOG.md)

## Características

- **Interfaz híbrida.** TUI interactiva y comandos directos por CLI.
- **Instalación aislada.** Extrae los archivos a `~/.local/share/binaries` y enlaza el binario en `~/.local/bin`.
- **Integración con el menú.** Genera atajos `.desktop` automáticamente.
- **Desinstalación atómica.** Borra la carpeta de la app, el enlace y el atajo en un solo paso.
- **Sin dependencias en runtime.** Escrito en Rust; no necesita wrappers de `fzf` o `bash`.

## Instalación

Instala la última versión pre-compilada:

```bash
$ curl -sSL https://raw.githubusercontent.com/ezequielgk/Kore-Package-Manager/main/install.sh | bash
```

::: tip
Asegúrate de que `~/.local/bin` esté en tu `$PATH` tras instalar.
:::

## Requisitos

La mayoría de dependencias vienen con cualquier sistema Linux por defecto:

- `tar` — usado para la descompresión
- `pkexec` (opcional) — solo para apps marcadas para pedir root
- `desktop-file-utils` (`update-desktop-database`) — para refrescar el menú de aplicaciones

## Véase también

- [Uso](./usage) — comandos interactivos y por CLI.
- [Arquitectura](./architecture) — cómo está estructurado Kore internamente.
