---
title: Iruka XBPS
description: Interfaz gráfica moderna para el gestor de paquetes XBPS escrita en C++ usando GTK 3
---

<p align="center">
  <img src="https://raw.githubusercontent.com/Neko-Void-Linux/iruka-xbps/main/resources/icons/iruka.png" alt="iruka-xbps logo" width="128">
</p>

# Iruka XBPS

Una interfaz gráfica (frontend) moderna para el gestor de paquetes [XBPS](https://wiki.voidlinux.org/XBPS), escrita en C++ utilizando GTK 3.

<img width="871" height="680" alt="image" src="https://github.com/user-attachments/assets/81225ccf-73ad-4e37-8d95-4f589ab26673" />

- **Repositorio:** [GitHub](https://github.com/Neko-Void-Linux/iruka-xbps)
- **Git Clone:** `git@github.com:Neko-Void-Linux/iruka-xbps.git`
- **Lenguaje:** C++17
- **Toolkit de UI:** GTK 3
- **Licencia:** WTFPL (interfaz gráfica) / BSD 3-Clause (núcleo e integración)

## Características

- **Búsqueda instantánea:** Búsqueda y filtrado local de paquetes con debounce para una respuesta ágil.
- **Barra lateral de categorías:** Filtra rápidamente por estado (Todos, Instalados, No instalados, Desactualizados) y categorías temáticas (Multimedia, Oficina, Programación, Educación, Gráficos, Red, Juegos, Seguridad, Sistema, Utilidades, Otros).
- **Estado visual claro:** Representación gráfica del estado de cada paquete (Instalado, No instalado, Desactualizado, En cola).
- **Panel de detalles:** Muestra descripción del paquete, metadatos, lista de archivos y tamaño en disco.
- **Cola de acciones:** Permite agrupar operaciones de instalación, desinstalación y desmarcado en lotes coordinados.
- **Autenticación sin interrupciones:** Un único demonio helper privilegiado (`iruka-helper`) se ejecuta una sola vez mediante pkexec/polkit; todas las acciones privilegiadas pasan por él sin pedir contraseñas repetidamente. El helper finaliza automáticamente al cerrar la aplicación.
- **Editor de repositorios:** Editor integrado para configurar y gestionar repositorios de XBPS.
- **Interfaz multilingüe:** Soporte nativo para español, inglés, ruso, japonés y húngaro con selector de idioma integrado.

## Requisitos previos

- Void Linux (o cualquier sistema con XBPS).
- Compilador C++17 (GCC o Clang).
- Bibliotecas de desarrollo de GTK 3.
- Polkit (para elevación de privilegios).
- Sistemas de construcción Meson y Ninja.

## Compilación e instalación

1. Configura el directorio de compilación:
   ```bash
   meson setup builddir --prefix=/usr
   ```

2. Compila el proyecto:
   ```bash
   ninja -C builddir
   ```

3. Instala la aplicación:
   ```bash
   ninja -C builddir install
   ```

Al ejecutar desde `builddir` (sin instalar), los catálogos de traducción se detectan automáticamente y el menú `Opciones > Idioma` funciona sin configuración extra.

## Empaquetado con xbps-src

Existe una plantilla para Void Linux en `pkg/iruka-xbps/template`. Al compilarla:

- `gettext` debe estar en `hostmakedepends` para que el módulo `i18n` de Meson compile los catálogos `.mo`.
- Los catálogos se instalan en `/usr/share/locale/{es,ru,ja,hu}/LC_MESSAGES/`.
- Se instalan dos binarios: `iruka-xbps` (interfaz gráfica) e `iruka-helper` (demonio privilegiado) en el mismo directorio.

## Ejecución

Ejecuta el binario directamente desde la terminal o mediante el lanzador de aplicaciones del entorno de escritorio:

```bash
iruka-xbps
```

## Configuración

Las preferencias se guardan en el directorio de configuración del usuario:
`~/.config/iruka-xbps/iruka-xbps.conf` (incluye la preferencia de idioma y el estado de la ventana).

## Licencia

- El código de la interfaz gráfica está licenciado bajo la [WTFPL](http://www.wtfpl.net/).
- El código de integración del backend está licenciado bajo la [Licencia BSD de 3 cláusulas](https://opensource.org/licenses/BSD-3-Clause).
