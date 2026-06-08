import os

base_kasha = [
    "/home/crow/Trinity-Vita/docs/dev/projects",
    "/home/crow/Trinity-Vita/docs/en/dev/projects",
    "/home/crow/Trinity-Vita/docs/es/dev/projects"
]

def parse_kasha(file_path, is_es=False):
    with open(file_path, 'r') as f:
        lines = f.readlines()
        
    struc_start = next(i for i, l in enumerate(lines) if l.startswith('## Project Structure' if not is_es else '## Estructura del Proyecto'))
    feat_start = next(i for i, l in enumerate(lines) if l.startswith('## Features' if not is_es else '## Características'))
    comp_start = next(i for i, l in enumerate(lines) if l.startswith('## Compilation' if not is_es else '## Compilación'))
    
    overview = lines[:struc_start] + lines[feat_start:comp_start]
    architecture = ["# Architecture & Structure\n\n" if not is_es else "# Arquitectura y Estructura\n\n"] + lines[struc_start:feat_start]
    build = ["# Build & Run\n\n" if not is_es else "# Compilación y Ejecución\n\n"] + lines[comp_start:]
    
    return "".join(overview), "".join(architecture), "".join(build)

for bd in base_kasha:
    is_es = 'es/' in bd
    kasha_file = f"{bd}/kasha-installer.md"
    if os.path.exists(kasha_file):
        ov, ar, bu = parse_kasha(kasha_file, is_es)
        new_dir = f"{bd}/kasha-installer"
        os.makedirs(new_dir, exist_ok=True)
        with open(f"{new_dir}/index.md", "w") as f: f.write(ov)
        with open(f"{new_dir}/architecture.md", "w") as f: f.write(ar)
        with open(f"{new_dir}/build.md", "w") as f: f.write(bu)
        os.remove(kasha_file)

def parse_builder(file_path, is_es=False):
    with open(file_path, 'r') as f:
        lines = f.readlines()
        
    norm_start = next(i for i, l in enumerate(lines) if l.startswith('## Normal Build' if not is_es else '## Compilación Normal'))
    
    overview = lines[:norm_start]
    build = ["# Build Options\n\n" if not is_es else "# Opciones de Compilación\n\n"] + lines[norm_start:]
    
    return "".join(overview), "".join(build)

for bd in base_kasha:
    is_es = 'es/' in bd
    builder_file = f"{bd}/nekovoid-os-builder.md"
    if os.path.exists(builder_file):
        ov, bu = parse_builder(builder_file, is_es)
        new_dir = f"{bd}/nekovoid-os-builder"
        os.makedirs(new_dir, exist_ok=True)
        with open(f"{new_dir}/index.md", "w") as f: f.write(ov)
        with open(f"{new_dir}/build.md", "w") as f: f.write(bu)
        os.remove(builder_file)

print("Split complete for kasha-installer and nekovoid-os-builder!")
