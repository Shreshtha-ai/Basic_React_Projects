# 🧭 React Router Project

A multi-page React app that demonstrates client-side routing using `react-router-dom`. Pages include Home, About, Contact, a dynamic User profile page, and a GitHub API integration page.

## Tech Stack

- React + Vite
- React Router v6 (`react-router-dom`)
- Tailwind CSS v4

## Pages & Routes

| Route | Component | What it does |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/about` | About | About page |
| `/contact` | Contact | Contact page |
| `/user/:userid` | User | Dynamic user profile (URL params) |
| `/github` | Github | Fetches GitHub API data with a loader |

---

## 🧠 Tricky Concepts I Learned

### 1. `<Outlet />` — Nested route rendering

The `Layout` component wraps every page with a shared Header and Footer. The `<Outlet />` is where the child route's component gets rendered.

```jsx
// Layout.jsx
<Header />
<Outlet />   // ← child route component appears here
<Footer />
```

**Why it's tricky:** Without `<Outlet />`, child routes simply won't render even though the URL changes.

---

### 2. `<Link>` vs `<NavLink>`

- `<Link to="/">` — Basic navigation, **no page reload** (unlike `<a href>`).
- `<NavLink to="/">` — Same as Link, but gives you an `isActive` boolean to style the active link.

```jsx
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "text-orange-700 font-bold" : "text-gray-700"
  }
>
```

**Why it's tricky:** `className` receives a **function** (not a string) that destructures `{ isActive }`. Easy to forget the function syntax.

---

### 3. Two ways to define routes

**Object style** (commented out in `main.jsx`):
```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
    ]
  }
])
```

**JSX style** (what I used):
```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)
```

Both do the same thing — JSX style reads more like HTML.

---

### 4. Dynamic route params with `useParams()`

The route `/user/:userid` captures whatever comes after `/user/` as a parameter.

```jsx
// Route definition
<Route path='user/:userid' element={<User />} />

// Inside User.jsx
const { userid } = useParams()
// Visit /user/shreshtha → userid = "shreshtha"
```

**Why it's tricky:** The variable name in `useParams()` must **exactly match** the `:param` name in the route definition.

---

### 5. `loader` + `useLoaderData()` — Fetching data BEFORE the page renders

Instead of fetching inside `useEffect` (which shows a blank page first, then loads data), a **loader** fetches the data **before** the component renders.

```jsx
// The loader function (exported from Github.jsx)
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Shreshtha-ai')
  return response.json()
}

// Attached to the route
<Route path='github' element={<Github />} loader={githubInfoLoader} />

// Inside the component — data is ready immediately
const data = useLoaderData()
```

**Why it's tricky:**
- The loader runs **before** the component mounts, so there's no loading state needed
- The loader function must be **exported** and passed to the route's `loader` prop
- `useLoaderData()` returns the data — no `useState` or `useEffect` needed

---

### 6. `<RouterProvider>` instead of `<BrowserRouter>`

With `createBrowserRouter`, you use `<RouterProvider>` to mount the router — not the older `<BrowserRouter>` wrapper pattern.

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
```

---

## Getting Started

```bash
npm install
npm run dev
```
