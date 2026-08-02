---
title: Cómo contribuir
description: Flujo de trabajo para añadir, corregir y mantener páginas de la wiki de Neko-Void
---

# Cómo contribuir

> Neko-Void es software libre, y su documentación también. Cualquiera puede mejorarla: corregir un error, escribir una guía que falta, aclarar un paso confuso. No hace falta ser desarrollador.

Esta página cubre el flujo. Para el tono, la estructura y el formato, lee la [Guía de estilo](./style-guide).

---

## Qué puedes contribuir

| Tipo | Ejemplo | Dificultad |
|---|---|---|
| Corrección de errata o gramática | Arreglar un comando mal escrito | Baja |
| Mejora de claridad | Reescribir un párrafo confuso | Baja |
| Guía nueva | "Cómo instalar los drivers NVIDIA" | Media |
| Página de referencia | Documentar un subcomando de `kpm` a fondo | Media |
| Traducción | Traducir una página del inglés al español (o al revés) | Media |
| Entrada de troubleshooting | Añadir un síntoma → causa → solución a Problemas comunes | Baja |

Una errata corregida es un pull request válido.

---

## Antes de empezar

1. **Busca primero.** Comprueba si la página o sección ya existe, o si alguien ya tiene un pull request abierto sobre lo mismo.
2. **Abre un issue para cambios grandes.** Si vas a escribir una guía nueva o reestructurar una página, abre primero un issue para discutirlo. Para arreglos pequeños, ve directo al pull request.
3. **Un tema por pull request.** No mezcles cambios sin relación en el mismo PR. Si corregiste una errata Y añadiste una guía, envía dos PRs.

---

## El flujo

```
1. Haz un fork del repositorio en GitHub
        │
        ▼
2. Crea una rama:  git checkout -b docs/install-nvidia
        │
        ▼
3. Escribe UNA página, siguiendo la Guía de estilo y la plantilla de artículo
        │
        ▼
4. Haz commit con un mensaje claro:
     git commit -m "docs(guides): add NVIDIA driver installation guide"
        │
        ▼
5. Haz push y abre un Pull Request
        │
        ▼
6. Un maintainer revisa con el checklist del PR (más abajo)
        │
        ▼
7. Merge → Vercel publica automáticamente
```

### Nombres de rama

Usa un prefijo que diga qué hiciste:

| Prefijo | Para |
|---|---|
| `docs/` | Páginas nuevas o reescritas |
| `fix/` | Correcciones a páginas existentes |
| `i18n/` | Traducciones |
| `style/` | Cambios de formato, estructura, no de contenido |

Ejemplos: `docs/install-nvidia`, `fix/kore-usage-typo`, `i18n/es-runit`.

### Mensajes de commit

Sigue este formato para que el historial sea legible:

```
docs(guides): add NVIDIA driver installation guide
fix(kore): correct the --use-root flag description
i18n(es): translate runit page to Spanish
```

- `tipo(alcance): descripción`
- Descripción en minúscula, sin punto final, en modo imperativo ("add", "fix", "translate").

---

## El checklist del pull request

Un maintainer revisará tu PR con esta lista. Tú mismo puedes marcarla antes de abrir el PR para acelerar la revisión.

- [ ] La página sigue la [plantilla de artículo](./style-guide#plantilla-de-articulo).
- [ ] El frontmatter está presente (`title`, `description`).
- [ ] Los comandos van en bloques de código cercados con el lenguaje correcto (` ```bash `).
- [ ] No hay enlaces rotos. Si enlazas otra página, existe.
- [ ] Si la página existe en ES y EN, ambas se actualizan en el mismo PR (o se anota un seguimiento).
- [ ] Sin emojis en el cuerpo del texto (solo en bloques info/warning si hace falta).
- [ ] El tono encaja con la wiki: denso, directo, útil.

---

## Actualizar ambos idiomas

La wiki de Neko-Void es bilingüe. Cuando cambies una página, el mismo cambio debería llegar al otro idioma.

- [ ] Si escribes o editas `/docs/guides/foo.md`, actualiza también `/docs/es/guides/foo.md` (o `/docs/en/...` si empezaste en español).
- [ ] Si la traducción no está lista, anótalo en el PR para que alguien la coja. No bloquees un buen cambio en inglés por una traducción que falta.

---

## Estilo y tono

Lee la [Guía de estilo](./style-guide) completa antes de escribir algo más que una errata. Versión corta: una página, un tema; denso y directo; comandos primero; sigue la plantilla de artículo.

---

## Pedir ayuda

- Abre un issue con la etiqueta `question` si te atascaste.
- Pregunta en el canal `#wiki` del Discord.
- Ninguna pregunta es demasiado básica.

---

*La wiki mejora de un pull request a la vez.*
