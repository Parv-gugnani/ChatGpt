import React from "react";
import "./App.css";
import "./normal.css";

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox"></section>
    </div>
  );
}

export default App;
