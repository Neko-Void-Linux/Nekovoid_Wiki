---
title: Kyoz
description: Wrapper simple y ligero para el gestor de paquetes XBPS en Void Linux escrito en Zig
---

# Kyoz

Un wrapper simple y ligero para el gestor de paquetes [XBPS](https://wiki.voidlinux.org/XBPS) en Void Linux, escrito en [Zig](https://ziglang.org/).

- **Repositorio:** [GitHub](https://github.com/Neko-Void-Linux/kyoz)
- **Licencia:** [WTFPL](http://www.wtfpl.net/)
- **Lenguaje:** Zig

## Requisitos

- Void Linux
- [Zig](https://ziglang.org/) 0.17.x — solo es necesario para compilar desde el código fuente
- `sudo`, `doas` o `su` en tiempo de ejecución para las operaciones de paquetes (se usa el primero que se encuentre en el `PATH`; `su -c` es el último recurso)

## Compilación

```sh
# Instala Zig si aún no lo tienes
sudo xbps-install -S zig

# Obtén el código fuente y compila
git clone https://github.com/Neko-Void-Linux/kyoz
cd kyoz
zig build-exe kyo.zig -O ReleaseSafe
```

## Instalación

```sh
install -Dm 755 kyo ~/.local/bin/kyo
```

Asegúrate de que `~/.local/bin` esté en tu `PATH`.

También puedes descargar un binario precompilado desde la [última release](https://github.com/Neko-Void-Linux/kyoz/releases/latest).

## Uso

```sh
kyo {install|update|remove|search|info|list|clean} [argumentos...]
```

Ejecuta `kyo --h` (`-h` o `--help` también funcionan) para ver todas las opciones disponibles, y `kyo --version` (`-v` también funciona) para mostrar la versión.

| Comando | Alias | Argumentos | Descripción |
| :--- | :---: | :---: | :--- |
| `install` | `i` | `<paquetes>` | Instalar paquetes |
| `update` | `u` | — | Actualizar el sistema |
| `remove` | `r` | `<paquetes>` | Eliminar paquetes (con `-o`) |
| `search` | `s` | `<término>` | Buscar paquetes |
| `info` | `-i`, `--info` | `<paquetes>` | Mostrar información de un paquete |
| `list` | `-l`, `--list` | `[patrón]` | Listar paquetes instalados |
| `clean` | `c` | — | Limpiar paquetes huérfanos y obsoletos |

## Menú interactivo

Ejecutar `kyo` sin argumentos en una terminal abre un menú interactivo a pantalla completa:

<img width="1274" height="670" alt="image" src="https://github.com/user-attachments/assets/6c2c6253-295a-4ad5-be1b-23d42890ad27" />

| Tecla | Acción |
| :--- | :--- |
| `↑` / `↓` (o `k` / `j`) | Moverse |
| `Enter` | Seleccionar |
| `i` o `?` | Pantalla de información |
| `l` | Cambiar idioma (inglés / español) |
| `q` (o `Ctrl-C`) | Salir |

También se puede abrir explícitamente con `kyo tui` (o `kyo menu`).

Las operaciones de instalar, eliminar, actualizar y limpiar piden confirmación antes de ejecutarse.

## Ejemplos

```sh
# Instalar fastfetch
kyo install fastfetch
kyo i fastfetch

# Buscar un paquete
kyo search neovim

# Listar paquetes instalados
kyo list

# Mostrar información de un paquete
kyo info neovim
```

## Licencia

Publicado bajo la [WTFPL](http://www.wtfpl.net/).
