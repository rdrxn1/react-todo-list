"use client"
import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import SVGButton from "./components/DarkMode.jsx";
import '@/app/index.css'

export default function Page() {
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState('');

    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({todos: newList }));
    }

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo];
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    function handleDeleteTodos(index) {
        const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
        persistData(newTodoList);
        setTodos(newTodoList);
    }

    function handleEditTodos(index) {
        const valueToBeEdited = todos[index];
        setTodoValue(valueToBeEdited);
        handleDeleteTodos(index);
    }

    useEffect(() => {
        if (!localStorage) {
            return;
        }

        let localTodos = localStorage.getItem('todos');
        if (!localTodos) {
            return;
        }

        localTodos = JSON.parse(localTodos).todos;
        setTodos(localTodos);
    }, []);

    return (
        <div>
            <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
            <TodoList
                handleEditTodos={handleEditTodos}
                handleDeleteTodos={handleDeleteTodos}
                todos={todos}
            />
        </div>
    );
}
