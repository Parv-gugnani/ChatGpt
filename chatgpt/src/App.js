import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <h1>Aisde</h1>
      </aside>
      <section className="chatbox">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </section>
    </div>
  );
}

export default App;
