import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) {
  return (
    <header>
      <h1><a href="/" onClick={(event) => {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {
  return (
    <nav>
        <ol>
        {props.topics.map((topic, index) => {
           return <li key={topic.id}>
              <a id={topic.id} href={"/read/"+topic.id} onClick={event => {
                event.preventDefault();
                props.onChangeMode(Number(event.target.id));
              }}>{topic.title}</a>
            </li>
        })}
        </ol>
      </nav>
  )
}

function Article(props) {
  return (
    <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
  )
}

function App() {
  const [mode, setMode] = useState('welcome');
  const [id, setId] = useState(null);

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ];

  let content = null;
  if (mode === 'welcome') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'read') {
    topics.forEach(topic => {
      console.log(topic.id, id);
      if (topic.id === id) {
        content = <Article title={topic.title} body={topic.body}></Article>
      }
    });
  }

  function ButtonAdminShortcuts({title, clickEvent}) {
    return (
      <button
        onClick={() => clickEvent}
      > {title} </button>
    );
  }
  
  function openNaver() {
    window.open("http://www.naver.com");
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={() => {setMode('welcome')}}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('read')
        setId(_id)
        }}></Nav>
        {content}
      <ButtonAdminShortcuts title="네이버" clickEvent={openNaver}/>
  </div>
  );
}  

export default App;
