# Desarrollo: Resumen

> Este es el centro de desarrollo. Usa el índice de la página para saltar entre el resumen, los proyectos y la información de soporte sin perder tu posición.

Bienvenido al ecosistema de desarrollo de Neko Void OS. Este espacio está diseñado para centralizar el conocimiento, herramientas y estándares necesarios para compilar la distribución.

## El Proyecto

Nuestro desarrollo se centra en:

* **Neko Void OS:** Nuestro sistema operativo base con el escritorio MATE y el Instalador Kasha.
* **Constructor ISO:** La infraestructura basada en bash utilizada para compilar las distribuciones en vivo.
* **Kore Package Manager:** Un gestor de paquetes minimalista TUI/CLI escrito en Rust diseñado específicamente para AppImages y tarballs.

## Proyectos

La documentación detallada está organizada como secciones de la misma área de desarrollo:

### Neko Void OS

El constructor de ISO combina `live-maker` de Void Linux con la selección de paquetes, kernels y configuración de escritorio de Neko Void. Consulta el [resumen de Neko Void OS Builder](./projects/nekovoid-os-builder/) y las [instrucciones para compilar la ISO](./projects/nekovoid-os-builder/build).

### Instalador Kasha

Kasha es el instalador escrito en C y GTK que usa Neko Void. Su documentación cubre la [arquitectura](./projects/kasha-installer/architecture) y el [proceso de compilación](./projects/kasha-installer/build).

### Kore Package Manager

Kore (`kpm`) instala AppImages y tarballs en una ubicación aislada del usuario. Consulta la [guía de uso](./projects/kore-package-manager/usage) y la [arquitectura](./projects/kore-package-manager/architecture).

## ¿Por dónde empezar?

Si eres nuevo en el proyecto, te recomendamos explorar la sección de [Proyectos](./projects/index.md) para entender la arquitectura de compilación y cómo crear tu propia ISO.

## Comunicación y Soporte

* **Problemas:** Para reportar errores, usa la pestaña de **Issues** en nuestros repositorios de Codeberg.

<CommunityCard />
