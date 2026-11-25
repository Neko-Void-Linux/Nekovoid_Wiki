---
title: Neko Kernel Manager
description: Gestor gráfico moderno y fiable de kernels de Linux y módulos DKMS para Void Linux desarrollado con C++20 y Qt6 QML
---

# Neko Kernel Manager

<p align="center">
  <img src="https://raw.githubusercontent.com/ANOMALI0x00/Neko-Kernel-Manager/main/Data/logo.png" alt="Neko Kernel Manager Logo" width="128" height="128" />
</p>

<p align="center">
  <strong>Un gestor gráfico moderno y fiable de kernels de Linux y módulos DKMS para Void Linux.</strong>
</p>

<p align="center">
  <a href="https://github.com/ANOMALI0x00/Neko-Kernel-Manager/releases"><img src="https://img.shields.io/badge/versión-1.5.0-blue.svg" alt="Versión 1.5.0"></a>
  <a href="https://github.com/ANOMALI0x00/Neko-Kernel-Manager/blob/main/LICENSE"><img src="https://img.shields.io/badge/licencia-GPL--3.0-green.svg" alt="Licencia: GPL-3.0"></a>
  <img src="https://img.shields.io/badge/plataforma-Void%20Linux-black.svg" alt="Plataforma: Void Linux">
  <img src="https://img.shields.io/badge/desarrollado%20con-C%2B%2B20%20%7C%20Qt6%20QML-41cd52.svg" alt="Desarrollado con C++20 y Qt6 QML">
</p>

---

## Resumen

**Neko Kernel Manager** es un gestor gráfico nativo de kernels diseñado específicamente para **Void Linux**. Desarrollado con **C++20** moderno y **Qt6 (QML/Quick)**, cuenta con una interfaz personalizada inspirada en GTK3 (*Matecito Dark*) que se visualiza de forma consistente en cualquier entorno de escritorio o gestor de ventanas (KDE, XFCE, GNOME, Sway, Hyprland, etc.).

Ya sea que utilices los kernels oficiales de Void, compilaciones personalizadas BORE/Zen de Neko Void o kernels compilados manualmente en `/boot`, Neko Kernel Manager ofrece detección unificada, instalación segura, reconfiguración, gestión de módulos DKMS y administración del cargador de arranque.

