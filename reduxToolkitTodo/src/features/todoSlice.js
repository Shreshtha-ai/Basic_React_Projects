import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id:1, text:"Hello World"}]
}


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {id:nanoid(),
                text: action.payload // payload is a object that carries the data which we want to add in our store

            }
            state.todos.push(todo) // push the todo in our store
        }, // state- gives current value of state, action- gives values to update
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload ) // filter the todo and remove it if the id matches here payload is the id of the todo that is passed from the button
        },
    } // contain property and function

})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer