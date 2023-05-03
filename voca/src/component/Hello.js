import World from "./World"
import styles from "./hello.module.css"

function showName() {
    console.log("Hyuk");
}

function showAge(age) {
    console.log(age);
}

function showText(e) {
    console.log(e.target.value);
}

export default function Hello() {
    return (
        <div className={styles.box}>
        <h1 style={{
            color : "#f00",
            borderRight : "2px solid #000",
            marginBottom : "30px",
            opacity : 0.5
        }}>
            Hello
            </h1>

        <button onClick={showName}>Show menu</button>
        <button onClick={() => showAge(30)}>Show age</button>

        <input type="text" onChange={showText} />

        <World />
    </div>
    ); 
}
