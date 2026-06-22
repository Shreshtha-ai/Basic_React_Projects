import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl shadow-indigo-500/10 px-6 py-8">

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center mb-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Redux Todo
        </h1>
        <p className="text-center text-sm text-slate-400 mb-8">
          Manage your tasks with Redux Toolkit ⚡
        </p>

        {/* Add Todo Form */}
        <AddTodo />

        {/* Todo List */}
        <Todos />

      </div>
    </div>
  )
}

export default App
