# Opciones de Compilación

## Compilación Normal

Para compilar las ISO estándar de Neko-Void, usa los siguientes comandos:

* **Compilar Edición X.Org:**
  ```bash
  cd live-maker && bash neko-builder.sh xorg
  ```

* **Compilar Edición Xlibre:**
  ```bash
  cd live-maker && bash neko-builder.sh xlibre
  ```

## Compilación Rolling (Último Kernel)

Para compilar las ediciones rolling con el kernel más reciente:

* **Compilar Edición Rolling X.Org:**
  ```bash
  cd live-maker && bash neko-builder.sh rolling
  ```

* **Compilar Edición Rolling Xlibre:**
  ```bash
  cd live-maker && bash neko-builder.sh rollibre
  ```

## Uso Avanzado

El script `neko-builder.sh` admite varios argumentos para compilaciones interactivas o personalizadas:

```bash
# NekoVoid Live ISO Builder - Nonfree Edition

./neko-builder.sh                 # Modo interactivo
./neko-builder.sh <desktop>       # Compilar un escritorio específico
./neko-builder.sh <desktop> -e "pkg..." # Con paquetes adicionales
./neko-builder.sh doble           # Compilar xlibre + xorg
./neko-builder.sh doble-isor      # Compilar rollibre + rolling
```
