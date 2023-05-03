import './App.css';

import Hello from './component/hello';
import Welcome from './component/Welcome';
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
    </div>
  );
}

export default App;
