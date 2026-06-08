import os
import shutil

en_src = "/home/crow/Trinity-Vita/scratch/Kore-Package-Manager/README.md"
es_src = "/home/crow/Trinity-Vita/scratch/Kore-Package-Manager/README_es.md"

def split_en():
    with open(en_src, 'r') as f:
        lines = f.readlines()
    
    # Overview: 0 to line before "## Usage" + "## System Requirements" to end
    usage_idx = next(i for i, l in enumerate(lines) if l.startswith('## Usage'))
    dir_idx = next(i for i, l in enumerate(lines) if l.startswith('## Directory Structure'))
    sys_idx = next(i for i, l in enumerate(lines) if l.startswith('## System Requirements'))

    overview = lines[:usage_idx] + ["\n"] + lines[sys_idx:]
    usage = ["# Usage\n\n"] + lines[usage_idx+1:dir_idx]
    arch = ["# Architecture & Structure\n\n"] + lines[dir_idx:sys_idx]

    return "".join(overview), "".join(usage), "".join(arch)

def split_es():
    with open(es_src, 'r') as f:
        lines = f.readlines()
    
    usage_idx = next(i for i, l in enumerate(lines) if l.startswith('## Uso'))
    dir_idx = next(i for i, l in enumerate(lines) if l.startswith('## Estructura de Directorios'))
    sys_idx = next(i for i, l in enumerate(lines) if l.startswith('## Requisitos del Sistema'))

    overview = lines[:usage_idx] + ["\n"] + lines[sys_idx:]
    usage = ["# Uso\n\n"] + lines[usage_idx+1:dir_idx]
    arch = ["# Arquitectura y Estructura\n\n"] + lines[dir_idx:sys_idx]

    return "".join(overview), "".join(usage), "".join(arch)

en_ov, en_us, en_ar = split_en()
es_ov, es_us, es_ar = split_es()

base_dirs = [
    "/home/crow/Trinity-Vita/docs/dev/projects/kore-package-manager",
    "/home/crow/Trinity-Vita/docs/en/dev/projects/kore-package-manager",
    "/home/crow/Trinity-Vita/docs/es/dev/projects/kore-package-manager"
]

for d in base_dirs:
    os.makedirs(d, exist_ok=True)

# Base (English)
with open(f"{base_dirs[0]}/index.md", "w") as f: f.write(en_ov)
with open(f"{base_dirs[0]}/usage.md", "w") as f: f.write(en_us)
with open(f"{base_dirs[0]}/architecture.md", "w") as f: f.write(en_ar)

# EN (English)
with open(f"{base_dirs[1]}/index.md", "w") as f: f.write(en_ov)
with open(f"{base_dirs[1]}/usage.md", "w") as f: f.write(en_us)
with open(f"{base_dirs[1]}/architecture.md", "w") as f: f.write(en_ar)

# ES (Spanish)
with open(f"{base_dirs[2]}/index.md", "w") as f: f.write(es_ov)
with open(f"{base_dirs[2]}/usage.md", "w") as f: f.write(es_us)
with open(f"{base_dirs[2]}/architecture.md", "w") as f: f.write(es_ar)

# Remove old files
for p in [
    "/home/crow/Trinity-Vita/docs/dev/projects/kore-package-manager.md",
    "/home/crow/Trinity-Vita/docs/en/dev/projects/kore-package-manager.md",
    "/home/crow/Trinity-Vita/docs/es/dev/projects/kore-package-manager.md"
]:
    if os.path.exists(p):
        os.remove(p)

print("Split complete!")
