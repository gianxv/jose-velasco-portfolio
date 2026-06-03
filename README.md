# Jose Velasco Portfolio

A modern, responsive developer portfolio for Jose Velasco, a Computer Science student and software developer. The site highlights education, experience, skills, and contact links in a clean single-page layout.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- React Router

## Features

- Responsive single-page portfolio layout
- Light mode by default with dark mode toggle
- Sticky navigation with active section highlighting
- Animated section reveals
- Experience timeline and categorized skills
- Accessible semantic HTML structure
- Contact form that prepares a prefilled email draft

## Installation

Install dependencies and run the local dev server:

```bash
npm install
npm run dev
```

Create a production build locally:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
  pages/
  assets/
  hooks/
  data/
  types/
  styles/
```

## Personalization

Update `src/data/portfolio.ts` with your email, LinkedIn, GitHub, skills, and experience details.

The contact form currently opens a prefilled email draft using `mailto:` so it works without service credentials. To use EmailJS, replace the submit handler in `src/components/Contact.tsx` with your EmailJS service, template, and public key configuration.

## Screenshots

Add screenshots after deployment:

```text
docs/screenshots/desktop.png
docs/screenshots/mobile.png
```

## License

This project is licensed under the MIT License. See `LICENSE` for details.
