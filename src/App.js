import "./App.css";
import "./styles.css";
import Search from "./Search";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
      </header>
    </div>
  );
}

export default App;