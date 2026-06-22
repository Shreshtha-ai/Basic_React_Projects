# ✅ TaskFlow — React ToDo List App

A feature-rich Todo application built with **React**, **Context API**, **Tailwind CSS v4**, and **localStorage** for persistent data. This project demonstrates state management without external libraries by using React's built-in Context API.

---

## 🚀 Features

- ➕ **Add** new todos
- ✏️ **Edit** existing todos (inline editing)
- ❌ **Delete** todos
- ✔️ **Toggle** completion status (with visual strike-through)
- 💾 **Persistent storage** — todos survive page refresh via `localStorage`
- 🎨 **Modern UI** — glassmorphism design with gradient accents using Tailwind CSS

---

## 📁 Project Structure

```
10ToDo_List/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx        # Input form to add new todos
│   │   ├── TodoItem.jsx        # Individual todo with edit/delete/toggle
│   │   └── index.js            # Barrel export for components
│   ├── context/
│   │   ├── ToDoContext.js      # Context creation, custom hook, Provider export
│   │   └── index.js            # Barrel export for context
│   ├── App.jsx                 # Root component — state logic + Provider wrapper
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Tailwind CSS import
├── package.json
└── vite.config.js              # Vite + Tailwind plugin config
```

---

## 🔑 Key Learnings

### 1. Context API — Global State Without Redux

This project uses React's **Context API** to share todo state and CRUD functions across components **without prop drilling**.

**The Pattern (3 steps):**

```
Step 1: CREATE the context     →  createContext()
Step 2: PROVIDE the context    →  <ToDoProvider value={...}>
Step 3: CONSUME the context    →  useToDo() custom hook
```

**In `ToDoContext.js`:**
```js
// Step 1: Create context with default shape (acts as documentation)
export const ToDoContext = createContext({
  todos: [{ id: 1, todo: "Todo Message", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

// Step 3: Custom hook for easy consumption
export const useToDo = () => {
  return useContext(ToDoContext);
};

// Export the Provider component
export const ToDoProvider = ToDoContext.Provider;
```

> **Why default values in `createContext()`?**
> They serve as documentation and provide autocomplete support. They are only used if a component consumes the context **without** a Provider above it in the tree.

---

### 2. `useEffect` — Side Effects & Lifecycle

Two `useEffect` hooks handle localStorage synchronization:

```js
// LOAD todos from localStorage on first render (mount)
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (todos && todos.length > 0) {
    setTodos(todos);
  }
}, []);  // ← empty dependency array = runs ONCE on mount

// SAVE todos to localStorage whenever they change
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);  // ← runs every time `todos` state changes
```

| Dependency Array | Behavior |
|---|---|
| `[]` (empty) | Runs **once** after first render (like `componentDidMount`) |
| `[todos]` | Runs whenever `todos` changes (like `componentDidUpdate` for `todos`) |
| No array | Runs after **every** render (rarely desired) |

---

### 3. `localStorage` — Browser Persistence

`localStorage` is a Web API that stores key-value pairs in the browser, surviving page refreshes.

```js
// SAVE — must convert objects to string
localStorage.setItem("todos", JSON.stringify(todos));

// LOAD — must parse string back to object
JSON.parse(localStorage.getItem("todos"));
```

> **Important:** `localStorage` only stores **strings**. You must use `JSON.stringify()` to save and `JSON.parse()` to retrieve objects/arrays.

---

### 4. Controlled Components

All inputs in this project are **controlled** — React state is the single source of truth.

```jsx
<input
  value={todo}                              // state controls what's displayed
  onChange={(e) => setTodo(e.target.value)}  // user input updates state
/>
```

**Controlled vs Uncontrolled:**
| Aspect | Controlled | Uncontrolled |
|---|---|---|
| Value source | React state (`useState`) | DOM itself (`ref`) |
| Updates via | `onChange` handler | Direct DOM access |
| When to use | Form validation, conditional logic | Simple forms, file inputs |

---

### 5. Immutable State Updates

React state must **never be mutated directly**. Every update creates a new array/object:

