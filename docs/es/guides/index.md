---
title: Guías y Documentación
description: Guías prácticas, conceptos de arquitectura, configuración del sistema y recursos de desarrollo para Neko Void.
---

# Guías y Documentación

Bienvenido al portal unificado de documentación de Neko Void. Neko Void es un ecosistema de código abierto diseñado para ofrecer una experiencia de escritorio ágil, eficiente y completamente configurada sobre la base sólida de Void Linux.

Aquí encontrarás guías prácticas de instalación, conceptos esenciales de arquitectura, opciones de configuración y recursos para desarrolladores y colaboradores.

## ¿Por dónde empezar?

Si eres nuevo en Neko Void, te recomendamos seguir este recorrido inicial:

1. **[Guía de instalación](./installation/)**: Conoce los requisitos de hardware, crea un medio USB arrancable e instala Neko Void mediante el instalador Kasha.
2. **[Conceptos del Sistema](../docs/concepts/runit)**: Comprende los componentes esenciales como el sistema de init [runit](../docs/concepts/runit), [musl libc](../docs/concepts/musl) y los servidores gráficos ([Wayland](../docs/concepts/wayland) / [Xorg](../docs/concepts/xorg)).
3. **[Configuración](../docs/configuration/)**: Ajusta tus entornos de escritorio, configuraciones globales y preferencias del sistema.
4. **[Solución de problemas](./troubleshooting/common-issues)**: Resuelve dudas comunes y problemas técnicos frecuentes.

---

## Directorio de Documentación

<div class="wiki-directory" aria-label="Directorio de documentación">
  <section class="wiki-directory-section" aria-labelledby="Primeros_pasos">
    <h2 id="Primeros_pasos"><span class="wiki-directory-label">Guías e Instalación</span><span class="wiki-directory-kaomoji" data-kaomoji="٩(ˊᗜˋ*)و" aria-hidden="true"></span></h2>
    <div class="wiki-directory-grid">
      <a class="wiki-directory-entry" href="/es/guides/installation/"><strong>Guía de instalación</strong><span>Paso a paso completo: requisitos del sistema, medio USB, arranque live e instalador Kasha.</span></a>
      <a class="wiki-directory-entry" href="/es/guides/troubleshooting/common-issues"><strong>Problemas comunes</strong><span>Encuentra soluciones para problemas frecuentes de instalación.</span></a>
      <a class="wiki-directory-entry" href="https://www.neko-void-linux.online/#downloads" target="_blank" rel="noopener noreferrer"><strong>Descargas</strong><span>Encuentra las imágenes y opciones de descarga disponibles.</span></a>
    </div>
  </section>

  <section class="wiki-directory-section" aria-labelledby="Documentación_del_sistema">
    <h2 id="Documentación_del_sistema"><span class="wiki-directory-label">Conceptos y Arquitectura</span><span class="wiki-directory-kaomoji" data-kaomoji="(˵◝ ⩊  ◜˵マ" aria-hidden="true"></span></h2>
    <div class="wiki-directory-grid">
      <a class="wiki-directory-entry" href="/es/docs/concepts/runit"><strong>runit</strong><span>Conoce la supervisión de servicios y el sistema init de Neko Void.</span></a>
      <a class="wiki-directory-entry" href="/es/docs/concepts/musl"><strong>musl</strong><span>Aprende sobre musl libc y sus características ligeras.</span></a>
      <a class="wiki-directory-entry" href="/es/docs/concepts/xorg"><strong>Xorg</strong><span>Configuración y controladores del servidor de pantalla X11 en Neko Void.</span></a>
      <a class="wiki-directory-entry" href="/es/docs/concepts/wayland"><strong>Wayland</strong><span>Protocolo gráfico Wayland, compositores compatibles y compatibilidad con Xwayland.</span></a>
      <a class="wiki-directory-entry" href="/es/docs/configuration/japanese-input"><strong>Entrada en japonés</strong><span>Configura fcitx5 y Mozc para escribir en japonés en Neko Void.</span></a>
      <a class="wiki-directory-entry" href="/es/docs/configuration/global-settings"><strong>Configuración global</strong><span>Referencia de los ajustes que afectan al sistema completo.</span><small class="wiki-directory-status">Borrador</small></a>
      <a class="wiki-directory-entry" href="/es/docs/configuration/advanced-options"><strong>Opciones avanzadas</strong><span>Opciones menos comunes para ajustar una instalación.</span><small class="wiki-directory-status">Borrador</small></a>
    </div>
  </section>

  <section class="wiki-directory-section" aria-labelledby="Proyectos_y_desarrollo">
    <h2 id="Proyectos_y_desarrollo"><span class="wiki-directory-label">Proyectos y Desarrollo</span><span class="wiki-directory-kaomoji" data-kaomoji="ദ്ദി˶ｰ̀֊ｰ́ )" aria-hidden="true"></span></h2>
    <div class="wiki-directory-grid">
      <a class="wiki-directory-entry" href="/es/dev/projects/"><strong>Resumen de proyectos</strong><span>Explora las herramientas y aplicaciones del ecosistema.</span></a>
      <a class="wiki-directory-entry" href="/es/dev/projects/nekovoid-os-builder/"><strong>OS Builder</strong><span>El motor de construcción y scripts de las imágenes ISO de Neko Void.</span></a>
      <a class="wiki-directory-entry" href="/es/dev/projects/kasha-installer/"><strong>Instalador Kasha</strong><span>Conoce el instalador y su flujo de configuración.</span></a>
      <a class="wiki-directory-entry" href="/es/dev/projects/kore-package-manager/"><strong>Kore Package Manager</strong><span>Gestor de paquetes minimalista en Rust para AppImages y tarballs.</span></a>
      <a class="wiki-directory-entry" href="/es/dev/contributing/"><strong>Colaborar</strong><span>Guías para contribuir con código, documentación y traducciones.</span></a>
    </div>
  </section>

  <section class="wiki-directory-section" aria-labelledby="Sobre_Neko_Void">
    <h2 id="Sobre_Neko_Void"><span class="wiki-directory-label">Sobre Neko Void</span><span class="wiki-directory-kaomoji" data-kaomoji="&gt;ᴗ&lt;" aria-hidden="true"></span></h2>
    <div class="wiki-directory-grid">
      <a class="wiki-directory-entry" href="/es/about/"><strong>Acerca de</strong><span>Conoce el ecosistema Neko Void y sus objetivos.</span></a>
      <a class="wiki-directory-entry" href="/es/about/team"><strong>Equipo</strong><span>Conoce a los desarrolladores, artistas y colaboradores.</span></a>
      <a class="wiki-directory-entry" href="/es/about/mission"><strong>Misión</strong><span>Lee los principios que guían el proyecto.</span></a>
      <a class="wiki-directory-entry" href="/es/about/community-values"><strong>Valores</strong><span>Cultura, estándares y convivencia en la comunidad.</span></a>
      <a class="wiki-directory-entry" href="/es/about/license"><strong>Licencia</strong><span>Términos y licencias libres de los repositorios.</span></a>
    </div>
  </section>
</div>

---

## Únete a la Comunidad

Conéctate con otros usuarios y desarrolladores para discutir sobre el proyecto, hacer preguntas o colaborar.

<CommunityCard />
