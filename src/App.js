import "./App.css";
import "./styles.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Search />
      </div>
      <footer>
        This project was coded by Bo Rutjes and is open-sourced on{" "}
        <a href="https://github.com/Bosif/React_Weather">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
