# Desarrollo: Resumen

> Este es el centro de desarrollo. Usa el índice de la página para saltar entre el resumen, los proyectos y la información de soporte sin perder tu posición.

Bienvenido al ecosistema de desarrollo de Neko Void OS. Este espacio está diseñado para centralizar el conocimiento, herramientas y estándares necesarios para compilar la distribución.

## El Proyecto

Nuestro desarrollo se centra en:

* **Neko Void OS:** Nuestro sistema operativo base con el escritorio MATE y el Instalador Kasha.
* **Constructor ISO:** La infraestructura basada en bash utilizada para compilar las distribuciones en vivo.
* **Neko Kernel Manager:** Gestor gráfico moderno y fiable de kernels de Linux y módulos DKMS para Void Linux desarrollado con C++20 y Qt6 QML.
* **Vouru:** Helper de repositorios de usuario para Void Linux que permite compilar e instalar paquetes desde `void-packages` y repositorios Git personalizados con plantillas `xbps-src`.
* **Kyoz:** Un wrapper simple y ligero para el gestor de paquetes XBPS en Void Linux, escrito en Zig con menú interactivo TUI.
* **Iruka XBPS:** Una interfaz gráfica moderna para el gestor de paquetes XBPS escrita en C++ y GTK 3.

## Proyectos

La documentación detallada está organizada como secciones de la misma área de desarrollo:

### Neko Void OS

El constructor de ISO combina `live-maker` de Void Linux con la selección de paquetes, kernels y configuración de escritorio de Neko Void. Consulta el [resumen de Neko Void OS Builder](./projects/nekovoid-os-builder/) y las [instrucciones para compilar la ISO](./projects/nekovoid-os-builder/build).

### Instalador Kasha

Kasha es el instalador escrito en C y GTK que usa Neko Void. Su documentación cubre la [arquitectura](./projects/kasha-installer/architecture) y el [proceso de compilación](./projects/kasha-installer/build).

### Neko Kernel Manager

Un gestor gráfico nativo de kernels diseñado específicamente para Void Linux con C++20 y Qt6 (QML/Quick). Consulta la [guía de Neko Kernel Manager](./projects/neko-kernel-manager/).

### Vouru

Vouru es un script en Bash para construir e instalar paquetes desde `void-packages` y repositorios Git externos con plantillas `xbps-src`. Consulta la [guía de Vouru](./projects/vouru/).

### Kyoz

Kyoz es un wrapper rápido y ligero para XBPS escrito en Zig que incluye un menú TUI interactivo. Consulta la [guía de Kyoz](./projects/kyoz/).

### Iruka XBPS

Iruka XBPS es una interfaz gráfica completa para XBPS desarrollada en C++ y GTK 3. Consulta la [guía de Iruka XBPS](./projects/iruka-xbps/).

## ¿Por dónde empezar?

Si eres nuevo en el proyecto, te recomendamos explorar la sección de [Proyectos](./projects/index.md) para entender la arquitectura de compilación y cómo crear tu propia ISO.

## Comunicación y Soporte

* **Problemas:** Para reportar errores, usa la pestaña de **Issues** en nuestros repositorios de Codeberg.

<CommunityCard />
