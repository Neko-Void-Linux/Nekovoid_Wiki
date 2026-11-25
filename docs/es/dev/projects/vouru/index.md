---
title: Vouru
description: Void User Repository Helper — compila e instala paquetes desde void-packages y repositorios Git personalizados
---

# Vouru / Void User Repository Helper

<img width="793" height="381" alt="image" src="https://github.com/user-attachments/assets/00721aa0-a064-41dc-a743-79547ea89286" />

Vouru es un script en Bash para construir e instalar paquetes desde `void-packages` y desde **repositorios Git personalizados** (como el overlay comunitario VUR) que contienen plantillas `xbps-src`.  
Con el comando `add`, puedes clonar cualquier repositorio —ya sea propio, un fork o una colección de terceros— y sus plantillas se copiarán automáticamente en el árbol local `srcpkgs` para su compilación.

- **Repositorio:** [GitHub](https://github.com/javiercplus/vouru)
- **Licencia:** BSD 3-Clause
- **Lenguaje:** Bash

## Características

- Clona `void-packages` y ejecuta `binary-bootstrap` automáticamente.
- Busca, compila e instala paquetes fácilmente.
- Detecta si un paquete está en los repositorios oficiales o solo disponible como plantilla.
- Lista las fuentes de plantillas añadidas y cuenta cuántas plantillas hay disponibles en el árbol local `srcpkgs`.
- Las operaciones pesadas se ejecutan con un spinner indicador y registran la salida en `~/.vouru.log`.

## Requisitos

- `xtools`, `git`, `curl` (instalados automáticamente por el instalador interactivo).
- `doas` o `sudo` para operaciones con privilegios de superusuario.

## Instalación

```bash
# Versión Rolling (recomendada: siempre la versión más reciente)
curl -sSL https://github.com/javiercplus/vouru/raw/refs/heads/main/vouru-install-rolling | bash

# Manual
curl -sSL -o vouru https://github.com/javiercplus/vouru/raw/refs/heads/main/vouru
chmod +x vouru && sudo mv vouru /usr/local/bin/

# Sin instalar (ejecución directa desde la web)
curl -sSL https://github.com/javiercplus/vouru/raw/refs/heads/main/vouru | bash -s -- search firefox
```

::: tip
El parámetro `-s --` tras `bash` es necesario: `-s` lee el script desde stdin y `--` evita que bash interprete los parámetros de vouru (`-i`, `-s`, `-c`...) como propios de bash.
:::

## Comandos

| Comando | Descripción |
|---------|-------------|
| `vouru add [-b <branch>] <url>` | Clona un repositorio y copia sus plantillas en `srcpkgs` (soporta subdirectorios y plantillas en la raíz; se omiten plantillas ya existentes). Permite usar **cualquier** repositorio Git con plantillas válidas de `xbps-src`. |
| `vouru search <término>` | Busca paquetes en `srcpkgs` que coincidan con `<término>`. |
| `vouru source` | Muestra los repositorios añadidos con `vouru add`, junto con el número de plantillas locales y el total. |
| `vouru install <término>` | Instala un paquete: permite elegir entre `[repo]` (xbps-install, binario) o `[source]` (compilación con xbps-src). |
| `vouru remove <pkg>` | Desinstala un paquete mediante `xbps-remove -y -o` (incluye paquetes huérfanos). |
| `vouru update` | Actualiza el repositorio, `xbps-src` y el sistema completo. |
| `vouru clean` | Elimina `void-packages` y limpia la caché con `xbps-remove -O`. |
| `vouru set-repo [ruta]` | Cambia la ubicación del repositorio local (guardado en `~/.voururc`). |
| `vouru install --restricted <pkg>` | Instala paquetes restringidos (como spotify, discord, etc.). |
| `vouru install --dont-answer-me <pkg>` | Instalación desatendida: coincidencia exacta de nombre, sin preguntas ni revisión de plantilla — compila e instala directamente. |

**Alias rápidos:** `-s` (search), `-i` (install), `-r` (remove), `-c` (clean), `-a` (add)

Al instalar un paquete desde fuentes, vouru pausa y te pide pulsar cualquier tecla para inspeccionar la plantilla del paquete antes de compilarlo. Durante la visualización, presionar `q` cierra el visor y regresa a la consola. Usa `--dont-answer-me` para omitir todas las preguntas y compilar directamente (requiere el nombre exacto del paquete; los flags se pueden combinar: `vouru -i --dont-answer-me --restricted spotify`).

## Ejemplos de uso

```bash
vouru add https://codeberg.org/Neko-Void/zig-nk.git
vouru search firefox
vouru source
vouru install vlc
vouru install --restricted discord
vouru install --dont-answer-me firefox
vouru -i --dont-answer-me --restricted spotify
vouru remove cmuspp-void
vouru update
vouru clean
```

## Configuración

- **Ubicación del repositorio:** `~/.voururc` o `vouru set-repo <ruta>`
- **Registro de depuración (log):** `~/.vouru.log` (útil si falla la clonación o el bootstrap)
- **Fuentes de plantillas:** `~/.config/vouru/template-sources.tsv` (se escribe cuando `vouru add` importa una plantilla)

## Solución de problemas

| Problema | Solución |
|---------|----------|
| `'xtools' is not installed` | Ejecuta `sudo xbps-install -S xtools` |
| `Neither 'doas' nor 'sudo' found` | Instala `sudo` o `doas` |
| La compilación falla | Revisa la salida completa y las dependencias de la plantilla (`template`) |
| `binary-bootstrap` falla | Ejecútalo manualmente dentro de `void-packages` para ver el error |
| El spinner se queda congelado | Presiona `Ctrl+C` y revisa `~/.vouru.log` |

## Licencia

BSD 3-Clause
