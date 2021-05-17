import React from "react";
import "./App.scss";
import { Header } from "./components";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="container-fluid">
        <Routes />
      </div>
    </div>
  );
}

export default App;
