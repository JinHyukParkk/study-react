import {useState} from "react"

export default function State() {
    const [name, setName] = useState("Hyuk")

    function changeName() {
        const newName = name === "Hyuk" ? "Suk" : "Hyuk";
        setName(newName)
    }


    return (
    <div>
        <h1>State</h1>
        <h2>{name}</h2>
        <button onClick={changeName}>Change</button>
    </div> 
    );
}