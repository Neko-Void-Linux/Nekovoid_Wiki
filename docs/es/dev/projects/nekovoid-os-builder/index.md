# Neko-Void OS Builder

Esta guía explica cómo compilar la ISO en vivo de Neko Void, la cual incluye soporte de repositorios non-free (Steam, juegos, controladores propietarios) por defecto.

## Configuración Inicial

Primero, clona el repositorio e inicializa los submódulos:

```bash
git clone https://codeberg.org/javiercplus/Neko-Void.git
cd Neko-Void
git submodule update --init --recursive
```

