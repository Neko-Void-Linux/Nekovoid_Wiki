---
title: Neko-Void OS Builder
description: Compila imágenes Live ISO personalizadas para Neko-Void Linux
---

# Neko-Void ISO Builder

![image](https://huggingface.co/arepaconcafe/neko-base/resolve/main/1.png)

Este repositorio te permite compilar imágenes Live ISO personalizadas para Neko-Void Linux. El proceso de compilación incluye soporte para software non-free, controladores propietarios, Steam y paquetes orientados al gaming.

- **Repositorio:** [GitHub](https://github.com/Neko-Void-Linux/Neko-Void)
- **Base:** Void Linux `live-maker`
- **Salida:** ISO Live arrancable (ediciones Xorg y Xlibre)

## Clonar el repositorio

En primer lugar, clona este repositorio junto con sus submódulos. El repositorio incluye el código fuente de Neko Wizard y del módulo del instalador Kasha.

```bash
git clone https://github.com/Neko-Void-Linux/Neko-Void.git Neko-Void
cd Neko-Void
git submodule update --init --recursive
```

## Instrucciones de compilación

Para compilar una ISO de Neko-Void, debes usar el script `neko-builder.sh` ubicado en el directorio `live-maker`. Primero, accede a dicho directorio:

```bash
cd live-maker
```

Luego, ejecuta el script de construcción con la configuración deseada:

### Compilaciones estándar

* **Compilar ISO Xorg:**
  ```bash
  bash neko-builder.sh mate
  ```

* **Compilar ISO Xlibre:**
  ```bash
  bash neko-builder.sh matelibre
  ```

## Detalles de uso de neko-builder.sh

El script de compilación admite múltiples opciones. Por ejemplo:

* `./neko-builder.sh` — Se ejecuta en modo interactivo.
* `./neko-builder.sh <desktop>` — Compila un entorno de escritorio específico (ej. `mate`, `matelibre`, `kde`).
* `./neko-builder.sh <desktop> -e "pkg..."` — Compila con paquetes extra especificados.
* `./neko-builder.sh doble` — Compila tanto la ISO Xlibre como la ISO Xorg.
* `./neko-builder.sh doble-isor` — Compila tanto la ISO Rollibre como la Rolling.

## Proyectos y recursos relacionados

Puedes encontrar más información sobre el ecosistema Neko en los siguientes enlaces:

* **Repo Builder:** [repo-neko](https://github.com/Neko-Void-Linux/repo-neko)
* **Kernels personalizados (Actions):** [kernel-neko-void](https://github.com/Neko-Void-Linux/kernel-neko-void/actions)
* **Código fuente de la web:** [nk-web](https://github.com/Neko-Void-Linux/nk-web)

<section class="related-links">

## Véase también <span class="related-links-kaomoji" aria-hidden="true">(˵ •̀ ᴗ - ˵ )</span> {#vease-tambien}

- [Proyectos](/es/dev/projects/)
- [Colaborar](/es/dev/contributing/)

</section>
