import React from "react";
import "./App.scss";
import { Home, ProductDetail, Checkout, Login } from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Home />
      <ProductDetail />
      <Checkout />
      <Login />
    </div>
  );
}

export default App;
