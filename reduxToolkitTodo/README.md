# ⚡ Redux Todo — Redux Toolkit Todo App

A Todo application built with **React**, **Redux Toolkit (RTK)**, **react-redux**, and **Tailwind CSS v4**. This project demonstrates centralized state management using Redux Toolkit — the modern, recommended way to use Redux.

---

## 🚀 Features

- ➕ **Add** new todos with a form input
- ❌ **Delete** todos via a remove button
- 🏪 **Centralized state** — all todo data lives in the Redux store
- 🆔 **Unique IDs** — each todo gets a `nanoid()` generated ID
- 🎨 **Glassmorphism UI** — dark gradient theme with Tailwind CSS

---

## 📁 Project Structure

```
reduxToolkitTodo/
├── src/
│   ├── app/
│   │   └── store.js              # Redux store configuration
│   ├── components/
│   │   ├── AddTodo.jsx           # Form to dispatch addTodo action
│   │   └── Todos.jsx             # Displays todos, dispatches removeTodo
│   ├── features/
│   │   └── todoSlice.js          # Slice: initial state + reducers + actions
│   ├── App.jsx                   # Root component (layout)
│   ├── main.jsx                  # Entry point — wraps App with <Provider>
│   └── index.css                 # Tailwind CSS import + body styles
├── package.json
└── vite.config.js                # Vite + Tailwind plugin config
```

---

## 🔑 Key Learnings

### 1. Redux Toolkit (RTK) — The Modern Redux

Redux Toolkit simplifies Redux by eliminating boilerplate. Instead of writing separate action types, action creators, and reducers, RTK combines them into a single **slice**.

**Old Redux (verbose):**
```js
// action type
const ADD_TODO = 'ADD_TODO'

// action creator
const addTodo = (text) => ({ type: ADD_TODO, payload: text })

// reducer
function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: nanoid(), text: action.payload }]
    default:
      return state
  }
}
```

**Redux Toolkit (concise):**
```js
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload })
    },
  },
})
```

> RTK handles action types, action creators, and immutability (via Immer) automatically.

---

### 2. `createSlice` — The Core of RTK

A **slice** is a collection of reducer logic and actions for a single feature.

```js
export const todoSlice = createSlice({
  name: "todo",              // prefix for action types → "todo/addTodo"
  initialState,              // default state shape
  reducers: {                // reducer functions (auto-generate actions)
    addTodo: (state, action) => { ... },
    removeTodo: (state, action) => { ... },
  },
})
```

**What `createSlice` gives you:**

| Output | What it is | How to access |
|---|---|---|
| `todoSlice.actions` | Auto-generated action creators | `export const { addTodo, removeTodo } = todoSlice.actions` |
| `todoSlice.reducer` | The combined reducer function | `export default todoSlice.reducer` |

**Auto-generated action types:**
- `addTodo("Buy milk")` → `{ type: "todo/addTodo", payload: "Buy milk" }`
- `removeTodo("abc123")` → `{ type: "todo/removeTodo", payload: "abc123" }`

---

### 3. `action.payload` — How Data Flows Into Reducers

Whatever argument you pass to an action creator becomes `action.payload`:

```js
// In component:
dispatch(addTodo("Buy milk"))       // "Buy milk" → action.payload
dispatch(removeTodo(todo.id))       // todo.id → action.payload

// In reducer:
addTodo: (state, action) => {
  text: action.payload              // "Buy milk"
}
removeTodo: (state, action) => {
  todo.id !== action.payload        // the id to remove
}
```

| Action | Argument passed | `action.payload` value |
|---|---|---|
| `addTodo("Buy milk")` | text string | `"Buy milk"` |
| `removeTodo("abc123")` | id string | `"abc123"` |

---

### 4. Immer — "Mutating" State Safely

Normally in React/Redux, you must **never mutate state directly**. But RTK uses **Immer** under the hood, which lets you write "mutating" code that's actually converted to immutable updates.

```js
// ✅ This LOOKS like mutation, but Immer makes it safe inside createSlice
addTodo: (state, action) => {
  state.todos.push(todo)     // push directly — Immer handles immutability
}

// Compare with plain Redux (without Immer):
// return { ...state, todos: [...state.todos, todo] }
```

> **Important:** This "mutation" syntax ONLY works inside `createSlice` reducers. Outside of RTK, you must still use spread/filter/map for immutable updates.

**However, `filter` still works normally:**
```js
removeTodo: (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload)
  // reassigning state.todos with filter — also valid with Immer
}
```

---

### 5. `configureStore` — Setting Up the Store

```js
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'

export const store = configureStore({
  reducer: todoReducer,
})
```

**What `configureStore` does automatically:**
- ✅ Combines multiple reducers (if you add more slices)
- ✅ Adds Redux DevTools support
- ✅ Includes `redux-thunk` middleware for async actions
- ✅ Adds development checks (serializable data, accidental mutations)

**Multiple slices pattern:**
```js
// When you have more features:
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,    // another slice
    auth: authReducer,    // another slice
  },
})
```

---

### 6. `<Provider>` — Connecting React to Redux

The `Provider` component from `react-redux` makes the Redux store available to **all components** in the tree.

