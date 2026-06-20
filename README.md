# Wedding Dress Shop

A React + TypeScript + Vite wedding dress shop project.

This project includes:

- Homepage
- Shop page
- Product detail pages
- Contact section
- Tailwind CSS styling
- React Router navigation
- Unit tests with Vitest and Testing Library
- End-to-end tests with Playwright
- GitHub Actions CI

## Main Commands

Start the development server:

```bash
npm run dev
```

Run the normal local check before committing:

```bash
npm run check
```

Run the production build only:

```bash
npm run build
```

Run unit tests:

```bash
npm run test:run
```

Run Playwright end-to-end tests:

```bash
npm run test:e2e
```

Run all tests:

```bash
npm run test:all
```

## Local Development Workflow

Normal workflow:

```txt
1. Make code changes
2. Run npm run check
3. Commit in GitHub Desktop
4. Push to GitHub
5. Confirm GitHub Actions CI is green
```

## GitHub Actions CI

This project uses GitHub Actions.

Every push and pull request runs:

```bash
npm ci
npm run check
```

The CI file is located here:

```txt
.github/workflows/ci.yml
```

## Project Notes

- Dress data is stored in `src/data/dresses.ts`
- Dress images are stored in `public/images/dresses`
- Homepage components are stored in `src/components/home`
- Page components are stored in `src/pages`
- Routing is handled with `react-router`
- Styling is handled with Tailwind CSS
