import React, { useState } from 'react';
import ChildClass from './ChildClass'
import ChildFunction from './ChildFunction'

export default function Parent() {
    const [count, setCount] = useState(0);

    const childIncreaseCount = () => {
        setCount(count + 1);
        console.log(count);
    }

    const ChildCountComponent = () => {
        return (
            <div>
                <button onClick={() => {
                    console.log(count);
                    setCount(count + 1);
                }}>Count 올려</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Parent</h1>
            <h1>Count : {count}</h1>
            <ChildClass onClick={childIncreaseCount}/>
            <ChildFunction childComponent={ChildCountComponent}/>
        </div>
    )
}