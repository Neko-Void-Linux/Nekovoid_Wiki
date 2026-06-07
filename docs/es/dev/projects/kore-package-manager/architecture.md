# Arquitectura y Estructura

## Estructura de Directorios

Por defecto, la herramienta aísla los archivos instalados en la estructura adecuada del usuario:

  - **Archivos extraídos**: `~/.local/share/binaries/[nombre-app]`
  - **Binarios globales (Symlinks)**: `~/.local/bin/[nombre-app]`
  - **Accesos directos (XDG Desktop)**: `~/.local/share/applications/[nombre-app].desktop`

