import {useState} from 'react';

export default function Props(props) {
    const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

    console.log(props)
    return (
        <div>
            <h1>Props</h1>
            <h2>{props.name}({age}) : {msg}</h2>

            <button onClick={() => setAge(age + 1)}>플러스</button>
            </div>
    );
}