```jsx
// main.jsx
import { Provider } from 'react-redux'
import { store } from './app/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

> Without `<Provider>`, `useSelector` and `useDispatch` won't work — they'd have no store to connect to.

---

### 7. `useSelector` — Reading State From the Store

`useSelector` is a hook that **reads/selects** data from the Redux store.

```js
const todos = useSelector((state) => state.todos)
```

- `state` = the entire Redux store state
- `state.todos` = the `todos` array from our slice
- The component **re-renders** whenever the selected data changes

**How the state shape is determined:**

```
configureStore({ reducer: todoReducer })
                            ↓
              todoSlice initialState = { todos: [...] }
                            ↓
              useSelector((state) => state.todos)
```

---

### 8. `useDispatch` — Sending Actions to the Store

`useDispatch` returns the `dispatch` function, which is the **only way** to update the Redux store.

```js
const dispatch = useDispatch()

// Dispatching actions:
dispatch(addTodo(input))        // sends addTodo action to the store
dispatch(removeTodo(todo.id))   // sends removeTodo action to the store
```

**The complete flow:**
```
Button Click
  → dispatch(removeTodo(todo.id))     // 1. dispatch the action
  → { type: "todo/removeTodo",        // 2. action object is created
       payload: "abc123" }
  → reducer runs filter()              // 3. store runs the reducer
  → state.todos updates                // 4. state changes
  → useSelector triggers re-render     // 5. component re-renders
```

---

### 9. `nanoid` — Unique ID Generation

RTK includes `nanoid` — a tiny, fast, URL-safe unique ID generator.

```js
import { createSlice, nanoid } from "@reduxjs/toolkit"

addTodo: (state, action) => {
  const todo = {
    id: nanoid(),           // "V1StGXR8_Z5jdHi6B-myT"
    text: action.payload
  }
  state.todos.push(todo)
}
```

> Unlike `Date.now()` (used in the Context API project), `nanoid` generates truly unique, collision-safe IDs.

---

## ⚙️ Important Concepts Explained

### Redux Data Flow (One-Way)

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   UI (Component)                                 │
│   ┌──────────────────────────────────────────┐   │
│   │  const dispatch = useDispatch()          │   │
│   │  dispatch(addTodo("Buy milk"))  ──────────── │ ─── 1. DISPATCH
│   └──────────────────────────────────────────┘   │
│                                                  │
│                      ▼                           │
│                                                  │
│   Store                                          │
│   ┌──────────────────────────────────────────┐   │
│   │  reducer receives (state, action)        │   │
│   │  state.todos.push(newTodo)    ────────────── │ ─── 2. REDUCE
│   └──────────────────────────────────────────┘   │
│                                                  │
│                      ▼                           │
│                                                  │
│   UI (Component)                                 │
│   ┌──────────────────────────────────────────┐   │
│   │  const todos = useSelector(              │   │
│   │    (state) => state.todos                │   │
│   │  )                            ────────────── │ ─── 3. RE-RENDER
│   └──────────────────────────────────────────┘   │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

### Context API vs Redux Toolkit

| Feature | Context API | Redux Toolkit |
|---|---|---|
| **Setup** | Built into React | Requires `@reduxjs/toolkit` + `react-redux` |
| **Boilerplate** | Low | Medium (but less than old Redux) |
| **DevTools** | ❌ None | ✅ Redux DevTools (time travel, state inspection) |
| **Performance** | Re-renders all consumers | Only re-renders if selected state changes |
| **Middleware** | ❌ Manual | ✅ Built-in (thunk for async) |
| **Best for** | Small-medium apps, theming | Medium-large apps, complex state |
| **State location** | Defined in component (`useState`) | Defined in slice (`initialState`) |
| **Update method** | `setState` via context | `dispatch(action)` via reducer |

---

### Key Exports Pattern From a Slice

Every slice file follows this export pattern:

```js
// 1. Create the slice
export const todoSlice = createSlice({ ... })

// 2. Export individual action creators (named exports)
export const { addTodo, removeTodo } = todoSlice.actions

// 3. Export the reducer (default export)
export default todoSlice.reducer
```

**Why two types of exports?**
- **Named exports** (`addTodo`, `removeTodo`) → imported by components to dispatch actions
- **Default export** (`todoSlice.reducer`) → imported by store to configure the reducer

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library with hooks |
| **Redux Toolkit 2** | State management (createSlice, configureStore) |
| **react-redux 9** | React bindings (Provider, useSelector, useDispatch) |
| **Vite 8** | Fast dev server & build tool |
| **Tailwind CSS v4** | Utility-first CSS framework |

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📝 Summary

This project teaches the **core Redux Toolkit patterns** for modern React apps:

1. **`createSlice`** — define reducers + auto-generated actions in one place
2. **`configureStore`** — set up the store with DevTools & middleware
3. **`<Provider>`** — connect React component tree to the Redux store
4. **`useSelector`** — read state from the store (subscribe to changes)
5. **`useDispatch`** — dispatch actions to trigger state updates
6. **`action.payload`** — the standard way data flows into reducers
7. **`nanoid`** — generate unique IDs (bundled with RTK)
8. **Immer** — write "mutating" code that's safely immutable under the hood
