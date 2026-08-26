---
title: Instalar Neko Void
description: Guía paso a paso para instalar Neko-Void OS en el disco de tu computadora
---

# Instalar Neko Void

## Resumen

Una vez que hayas arrancado la sesión Live de Neko-Void, puedes proceder con la instalación permanente en tu disco duro o SSD a través del instalador gráfico integrado.

## Pasos de instalación

### 1. Iniciar el instalador

En el escritorio de la sesión Live, haz clic en el icono del instalador de Neko Void para abrir el asistente.

### 2. Seleccionar idioma

Selecciona tu idioma preferido para guiar el proceso y configurar las opciones regionales del sistema.

### 3. Tipo de instalación y particiones

Selecciona el método de particionado para tu equipo:

- **Instalación limpia (borrar todo el disco):** Recomendado para principiantes o para utilizar todo el disco para Neko Void. El instalador creará el esquema de particiones automáticamente.
- **Particionado manual:** Permite personalizar puntos de montaje, partición `/boot`, `/home` separada, memoria swap o configurar arranque dual con otros sistemas.

::: danger
La opción de instalación limpia borrará por completo el contenido del disco seleccionado. Realiza copias de seguridad de tus datos antes de continuar.
:::

### 4. Gestor de arranque

Selecciona el disco donde deseas instalar el gestor de arranque (GRUB).

### 5. Configuración del sistema

Establece las preferencias básicas del sistema operativo:

- **Nombre del equipo (Hostname):** Identificador de la máquina en la red.
- **Zona horaria:** Tu región horaria local.
- **Distribución del teclado:** Idioma y variante de tu teclado.

### 6. Configuración de usuarios

- Configura tu nombre de usuario y contraseña principal.
- Define una contraseña para el usuario administrador (`root`). Por seguridad, se recomienda utilizar una clave diferente a la del usuario estándar.
- Puedes activar la opción de inicio de sesión automático (**Auto-Login**) si lo deseas.

### 7. Escalador de privilegios

Elige el escalador de privilegios para la administración del sistema. Se recomienda **`doas`** por su ligereza y simplicidad, aunque también puedes seleccionar **`sudo`**.

### 8. Confirmación e instalación

1. Revisa el resumen de configuración y confirma para comenzar el proceso de instalación en el disco.
2. Espera a que el instalador finalice la copia de archivos y ajustes del sistema.
3. Cuando se muestre el aviso de finalización, retira la memoria USB y presiona el botón **Reiniciar ahora**. Tu computadora arrancará una instalación limpia de Neko Void.

## Véase también

- [Cómo reportar problemas](../troubleshooting/common-issues)
- [Arranque en modo Live](./booting)
