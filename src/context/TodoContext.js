import { createContext, useContext, useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || [])
    const [select, setSelect] = useState(localStorage.getItem("select") || "all")   

    const values = {todoList, setTodoList, select, setSelect}

    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext)