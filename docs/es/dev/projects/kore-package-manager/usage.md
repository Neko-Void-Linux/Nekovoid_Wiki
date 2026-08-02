---
title: Uso de Kore
description: Cómo usar kpm, el Kore Package Manager, en modo interactivo y por CLI
---

# Uso de Kore

## Modo interactivo (TUI)

Llama a la herramienta sin argumentos para abrir la interfaz:

```bash
$ kpm
```

Usa las flechas para navegar, `Enter` para confirmar y `Esc` para volver o salir. El flujo guiado permite seleccionar la app, extraerla y definir el binario a enlazar en un solo paso.

## Interfaz de línea de comandos (CLI)

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

### Instalación directa

Instala varias aplicaciones por nombre (si existen en un repositorio) o por ruta a un archivo local:

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

### Desinstalación inteligente

Borra la carpeta, el binario y el archivo `.desktop` de una o más apps a la vez:

```bash
$ kpm remove discord waterfox
```

### Gestión de repositorios

El subcomando `repo` gestiona de dónde `kpm` obtiene las apps:

| Subcomando | Descripción |
|---|---|
| `kpm repo list` | Cantidad de paquetes disponibles por tipo (oficial, comunitario, usuario) |
| `kpm repo pkg-list` | Lista todos los paquetes disponibles para instalar |
| `kpm repo pkg-search <query>` | Busca un paquete por nombre en todos los repositorios |
| `kpm repo sync` | Sincroniza las listas oficial y comunitaria |
| `kpm repo add <nombre> <pkg> <url> <cat> [--requires-root]` | Añade un repositorio de terceros |
| `kpm repo remove <nombre>` | Elimina un repositorio custom |

## Autocompletado de shell

Instalar `kpm` con `install.sh` configura el autocompletado para Bash, Zsh y Fish. Pulsa `Tab` para completar comandos y flags.

## Véase también

- [Resumen de Kore](./) — qué es Kore y cómo instalarlo.
- [Arquitectura de Kore](./architecture) — cómo está estructurado Kore internamente.
