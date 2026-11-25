---
title: Compilar la ISO de Neko-Void
description: Comandos y opciones para construir la ISO Live de Neko-Void
---

# Compilar la ISO de Neko-Void

## Requisitos previos

Antes de compilar, completa la [clonación y configuración inicial](./): clona el repositorio e inicializa los submódulos.

```bash
git clone https://github.com/Neko-Void-Linux/Neko-Void.git Neko-Void
cd Neko-Void
git submodule update --init --recursive
```

## Instrucciones de compilación

Para compilar una ISO de Neko-Void, usa el script `neko-builder.sh` ubicado en el directorio `live-maker`:

```bash
cd live-maker
```

### Compilaciones estándar

* **Compilar ISO Xorg:**
  ```bash
  bash neko-builder.sh mate
  ```

* **Compilar ISO Xlibre:**
  ```bash
  bash neko-builder.sh matelibre
  ```

### Uso avanzado

El script `neko-builder.sh` admite múltiples argumentos:

* `./neko-builder.sh` — Se ejecuta en modo interactivo.
* `./neko-builder.sh <desktop>` — Compila un entorno de escritorio específico (ej. `mate`, `matelibre`, `kde`).
* `./neko-builder.sh <desktop> -e "pkg..."` — Compila con paquetes extra especificados.
* `./neko-builder.sh doble` — Compila tanto la ISO Xlibre como la ISO Xorg.
* `./neko-builder.sh doble-isor` — Compila tanto la ISO Rollibre como la Rolling.

<section class="related-links">

## Véase también <span class="related-links-kaomoji" aria-hidden="true">(˵ •̀ ᴗ - ˵ )</span>

- [Proyectos](/es/dev/projects/)
- [Resumen de Neko Void OS Builder](/es/dev/projects/nekovoid-os-builder/)
- [Colaborar](/es/dev/contributing/)

</section>
