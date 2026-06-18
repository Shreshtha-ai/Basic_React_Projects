# 💱  Currency Converter

A sleek, modern currency converter built with **React**, **Vite**, and **Tailwind CSS**. It fetches live, real-time exchange rates from a public currency API and features a premium frosted-glass design overlaying a custom dark-mode financial background.

---

## ✨ Features
* **Live Exchange Rates:** Fetches real-time conversion rates automatically.
* **Bi-directional Swap:** Swap the "From" and "To" currencies and amounts instantly.
* **Modern UI:** Premium Glassmorphism interface with custom input states, animations, and hover effects.
* **Component-driven Design:** Reusable, clean input box elements.

---

## 💡 Key Learnings

Building this project helped reinforce essential React and frontend development concepts:

### 1. Custom React Hooks (`useCurrencyInfo`)
* **State & Side-Effects:** Managed API calls inside `useEffect`, isolating the fetching logic into a clean, reusable helper hook.
* **Dependency Array:** Leveraged `[currency]` in the dependency array to automatically trigger new API fetches whenever the source currency changes.
* **Response Mapping:** Learned to navigate and extract dynamic API keys (`res[currency]`) safely.

### 2. State Uplifting & Callback Props
* Shared information (amounts, currencies) between two separate `InputBox` instances by uplifting the state to the parent `App.jsx` component.
* Utilized event handlers (`onAmountChange`, `onCurrencyChange`) as prop callbacks to cleanly send input data back to the parent.

### 3. Safety with JavaScript Short-circuiting
* Used defensive coding check wrappers like `onAmountChange && onAmountChange(...)` to guarantee the app doesn't crash if optional props are not passed.

### 4. Interactive CSS Styling & Layouts
* **Tailwind v4 Setup:** Integrated simple custom `@import` rules and custom classes.
* **Glassmorphic UX:** Mastered combining `backdrop-blur`, semi-transparent backgrounds, subtle borders, and drop shadows to build rich visual cards.
* **Component ID Management:** Used React's built-in `useId()` hook to link `<label>` elements with `<input>` fields cleanly, ensuring accessibility (a11y) compliance across multiple instances.

---

## 🚀 Getting Started

1. Clone or navigate to the directory:
   ```bash
   cd 06Currency_Converter
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
