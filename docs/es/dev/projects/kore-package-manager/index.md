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

## Uso

### Modo interactivo (TUI)

Llama a la herramienta sin argumentos para abrir la interfaz:

```bash
$ kpm
```

Usa las flechas para navegar, `Enter` para confirmar y `Esc` para volver o salir. El flujo guiado permite seleccionar la app, extraerla y definir el binario a enlazar en un solo paso.

### Interfaz de línea de comandos (CLI)

Para operaciones rápidas no interactivas, `kpm` soporta los siguientes comandos:

| Comando | Alias corto | Descripción |
|---|---|---|
| `list` | `-l`, `list-installed` | Lista las aplicaciones instaladas |
| `install` | `-i` | Instala una o más apps desde tarballs locales o repositorios |
| `remove` | `-r` | Desinstala una o más apps instaladas |
| `update` | `-u` | Actualiza apps instaladas desde repositorios |
| `repo` | — | Gestiona repositorios (oficial, comunitario, custom) |
| `help` | `-h`, `--help` | Imprime la ayuda completa |
| — | `-V`, `--version` | Muestra la versión instalada |
| `--update-bin` | — | Actualiza el binario de `kpm` a la última versión |

#### Instalación directa

Instala varias aplicaciones por nombre o por ruta a un archivo local:

```bash
$ kpm install obsidian waterfox discord
```

Para un archivo local único con metadatos personalizados, usa estos flags:

```bash
$ kpm install "/ruta/a/app.AppImage" --app-name "MiApp" --use-root "No" --category "Network"
```

| Flag | Descripción |
|---|---|
| `--app-name` (`-a`) | Nombre que la app muestra en el sistema |
| `--use-root` (`-u`) | Si el atajo `.desktop` requiere `pkexec` |
| `--category` (`-c`) | Categoría XDG para el menú (`Utility`, `Network`, `Game`, ...) |

#### Desinstalación inteligente

Borra la carpeta, el binario y el archivo `.desktop` de una o más apps a la vez:

```bash
$ kpm remove discord waterfox
```

#### Gestión de repositorios

El subcomando `repo` gestiona de dónde `kpm` obtiene las apps:

| Subcomando | Descripción |
|---|---|
| `kpm repo list` | Cantidad de paquetes disponibles por tipo (oficial, comunitario, usuario) |
| `kpm repo pkg-list` | Lista todos los paquetes disponibles para instalar |
| `kpm repo pkg-search <query>` | Busca un paquete por nombre en todos los repositorios |
| `kpm repo sync` | Sincroniza las listas oficial y comunitaria |
| `kpm repo add <nombre> <pkg> <url> <cat> [--requires-root]` | Añade un repositorio de terceros |
| `kpm repo remove <nombre>` | Elimina un repositorio custom |

### Autocompletado de shell

Instalar `kpm` con `install.sh` configura el autocompletado para Bash, Zsh y Fish. Pulsa `Tab` para completar comandos y flags.

## Arquitectura

Por defecto, la herramienta aísla los archivos instalados en la estructura adecuada del usuario:

- **Archivos extraídos:** `~/.local/share/binaries/[nombre-app]`
- **Binarios globales (symlinks):** `~/.local/bin/[nombre-app]`
- **Accesos directos (XDG Desktop):** `~/.local/share/applications/[nombre-app].desktop`
