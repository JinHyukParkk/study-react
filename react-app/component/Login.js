import React, {useEffect, useRef } from 'react';

export default function Login() {
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    const login = () => {
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <h1>Login</h1>
            <input ref={inputRef} type="text" placeholder="아이디"/>
            <button onClick={login}>로그인</button>
        </div>
    )
}