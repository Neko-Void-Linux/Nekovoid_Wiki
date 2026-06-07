# Acerca de Neko-Void

Neko-Void es un respin no oficial de Void Linux. Actualmente cuenta con un entorno de escritorio MATE preconfigurado (nuestra edición principal, aunque se crearán otras ISOs con más escritorios) con software seleccionado para una experiencia completa. Incluye un potente asistente de post-instalación para adaptar el sistema a tus necesidades (juegos, diseño, producción musical, etc.), además de Octoxbps, Tinyfetch y btop preinstalados. Todo respaldado con soporte completo para Vulkan y Pipewire.

## Características Principales

### [Instalador Kasha](https://codeberg.org/javiercplus/Kasha-Installer) & Post-Instalación
Nuestro instalador personalizado simplifica el proceso de instalación de Void Linux (usuario, red, particiones). Una vez instalado, un instalador de aplicaciones de post-instalación integrado te permite configurar automáticamente el sistema con un solo clic para edición de video, producción musical, diseño, juegos, trabajo de oficina y más.

### Listo para el Rendimiento
Optimizado para el rendimiento con soporte completo para Vulkan y controladores propietarios de Intel/AMD preconfigurados, asegurando que tu hardware funcione sin problemas desde el primer minuto.

## Bajo el Capó

### Sistema Base & Init
Neko-Void está profundamente arraigado en el minimalismo de **Void Linux**, utilizando su modelo *rolling-release* para actualizaciones continuas. Emplea el sistema de inicio `runit`, el cual garantiza tiempos de arranque increíblemente rápidos y un bajo consumo de recursos en comparación con systemd.

### Escritorio y Servidor Gráfico
La experiencia predeterminada está construida alrededor del entorno de escritorio **MATE**, combinando paradigmas clásicos con características modernas. Para el servidor de pantalla, los usuarios tienen la flexibilidad de elegir entre **X.Org** y **Xlibre** durante o después de la instalación.

### Gestión de Paquetes
Más allá de la potencia de la línea de comandos de `xbps`, Neko-Void integra **Octoxbps** por defecto, proporcionando una interfaz gráfica intuitiva para buscar, instalar y gestionar software. También incluye [**Kore Package Manager**](https://github.com/ezequielgk/Kore-Package-Manager), un gestor híbrido minimalista (TUI/CLI) escrito en Rust, diseñado específicamente para manejar de manera aislada AppImages y Tarballs en todo el sistema.

## Por qué fue creado

El proyecto originalmente comenzó como un pasatiempo personal. Con el tiempo, evolucionó hacia un proyecto estructurado destinado a ofrecer una versión de Void Linux fácil de instalar y fácil de usar para el usuario final.

## Público Objetivo

Esta distribución está dirigida a usuarios que desean un sistema operativo ligero y robusto, fácilmente personalizable para su flujo de trabajo específico sin las complicaciones habituales de una configuración manual desde cero.

## El Equipo

* **Desarrollador:** Javierc
* **Diseñador:** Hikawa
* **Patrocinador:** S. A.
* **Artistas:** Moony<3 & Era_dark_knight

## Enlaces Oficiales

* **Descargar ISO:** [SourceForge](https://sourceforge.net/projects/neko-void/)
* **Código Fuente:** [Codeberg](https://codeberg.org/javiercplus/Neko-Void)
* **DistroWatch:** [Página de Neko-Void](https://distrowatch.com/table.php?distribution=nekovoid)
