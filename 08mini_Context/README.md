# Mini Context

A minimal React project demonstrating the **Context API** for global state management. Users can log in with a username and password, and the profile component reads the logged-in user directly from context — no prop drilling required.

## Features

- **User Context** — shares user state (`user`, `setUser`) across components using `React.createContext` and a custom provider.
- **Login form** — captures username & password, then stores the user object in context on submit.
- **Profile display** — reads user from context and conditionally renders a welcome message or a "Please LOGIN" prompt.

## Project Structure

```
src/
├── context/
│   ├── Usercontext.js          # Creates the UserContext
│   └── UserContextProvider.jsx # Provider component with user state
├── components/
│   ├── Login.jsx               # Login form (writes to context)
│   └── Profile.jsx             # Profile display (reads from context)
├── App.jsx                     # Wraps Login & Profile in the provider
└── main.jsx                    # Entry point
```

## How It Works

1. `UserContext` is created with `React.createContext()`.
2. `UserContextProvider` wraps child components and provides `{ user, setUser }` via `UserContext.Provider`.
3. `Login` uses `useContext(UserContext)` to call `setUser` on form submit.
4. `Profile` uses `useContext(UserContext)` to read `user` and display the username.

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
- **ESLint** — code linting
