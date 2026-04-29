# PixelArt UI Documentation

Official documentation website for PixelArt UI - A retro pixel art component library.

## Live Sites

- **Documentation**: [https://pixelartui.github.io](https://pixelartui.github.io)
- **Component Storybook**: [https://pixelartui.github.io/storybook](https://pixelartui.github.io/storybook)

## About

This is a [Next.js](https://nextjs.org) documentation site using [Nextra](https://nextra.site/) for the main documentation and [Storybook](https://storybook.js.org/) for interactive component demos.

## Development

First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the documentation site.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow:

1. Builds the Next.js documentation site
2. Clones and builds Storybook from [pixelartui-react](https://github.com/Pixelartui/pixelartui-react)
3. Combines both into a single static site deployment
4. Deploys to GitHub Pages

### Storybook Integration

Storybook is automatically built from the component library and deployed to `/storybook`. This ensures the component demos are always in sync with the latest published components.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Documentation**: Nextra
- **Component Library**: pixelartui-react
- **Component Demos**: Storybook
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages

## Related Repositories

- [pixelartui-react](https://github.com/Pixelartui/pixelartui-react) - React component library
- [pixelartui-wc](https://github.com/Pixelartui/pixelartui-wc) - Web Components version
