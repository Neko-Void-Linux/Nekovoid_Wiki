---
title: Guía de estilo
description: Cómo se escriben las páginas de la wiki de Neko-Void
---

# Guía de estilo

> Esta guía define cómo se escriben las páginas de la wiki de Neko-Void. Seguirla mantiene la wiki consistente, profesional y fácil de leer — las mismas cualidades que hacen de la Arch Wiki una referencia.
>
> Si escribes o editas una página, lee esto primero. Las reglas son cortas; lo que importa es la consistencia.

---

## Principios

1. **Una página, un tema.** Una página responde a una pregunta: "¿Cómo instalo los drivers NVIDIA?", "¿Qué es runit?". Si una página crece hasta contener dos, divídela.
2. **Denso y directo.** Cada frase aporta información. Corta el "En este tutorial exploraremos...". Empieza con la respuesta.
3. **Comandos primero, explicación la justa.** El lector vino a hacer algo. Muestra el comando y luego explica lo necesario para entenderlo.
4. **Asume un lector competente, no experto.** Explica lo específico de Neko-Void. No re-expliques qué es Linux. Enlaza fuera para conceptos generales.
5. **Sin relleno ni marketing.** Esto es documentación, no una landing. Nada de "increíble", "potente", "fácil".

---

## Frontmatter

Cada página empieza con frontmatter. Sin excepciones.

```yaml
---
title: Instalar drivers NVIDIA
description: Cómo instalar y configurar los drivers propietarios NVIDIA en Neko-Void
---
```

- `title`: corto, en imperativo o frase nominal. Tipo Título.
- `description`: una frase, dice para qué sirve la página. Se usa en búsqueda y previsualizaciones.

---

## Plantilla de artículo

Cada página de contenido sigue esta estructura. Las secciones que no apliquen pueden omitirse, pero el orden se mantiene.

```markdown
---
title: <Título de página>
description: <Una frase>
---

# <Título de página>

## Resumen
De dos a cuatro líneas. Qué cubre esta página y para quién es.

## Requisitos
Lo que el lector necesita antes de empezar (paquetes, acceso, otra página leída).

## Instalación / Pasos
El núcleo. Pasos numerados o bloques de comandos. Cada paso hace una cosa.

## Configuración
Ajustes opcionales tras el paso principal.

## Verificación
Cómo confirma el lector que funcionó. Normalmente un comando y su salida esperada.

## Solución de problemas
Problemas habituales de este tema, como **síntoma en negrita** → causa → solución.

## Véase también
Enlaces a páginas relacionadas en la wiki.
```

### Cuándo omitir secciones

- Una página de referencia (como una lista de comandos) no necesita "Instalación": usa "Uso".
- Una página de concepto (como runit) usa "Resumen", "Arquitectura", "Uso" en lugar de la plantilla anterior.
- Nunca omitas "Véase también" si hay páginas relacionadas.

---

## Reglas de formato

### Bloques de código

- Siempre cercados, siempre con etiqueta de lenguaje.
- Usa `bash` para comandos de shell, el lenguaje real para código (`kotlin`, `sh`, `python`...).

```bash
kpm install nvidia
```

```kotlin
val x = 1
```

- Para un comando que el lector debe ejecutar como root, prefija con `#`:

```bash
# xbps-install -S nvidia
```

- Para un comando como usuario normal, prefija con `$`:

```bash
$ kpm list
```

- La salida de un comando va en su propio bloque, sin etiqueta de lenguaje o `text`:

```text
Detectado: NVIDIA GeForce RTX 3060
Driver: nvidia 550.40
```

### Código en línea

Usa backticks para:
- Comandos y binarios: `kpm`, `xbps-install`, `neko-builder.sh`
- Rutas de archivos: `/etc/sv/`, `/var/service/`
- Claves y flags de configuración: `--use-root`, `SVDIR`
- Elementos de UI cuando haga falta: pulsa `Enter`

### Negrita y cursiva

- **Negrita** para enfatizar un término clave la primera vez que aparece, o para síntomas en solución de problemas.
- *Cursiva* con moderación, para introducir una palabra-concepto nueva.

