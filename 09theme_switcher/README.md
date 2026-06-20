# Theme Switcher

A React project demonstrating **dark/light theme toggling** using the Context API and Tailwind CSS v4's class-based dark mode.

## Features

- **Toggle switch** — a styled checkbox that flips between light and dark themes.
- **Theme Context** — shares `themeMode`, `lightTheme()`, and `darkTheme()` across the component tree without prop drilling.
- **Class-based dark mode** — applies/removes the `dark` class on the `<html>` element so all Tailwind `dark:` utilities respond instantly.
- **Product card** — a sample card component styled with Tailwind that visually reflects the active theme.

## Project Structure

```
src/
├── context/
│   └── theme.jsx               # Creates ThemeContext, exports Provider & useTheme hook
├── components/
│   ├── ThemeButton.jsx          # Toggle switch (writes to context)
│   └── card.jsx                 # Product card (styled with dark: variants)
├── App.jsx                      # Provider setup + useEffect to toggle dark class on <html>
├── index.css                    # Tailwind import + @variant dark mode config
└── main.jsx                     # Entry point
```

## How It Works

1. `theme.jsx` creates `ThemeContext` with `createContext` and exports a `useTheme` hook.
2. `App.jsx` holds the `themeMode` state (`"light"` | `"dark"`) and provides `lightTheme` / `darkTheme` setters via `ThemeProvider`.
3. A `useEffect` in `App.jsx` watches `themeMode` and toggles the `dark` class on `<html>`.
4. `ThemeButton` reads `themeMode` from context to set the checkbox state, and calls `darkTheme()` / `lightTheme()` on change.
5. Tailwind v4 is configured with `@variant dark (&:where(.dark, .dark *))` in `index.css` to enable class-based dark mode.

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

## Tech Stack

- **React 19** — UI library
- **Vite 8** — build tool & dev server
- **Tailwind CSS 4** — utility-first CSS framework
- **ESLint** — code linting
