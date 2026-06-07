# Compilación y Ejecución

## Compilación y Dependencias

### Dependencias

Asegúrate de tener instalado lo siguiente:
- `gcc`
- `make`
- `pkg-config`
- Cabeceras de desarrollo de `gtk+-3.0`
- Si tu sistema requiere LUKS: `bash`, `grub`, `xxd`, y `sed`.
- Si usas Devuan o Arch, utiliza la rama universal.

> **Cambiar el Logotipo:** Si deseas cambiar el logotipo en el instalador, primero convierte tu imagen con xxd:
> ```bash
> xxd -i logo.png > include/logo.h
> ```
> Y reemplaza `logo.h` en el proyecto.

### Instrucciones de Compilación

Para compilar el instalador para el entorno por defecto:

```bash
make
```

Para **otras distribuciones** (ARTIX/ARCH, DEVUAN/DEBIAN, ETC...):

```bash
make universal
```

Para limpiar los artefactos de compilación:

```bash
make clean
```

## Ejecutar el Instalador

El instalador requiere privilegios de root para manipular discos, formatear particiones y montar sistemas de archivos.

```bash
sudo ./neko_installer
```

Alternativamente, usa la regla de conveniencia:

```bash
make run
```
