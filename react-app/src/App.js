import logo from './logo.svg';
import './App.css';

function Header(props) {
  console.log(props);
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
                props.onChangeMode(event.target.id);
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

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javasccript', body:'javascript is ...'}
  ];

  return (
    <div>
      <Header title="WEB" onChangeMode={
        function(){
          alert("Header")
        }
      }></Header>
      <Nav topics={topics} onChangeMode={(id) => {alert(id)}}></Nav>
      <Article title="Welcom" body="Hello, WEB"></Article>
      <ButtonAdminShortcuts title="네이버" clickEvent={openNaver}/>
  </div>
  );
}  

export default App;
