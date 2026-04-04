# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
yarn install       # Install dependencies
yarn start         # Start development server (alias: yarn develop)
yarn build         # Build static site for production
yarn serve         # Serve production build locally
```

No test suite is configured. Linting uses ESLint with AirBnB config + Prettier — check `.eslintrc.json` and `.prettierrc` for rules.

## Environment Variables

Requires a `.env` file in the project root for local development:

```
CONTENTFUL_ACCESS_TOKEN=<your token>
```

In production (Netlify), `ENVIRONMENT=production` is set and dotenv is skipped.

## Architecture

Single-page portfolio site built with Gatsby + React + Material-UI v4, sourcing content from Contentful CMS via GraphQL.

**Page composition** (`src/pages/index.js`): The single index page composes all sections in order: Showcase → About → Portfolio → Contact. All wrapped in `Layout` (which provides the MUI ThemeProvider, Header, and Footer).

**Sections** (`src/sections/`): Each section is self-contained with its own directory. Sections that need CMS data use Gatsby's `useStaticQuery` with GraphQL to fetch from Contentful at build time.

**Content** is managed in Contentful (space ID `30diawm8d36r`). Contentful serves resume/transcript file links and portfolio project data. All GraphQL queries run at build time — there are no runtime API calls.

**Routing**: Navigation uses `react-scroll` for smooth in-page scrolling. Section IDs correspond to nav link targets. There is only one real route (`/`); `404.js` handles not-found.

**Theme**: MUI theme defined in `src/theme.js` and applied globally via `Layout.js`.

**Deployment**: Netlify handles CI/CD. The site is a PWA (manifest + offline plugin configured in `gatsby-config.js`).
