---
title: Crear medio de instalación
description: Cómo preparar una memoria USB booteable para instalar Neko-Void OS
---

# Crear medio de instalación

## Resumen

La forma recomendada de instalar Neko-Void es creando un medio de instalación con una memoria USB. Para este proceso se aconseja el uso de **Ventoy**, una herramienta de código abierto que permite arrancar imágenes ISO directamente copiándolas a la unidad USB.

## Requisitos

- Una memoria USB con capacidad mínima de 4 GB.
- La imagen ISO de Neko Void descargada desde [Descargas](/es/download/).
- La herramienta [Ventoy](https://www.ventoy.net/en/download.html) (disponible para Windows, macOS y Linux).

## Pasos con Ventoy

1. **Descargar Ventoy**: Descarga el paquete correspondiente a tu sistema operativo desde el [sitio web oficial de Ventoy](https://www.ventoy.net/en/download.html) y descomprímelo.
2. **Ejecutar la herramienta**: Abre el instalador de Ventoy (`Ventoy2Disk` en Windows o la interfaz/script en Linux).
3. **Instalar en la memoria USB**: Selecciona tu memoria USB en la lista de dispositivos y pulsa el botón **Install**.

::: warning
El proceso de instalación de Ventoy formateará la memoria USB. Asegúrate de respaldar cualquier información importante antes de proceder.
:::

4. **Copiar la ISO de Neko Void**: Cuando la instalación de Ventoy finalice, abre la memoria USB en tu explorador de archivos y copia el archivo ISO de Neko Void directamente en ella.

## Método alternativo en Linux (`dd`)

En sistemas basados en Linux también puedes grabar la imagen directamente desde la terminal:

```bash
# dd if=nekovoid.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

::: danger
Asegúrate de reemplazar `/dev/sdX` por el identificador correcto de tu memoria USB. Seleccionar el disco equivocado provocará la sobreescritura irreversible de datos.
:::

## Véase también

- [Arranque en modo Live](./booting)
- [Requisitos del sistema](./requirements)
