import React, { useEffect, useRef, useState } from 'react';

export default function Counting() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    let countLet = 0;

    const renderCount = useRef(1);

    console.log("렌더링...")
    console.log(countRef);

    const increaseCountState = () => {
        // Render가 된다.
        setCount(count + 1);
    }

    const increaseCountRef = () => {
        // Render가 되지 않는다.
        countRef.current = countRef.current + 1;
    }

    const increaseCountLet = () => {
        // Render가 되지 않는다. Render가 되어도 값이 0에서 변하지 않는다.(초기화가 되기 때문에)
        countLet = countLet + 1;
    }

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <div>
            <h1>CountState : {count}</h1>
            <h1>CountRef : {countRef.current}</h1>
            <h1>CountLet : {countLet}</h1>
            <button onClick={increaseCountState}>State 올려</button>
            <button onClick={increaseCountRef}>Ref 올려</button>
            <button onClick={increaseCountLet}>Let 올려</button>

            <h1>Render Count : {renderCount.current}</h1>
        </div>
    );
}