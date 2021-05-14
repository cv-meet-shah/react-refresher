import React from "react";
import "./App.scss";
import { Header } from "./components";
import { Home, ProductDetail, Checkout, Login } from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
      <ProductDetail />
      <Checkout />
      <Login />
    </div>
  );
}

export default App;
