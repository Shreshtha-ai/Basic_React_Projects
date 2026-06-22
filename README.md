# ⚛️ Basic React Projects

A collection of beginner-friendly React projects I built while learning React fundamentals. Each project focuses on a specific concept.

## 📂 Projects

| # | Project | Concepts Covered |
|---|---------|-----------------|
| 00 | [custom_react](./custom_react) | Building a custom React-like renderer from scratch |
| 01 | [01basicreact](./01basicreact) | React basics with Create React App |
| 01 | [01vite_react](./01vite_react) | React project setup with Vite |
| 02 | [02counter](./02counter) | `useState` hook, event handling, counter logic |
| 03 | [03tailwind_props](./03tailwind_props) | Tailwind CSS setup, props, reusable components |
| 04 | [04bg_changer](./04bg_changer) | State management, dynamic styling, onClick handlers |
| 05 | [05password_genertor](./05password_genertor) | `useCallback`, `useEffect`, `useRef`, clipboard API, memoization |
| 06 | [06Currency_Converter](./06Currency_Converter) | Custom hooks, API fetching, reusable components, component design |
| 07 | [07reactRouter](./07reactRouter) | React Router v6, `<Outlet>`, `NavLink`, `useParams`, `loader`, `useLoaderData` |
| 08 | [08mini_Context](./08mini_Context) | Context API, `createContext`, `useContext`, Provider pattern, global state |
| 09 | [09theme_switcher](./09theme_switcher) | Context API, Tailwind CSS v4 dark mode, `useEffect`, class-based theme toggling |
| 10 | [10ToDo_List](./10ToDo_List) | Context API, `useEffect`, `localStorage`, CRUD operations, controlled components, immutable state |
| 11 | [reduxToolkitTodo](./reduxToolkitTodo) | Redux Toolkit, `createSlice`, `configureStore`, `useSelector`, `useDispatch`, `nanoid`, Immer |

## 🛠️ Tech Stack

- **React** — UI library
- **Vite** — build tool & dev server
- **Tailwind CSS v4** — utility-first styling (from project 03 onwards)
- **React Router v6** — client-side routing (project 07)
- **Context API** — global state management (projects 08–10)
- **Redux Toolkit** — centralized state management (project 11)
- **react-redux** — React bindings for Redux (`Provider`, `useSelector`, `useDispatch`)
- **localStorage** — browser persistence (project 10)

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Shreshtha-ai/Basic_React_Projects.git

# Navigate into any project
cd Basic_React_Projects/05password_genertor

# Install dependencies
npm install

# Start dev server
npm run dev
```

## 📝 Key Learnings

- React component structure and JSX syntax
- `useState` for managing state
- Props for passing data between components
- Event handling (`onClick` with arrow functions)
- Tailwind CSS for rapid styling
- Dynamic inline styles with `style={{ }}`
- `useCallback` for memoizing functions
- `useEffect` for side effects and reactive updates
- `useRef` for DOM element references
- Clipboard API for copy-to-clipboard functionality
- Custom hooks for reusable logic (`useCurrencyInfo`)
- Fetching external APIs and transforming response data
- React Router: `<Outlet>`, nested routes, `NavLink` with `isActive`
- Dynamic route params with `useParams()`
- Data pre-fetching with `loader` + `useLoaderData()`
- Context API: `createContext`, `useContext`, Provider pattern
- Sharing global state without prop drilling
- Tailwind CSS v4 class-based dark mode with `@variant`
- Toggling the `dark` class on `<html>` via `useEffect`
- `localStorage` for persistent data (`JSON.stringify` / `JSON.parse`)
- CRUD operations with immutable state (spread, `map`, `filter`)
- Controlled components — React state as single source of truth
- Redux Toolkit: `createSlice` for reducer + actions in one place
- `configureStore` with auto DevTools and middleware
- `useSelector` for reading store state, `useDispatch` for dispatching actions
- `action.payload` — how data flows into reducers
- `nanoid` for unique ID generation (bundled with RTK)
- Immer — writing "mutating" code that's safely immutable under the hood
- Context API vs Redux Toolkit — when to use which