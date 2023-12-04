import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./Example/MyComponent.js";
import ListTodo from "./Example/Todos/ListTodo.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple TODO Apps with React-Basic</p>

        {/* <MyComponent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
