# 🔐 Password Generator

A simple, customizable password generator built with **React** and styled with **Tailwind CSS v4**.

## Features

- Generate random passwords with configurable length (6–50 characters)
- Toggle inclusion of **numbers** and **special characters**
- One-click **copy to clipboard** with text selection highlight
- Live regeneration when any setting changes

## React Hooks Used

| Hook | Purpose |
|---|---|
| `useState` | Manages password string, length, and toggle states (numbers, special chars) |
| `useCallback` | Memoizes `passwordGenerator` and `copyPasswordToClipboard` to avoid unnecessary re-creation on every render |
| `useEffect` | Triggers password regeneration whenever length or character options change |
| `useRef` | Holds a reference to the password `<input>` element for programmatic text selection on copy |

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS 4
