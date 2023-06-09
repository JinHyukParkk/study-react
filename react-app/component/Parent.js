import React, { useEffect, useRef, useState } from 'react';
import Child from './Child'

export default function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Parent</h1>
            <Child count={count}/>
        </div>
    )
}