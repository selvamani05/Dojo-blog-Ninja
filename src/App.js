import './App.css';

function App() {

  const title = 'Welcome to the blog';
  const likes = 50;
  const person = { name: 'yoshi', age: 30 };

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ person.name }</p>
      </div>
    </div>
  );
}

export default App;