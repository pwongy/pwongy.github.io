import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Code } from "phosphor-react";

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Code color="#2EC4B6" weight="light" size={512} />
        <p>This page is currently under construction</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
