import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../reducers/login";

export default function Login() {
    const [email, setEmail] = useState("abc@example.com");
    const [password, setPassword] = useState("123123");

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(login({ email, password }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
            />
            <button>Login</button>
        </form>
    );
}
