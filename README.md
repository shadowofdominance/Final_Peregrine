# Final Peregrine

Final Peregrine is a personal portfolio built with React, Vite, and Tailwind CSS. It showcases interactive UI components, animations, and reusable primitives designed for accessibility and visual polish.

**Contents**

- **Overview:** project goals and audience.
- **Features:** interactive sections and UI primitives.
- **Tech Stack:** libraries and tooling used.
- **Project Structure:** important files and folders.
- **Getting Started:** install and run locally.
- **Scripts & Deployment:** build and preview instructions.
- **Contributing & License:** how to help and license info.
- **Contact:** next steps and contact options.

**Overview**

- **Purpose:** A polished portfolio site demonstrating UI components, animations, responsive design, and interactive sections to showcase work to employers and collaborators.
- **Audience:** recruiters, engineers, designers, and open-source contributors.

**Features**

- Interactive, cinematic sections and ambient audio backgrounds.
- Reusable UI primitives in the `src/components/ui` folder.
- Accessibility-minded components built on Radix primitives.
- Smooth animations powered by `framer-motion` and Tailwind utilities.
- Theme support (light/dark) and responsive layout.

**Tech Stack**

- Framework: React (v18)
- Bundler: Vite
- Styling: Tailwind CSS (+ typography + animation plugins)
- UI primitives: Radix UI
- State & Data: `@tanstack/react-query`
- Forms & Validation: `react-hook-form`, `zod`
- Animations: `framer-motion`

**Project Structure**

- Entry: [src/main.tsx](src/main.tsx)
- App root: [src/App.tsx](src/App.tsx)
- Pages: [src/pages/home.tsx](src/pages/home.tsx), [src/pages/not-found.tsx](src/pages/not-found.tsx)
- Sections: [src/components/sections](src/components/sections)
- UI primitives: [src/components/ui](src/components/ui)
- Styles & config: [src/index.css](src/index.css), [tailwind.config.ts](tailwind.config.ts), [postcss.config.js](postcss.config.js)
- Tooling: [vite.config.ts](vite.config.ts), [drizzle.config.ts](drizzle.config.ts)
- Package manifest: [package.json](package.json)

**Getting Started**

Prerequisites: Node.js (LTS recommended) and npm.

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run start
```

Type-check with TypeScript:

```bash
npm run check
```

**Available Scripts**

- `dev`: starts the Vite dev server
- `build`: builds production assets
- `start`: previews the production build
- `check`: runs TypeScript type check

**Deployment**

Build with `npm run build` and deploy the `dist` directory to any static host (Vercel, Netlify, GitHub Pages, etc.). For Vercel/Netlify, use the default Vite build command and set the publish directory to `dist`.

**Contributing**

- Follow existing patterns in `src/components/ui` when adding primitives.
- Create feature branches and open pull requests for review.
- Verify changes locally with `npm run dev` and `npm run check`.

**License**

This project uses the MIT license (see `package.json` license field).

**Contact & Next Steps**

- If you want, I can commit this change, run the dev server, or add badges/author contact details. Which would you like me to do next?