### Encabezados

- Un `#` H1 por página, igual al título.
- Usa `##` para secciones, `###` para subsecciones. No saltes niveles.
- Encabezados en Tipo Título: `## Instalar drivers NVIDIA`, no `## instalar drivers nvidia`.

### Listas

- Usa `-` para desordenadas, `1.` para ordenadas.
- Un elemento de lista que es un paso empieza con verbo: "Instalar el paquete", "Reiniciar el sistema".
- Evita listas de un elemento. O añades más, o escribes una frase.

### Tablas

Usa tablas para datos de referencia (listas de comandos, tablas de flags, comparativas). No para pasos.

```markdown
| Comando | Descripción |
|---|---|
| `kpm list` | Lista las apps instaladas |
| `kpm install <pkg>` | Instala una app |
```

### Avisos (VitePress)

Úsalos con moderación, solo cuando el lector no deba perderse algo.

```markdown
::: warning
No ejecutes este comando en un sistema en producción.
:::
```

Tipos y cuándo usarlos:
- `info` — contexto útil pero opcional
- `tip` — una forma mejor de hacer lo que la página explica
- `warning` — algo que puede romper el sistema
- `danger` — pérdida de datos o riesgo de seguridad

No apiles cinco avisos seguidos. Si todo es importante, nada lo es.

### Enlaces

- Internos: rutas relativas: `[Guía de estilo](./style-guide)`.
- Externos: URL completa, texto con sentido: `[Docs de Void Linux](https://docs.voidlinux.org/)`.
- Nunca uses "haz clic aquí" como texto de enlace.

---

## Tono y voz

- **Directo.** "Instala el paquete", no "Ahora puedes proceder a instalar el paquete".
- **Voz activa.** "El instalador formatea el disco", no "El disco es formateado por el instalador".
- **Segunda persona, con moderación.** "Ejecuta el comando" basta; evita "Ahora deberías ejecutar el comando".
- **Técnico, no árido.** Palabras precisas; sin jerga de barrio, sin chistes, sin marketing.
- **Sin emojis** en el cuerpo del texto. La wiki se lee como una referencia.

---

## Nombres de página

- Minúsculas con guiones: `nvidia-drivers.md`, no `NvidiaDrivers.md` ni `nvidia_drivers.md`.
- Sustantivo o gerundio: `installation.md`, `nvidia-drivers.md`. Evita verbos: no `install-nvidia.md` (usa `nvidia-drivers.md`).
- Un `index.md` por directorio, que actúa como resumen de la sección.

---

## Páginas bilingües (ES / EN)

- Las dos versiones deben espejarse en estructura y contenido.
- Traduce el significado, no palabra por palabra. Los términos técnicos a menudo se quedan en inglés (runit, package, flatpak) cuando no hay un equivalente claro en uso en español.
- Mantén los bloques de código idénticos entre idiomas. Los comandos no se traducen.
- El sitio en español vive bajo `/es/`, el inglés bajo la raíz (o `/en/` cuando ambos existen explícitamente).

---

## Qué evitar

- Muros de texto sin comandos. Esto es una wiki de Linux; enseña la terminal.
- Capturas de pantalla donde bastaría un bloque de código. Las capturas envejecen y son difíciles de actualizar.
- Duplicar documentación upstream. Enlaza la docs de Void Linux en lugar de copiarla. Si tienes que copiar, atribuye claramente (como hace la página de runit con Gentoo).
- Opiniones personales o "creo que". Expón hechos; si no estás seguro, no lo escribas.

---

## Checklist rápida antes del commit

- [ ] Frontmatter presente (`title`, `description`).
- [ ] Sigue la plantilla de artículo (o con una razón clara para no hacerlo).
- [ ] Bloques de código cercados con etiqueta de lenguaje.
- [ ] Sin enlaces internos rotos.
- [ ] El otro idioma actualizado o anotado.
- [ ] Sin emojis, sin lenguaje de marketing.
- [ ] Nombre de página en minúsculas con guiones.

---

*Una wiki consistente es una wiki confiable. Esta guía es cómo la mantenemos consistente.*
