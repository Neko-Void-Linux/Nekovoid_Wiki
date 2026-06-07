# Kore Package Manager (kpm)

![License](https://img.shields.io/badge/license-BSD-cyan)
![Rust](https://img.shields.io/badge/language-Rust-orange)
[![Changelog](https://img.shields.io/badge/Changelog-v2.1.0-blueviolet?logo=keepachangelog&logoColor=white)](https://github.com/ezequielgk/Kore-Package-Manager/blob/main/CHANGELOG_es.md)
[![Contributing](https://img.shields.io/badge/Contribuye-aquí-green)](https://github.com/ezequielgk/Kore-Package-Manager/blob/main/CONTRIBUTING_es.md)


Un gestor de programas minimalista y universal para Linux, rediseñado completamente en **Rust**. Está diseñado específicamente para manejar aplicaciones distribuidas en **tarballs** (.tar.gz, .tar.xz, .tar.bz2) y **AppImages** (.AppImage).

Ideal para usuarios de **Void Linux**, **Arch** o cualquier sistema donde necesites instalar software pre-compilado de forma aislada y limpia, contando con una elegante interfaz de terminal interactiva (TUI) basada en `ratatui`.

## Características Principales

  * **Navegación TUI**: Explora tus archivos y carpetas con una interfaz de terminal inmersiva y de alto rendimiento.
  * **Interfaz Híbrida CLI**: Utiliza el menú interactivo o ejecuta comandos directos a través de la terminal.
  * **Instalación Inteligente**: Extrae los archivos en `~/.local/share/binaries`, manteniendo limpio tu directorio HOME.
  * **Gestión de Binarios**: Crea automáticamente enlaces simbólicos (symlinks) en `~/.local/bin`.
  * **Integración con el Menú**: Genera automáticamente archivos de acceso directo `.desktop`.
  * **Extracción sin Ruido**: Ejecuta subcomandos en segundo plano (`tar`), omitiendo salidas de terminal que puedan ensuciar la interfaz (`stdout`/`stderr`).
  * **Desinstalación Atómica**: Elimina de forma limpia la aplicación, el enlace simbólico y el acceso directo.

## Instalación Rápida

Puedes instalar la última versión pre-compilada directamente ejecutando:

```bash
curl -sSL https://raw.githubusercontent.com/ezequielgk/Tarball-Manager/main/install.sh | bash
```

> **Nota**: Este script descarga automáticamente la versión correcta desde *GitHub Releases*. Asegúrate de que la carpeta `~/.local/bin` esté en el `$PATH` de tu sistema.


## Requisitos del Sistema

Al estar escrito en Rust, se ha eliminado la necesidad de dependencias externas de entorno (como `fzf` o `bash`). Los únicos requisitos en tu sistema (la gran mayoría vienen preinstalados por defecto en Linux) son:

  - `tar`: Utilizado en segundo plano para la descompresión.
  - `pkexec` (Opcional): Requerido solo si marcas una aplicación para solicitar permisos de superusuario.
  - `desktop-file-utils` (`update-desktop-database`): Utilizado para notificar al sistema cuando una aplicación es "desinstalada" y refrescar el menú de aplicaciones.