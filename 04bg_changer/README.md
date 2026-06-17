# 🎨 Background Color Changer

A simple React app that lets you change the background color of the page by clicking color buttons.

## Features

- Click any color button to instantly change the background
- Smooth transition animation (200ms)
- 8 color options: Red, Green, Blue, Orange, Yellow, Pink, Purple, Gray
- Fixed bottom toolbar with a clean, rounded design

## Tech Stack

- **React** (with `useState` hook)
- **Vite** — fast build tool & dev server
- **Tailwind CSS v4** — utility-first styling

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## What I Learned

- Using `useState` to manage dynamic state in React
- Inline styles with `style={{ backgroundColor: color }}` for dynamic values
- The difference between `onClick={setColor("red")}` (runs immediately) vs `onClick={() => setColor("red")}` (runs on click)
- Tailwind CSS utility classes for layout (`flex`, `fixed`, `rounded-full`, etc.)
