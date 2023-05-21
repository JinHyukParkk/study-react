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

function RedirectNaver({title, clickEvent}) {
  return (
    <article>
      <button onClick={() => clickEvent}>
         {title}
      </button>
    </article>
  );
}

function openNaver() {
  window.open("http://www.naver.com");
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(event.target.title.value, event.target.body.value);
      }}>
        <p><input type="text" name="title" placeholder="title"></input></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('welcome');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]);

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
  } else if (mode === 'create') {
    content = <Create onCreate={(title, body) => {
      const newTopics = {id: nextId, title: title, body: body};
      setTopics([...topics, newTopics]);
      setNextId(nextId + 1);
    }}></Create>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={() => {setMode('welcome')}}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('read')
        setId(_id)
        }}></Nav>
        {content}
      <a href="/create" onClick={(event) => {
        event.preventDefault();
        setMode('create');
      }}>create</a>

      <RedirectNaver title="네이버" clickEvent={openNaver}/>
  </div>
  );
}  

export default App;
