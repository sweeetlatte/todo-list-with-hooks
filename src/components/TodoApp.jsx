import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTodos, addTodo } from "../reducers/todo";

export default function TodoApp() {
    const [text, setText] = useState("");

    const todos = useSelector((state) => state.todo.items);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchTodos());
    // }, [dispatch]);

    function clearStorage() {
        localStorage.clear();
        window.location.reload();
        return;
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    if (text !== "") {
                        dispatch(addTodo(text));
                        setText("");
                    }
                }}
            >
                Add
            </button>
            <button onClick={clearStorage}>Logout</button>
            <ul>
                {todos &&
                    todos.map((todo, index) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
            </ul>
        </div>
    );
}