- **Repositorio:** [GitHub](https://github.com/ANOMALI0x00/Neko-Kernel-Manager)
- **Autor:** [ANOMALI.0x00](https://github.com/ANOMALI0x00)
- **Licencia:** GNU General Public License v3.0 (GPL-3.0)
- **Tecnologías:** C++20 | Qt6 (QML/Quick)

---

## Capturas de pantalla

<p align="center">
  <img src="https://raw.githubusercontent.com/ANOMALI0x00/Neko-Kernel-Manager/main/screenshots/main.png" alt="Neko Kernel Manager - Vista principal" width="100%" />
</p>
<p align="center">
  <em>Vista general de kernels: Indicadores de estado (En ejecución / Predeterminado / Instalado), detección de repositorios, acciones y filtrado instantáneo.</em>
</p>

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ANOMALI0x00/Neko-Kernel-Manager/main/screenshots/system.png" alt="Neko Kernel Manager - Pestaña Sistema" width="100%" />
</p>
<p align="center">
  <em>Pestaña del sistema: Kernel activo y predeterminado en GRUB, cargador de arranque y nivel de instrucciones detectado de la CPU.</em>
</p>

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ANOMALI0x00/Neko-Kernel-Manager/main/screenshots/dkms.png" alt="Neko Kernel Manager - Gestión DKMS" width="100%" />
</p>
<p align="center">
  <em>Gestión de módulos DKMS: Administra módulos fuera del árbol instalados e instala paquetes DKMS disponibles en los repositorios.</em>
</p>

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ANOMALI0x00/Neko-Kernel-Manager/main/screenshots/logs.png" alt="Neko Kernel Manager - Registro de actividad" width="100%" />
</p>
<p align="center">
  <em>Diálogo de registro de actividad: Terminal de ejecución con marcas de tiempo en tiempo real, resaltado de sintaxis y exportación de logs.</em>
</p>

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ANOMALI0x00/Neko-Kernel-Manager/main/screenshots/about.png" alt="Neko Kernel Manager - Acerca de" width="100%" />
</p>
<p align="center">
  <em>Diálogo Acerca de: Información de la aplicación e integración del tema Matecito Dark.</em>
</p>

---

## Características

### Gestión integral de kernels
- **Integración con Void Linux XBPS**: Explora, instala y elimina cómodamente kernels oficiales de Void (`linux`, `linux-lts`, `linux-mainline`, etc.) y repositorios comunitarios (Neko Void BORE/Zen, CachyOS, repos locales).
- **Resolución inteligente de metapaquetes**: Deduplica automáticamente los metapaquetes de Void (`linux` vs `linux6.18`) para evitar entradas redundantes en la interfaz.
- **Detección de huérfanos con `vkpurge`**: Detecta automáticamente versiones obsoletas del kernel dejadas por actualizaciones previas y las elimina de forma segura con `vkpurge`.
- **Detección manual de kernels en `/boot`**: Reconoce con precisión kernels compilados por el usuario (`make install`), gestiona sus archivos de arranque (`vmlinuz`, `initramfs`, `System.map`, `modules`) y permite su eliminación.
- **Reconfiguración de kernels**: Vuelve a ejecutar los hooks post-instalación de dracut y regenera las imágenes initramfs con un solo clic.

### Gestión de módulos DKMS fuera del árbol
- Analiza y monitoriza paquetes DKMS instalados vs. disponibles (`nvidia`, `virtualbox-ose`, `broadcom-wl`, `wireguard`, etc.).
- Compila e instala módulos para kernels específicos instalados.
- Regeneración automática de initramfs con `dracut` tras compilar módulos del kernel.

### Integración con el cargador de arranque y el sistema
- **Gestión de arranque con GRUB**: Establece el kernel de arranque predeterminado con soporte persistente de `GRUB_DEFAULT=saved`.
- **Actualización automática de configuración**: Ejecuta de forma segura `grub-mkconfig` tras cualquier instalación, reconfiguración o eliminación de kernels.
- **Detección del nivel de arquitectura**: Inspecciona los niveles de microarquitectura de la CPU (`x86-64-v2`, `v3`, `v4`) y el tipo de cargador de arranque activo.

### Seguridad y autenticación única
- **Helper dedicado de Polkit**: Las operaciones de root se canalizan a través de `/usr/libexec/neko-kernel-manager/neko-kernel-helper` supervisado por PolicyKit (`org.nekovoid.NekoKernelManager.policy`).
- **Sin peticiones repetidas de contraseña**: Configurado con `auth_admin_keep` para retener privilegios de administrador durante toda la sesión.
- **Bloqueos de seguridad**:
  - Impide estrictamente eliminar el kernel en ejecución actual (`uname -r`).
  - Bloquea la eliminación si solo queda un kernel funcional instalado.
  - Saneamiento riguroso de entradas para prevenir inyección de comandos o path traversal (`..`).

### Aspecto visual y registro
- **Tema Matecito Dark**: Apariencia consistente con estilo GTK3 en todos los entornos.
- **Terminal de actividad en tiempo real**: Registro de ejecución con resaltado de sintaxis RichText y función de exportación de registros.

---

## Requisitos

- **Sistema operativo**: Void Linux (x86_64 / x86_64-musl)
- **Compilador C++**: GCC 11+ o Clang 13+ (con soporte para C++20)
- **Sistema de construcción**: CMake (>= 3.16) o Meson (>= 0.59) + Ninja / Make
- **Paquetes Qt6**:
  - `qt6-base`, `qt6-declarative`, `qt6-quickcontrols2`
- **Utilidades del sistema**:
  - `xbps`
  - `dracut`
  - `polkit` / `pkexec`
  - `vkpurge` (opcional, para limpieza de huérfanos)
  - `dkms` (opcional, para gestión de módulos)

---

## Compilación e instalación

### 1. Instalar dependencias en Void Linux
```bash
sudo xbps-install -S base-devel cmake qt6-base-devel qt6-declarative-devel
```

### 2. Clonar el repositorio
```bash
git clone https://github.com/ANOMALI0x00/Neko-Kernel-Manager.git
cd Neko-Kernel-Manager
```

### 3. Compilar con CMake
```bash
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j$(nproc)
```

*(Alternativamente, compilar con Meson: `meson setup build --buildtype=release && meson compile -C build`)*

### 4. Instalar Helper y Política (requerido para escalación de contraseña única)
```bash
sudo mkdir -p /usr/libexec/neko-kernel-manager
sudo cp helper/neko-kernel-helper /usr/libexec/neko-kernel-manager/
sudo chmod 755 /usr/libexec/neko-kernel-manager/neko-kernel-helper
sudo cp policy/org.nekovoid.NekoKernelManager.policy /usr/share/polkit-1/actions/
```

### 5. Ejecutar
```bash
./build/neko-kernel-manager
```

---

## Licencia

Este proyecto está licenciado bajo la **Licencia Pública General de GNU v3.0 (GPL-3.0)**.
