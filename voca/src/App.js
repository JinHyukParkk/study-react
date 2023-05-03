import './App.css';

import Hello from './component/hello';
import Welcome from './component/Welcome';
import Props from './component/Props';
import styles from './App.module.css'

function App() {
  const name = "Hyuk"

  const naver = {
    name: "네이버",
    url: "https://naver.com"
  }
  
  return (
    <div className="App">
      <Welcome />
      <Hello />

      <h1 style={{
        color: "blue",
        backgroundColor: "green"
      }}>
        Hello, {name}, <p>{2 + 3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>

      <div className={styles.box}>app</div>

      <Props name="Hyuk" age={31} />
      <Props name="Suk" age={30} />
      <Props name="Min" age={10} />
    </div>
  );
}

export default App;
