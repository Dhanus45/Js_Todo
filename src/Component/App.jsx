import Header from "./Component/Header";
import Todo from "./Component/Todo.JSX"
import "./app.css";

function App() {

  return (
    <div className="App">
      <Header/>
      {<Todo/>}
   
      </div>);
}

export default App
