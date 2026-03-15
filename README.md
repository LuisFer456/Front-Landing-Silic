# SILIC

Landing ecommerce editorial construida con React, TypeScript, Tailwind CSS y Vite.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- React Router
- Framer Motion
- ESLint 9

## Scripts disponibles

- `npm run dev`: levanta el entorno local.
- `npm run lint`: valida calidad de codigo.
- `npm run build`: compila TypeScript y build de produccion.
- `npm run build:pages`: build para GitHub Pages y genera `dist/404.html` para fallback SPA.
- `npm run preview`: previsualiza el build local.

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm install
npm run dev
```

## Validacion previa a deploy

Ejecuta estos comandos antes de subir cambios:

```bash
npm run lint
npm run build
```

Si quieres simular Pages localmente:

```bash
VITE_BASE_PATH=/silic/ npm run build:pages
npm run preview
```

## GitHub Pages

Este proyecto esta configurado para desplegarse en GitHub Pages con GitHub Actions.

### Consideraciones tecnicas ya resueltas

- `vite.config.ts` usa `base` dinamico con `VITE_BASE_PATH`.
- El router usa `basename: import.meta.env.BASE_URL`.
- El build de Pages genera `404.html` para evitar errores de recarga en rutas SPA.

### Publicacion

1. Sube el repositorio a GitHub.
2. En GitHub, ve a `Settings > Pages`.
3. En `Source`, selecciona `GitHub Actions`.
4. Haz push a `main`.
5. El workflow `CI and Deploy Pages` construira y publicara automaticamente.