```js
// ✅ ADD — spread previous, add new at the start
setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);

// ✅ UPDATE — map returns a new array, replacing the matching item
setTodos((prev) => prev.map((t) => (t.id === id ? todo : t)));

// ✅ DELETE — filter returns a new array, excluding the matching item
setTodos((prev) => prev.filter((t) => t.id !== id));

// ✅ TOGGLE — spread the todo object, flip the completed property
setTodos((prev) => prev.map((t) =>
  t.id === id ? { ...t, completed: !t.completed } : t
));
```

> **Why `(prev) =>` callback form?** It ensures you're working with the **latest** state value, avoiding stale state bugs in closures.

---

### 6. Barrel Exports — Clean Imports

Both `components/index.js` and `context/index.js` act as barrel files:

```js
// components/index.js
export { TodoForm, TodoItem };
```

This lets you import from the folder instead of individual files:
```js
// Instead of:
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

// You can write:
import { TodoForm, TodoItem } from './components';
```

---

### 7. Spread Operator — Merging & Copying Objects

The spread operator `...` is used extensively for immutable updates:

```js
// Creating a new todo — adds `id` to the todo object
{ id: Date.now(), ...todo }
// If todo = { todo: "Buy milk", completed: false }
// Result = { id: 1719045600000, todo: "Buy milk", completed: false }

// Updating a property — copies all fields, overrides `todo`
{ ...todo, todo: todoMsg }

// Toggling — copies all fields, flips `completed`
{ ...prevTodo, completed: !prevTodo.completed }
```

---

## ⚙️ Important Concepts Explained

### Context API vs Prop Drilling vs Redux

```
                                 Complexity
  Prop Drilling ──────── Context API ──────── Redux/RTK
  (parent→child)         (medium apps)        (large apps)

  ✓ Simple               ✓ No prop drilling   ✓ DevTools
  ✗ Deep nesting          ✓ Built into React   ✓ Middleware
  ✗ Many intermediaries   ✗ No DevTools        ✗ Boilerplate
```

**This project uses Context API because:**
- Single piece of shared state (todos)
- Small number of consumers (TodoForm, TodoItem)
- No complex async logic needed

---

### How Data Flows in This App

```
┌─────────────────────────────────────────────┐
│  App.jsx                                    │
│  ┌────────────────────────────────────────┐ │
│  │ State: todos (useState)               │ │
│  │ Functions: addTodo, updateTodo,        │ │
│  │            deleteTodo, toggleTodo      │ │
│  └──────────────┬─────────────────────────┘ │
│                 │                            │
│    <ToDoProvider value={{ todos, ...fns }}>  │
│                 │                            │
│     ┌───────────┴───────────┐               │
│     ▼                       ▼               │
│  TodoForm               TodoItem            │
│  useToDo() → addTodo    useToDo() →         │
│                         updateTodo,          │
│                         deleteTodo,          │
│                         toggleTodo           │
└─────────────────────────────────────────────┘

localStorage ◄──── useEffect (save on change)
     │
     └────► useEffect (load on mount)
```

---

### `Date.now()` as ID

```js
const addTodo = (todo) => {
  setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
};
```

`Date.now()` returns the current timestamp in milliseconds (e.g., `1719045600000`). It's used as a quick unique ID generator for todo items. For production apps, consider using `crypto.randomUUID()` or `nanoid()` for guaranteed uniqueness.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library with hooks |
| **Vite 8** | Fast dev server & build tool |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **Context API** | State management (built-in) |
| **localStorage** | Browser-based data persistence |

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

This project teaches the **core React patterns** needed for any real-world application:

1. **Context API** — share state globally without prop drilling
2. **Custom Hooks** (`useToDo`) — encapsulate and reuse context logic
3. **useEffect** — handle side effects (load/save to localStorage)
4. **Controlled Components** — React-driven form inputs
5. **Immutable State Updates** — never mutate, always create new references
6. **Component Composition** — break UI into reusable pieces (TodoForm, TodoItem)
7. **Barrel Exports** — keep imports clean and organized
