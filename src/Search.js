import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Search() {
  const [input, setInput] = useState("");
  //const [city, setCity] = useState("");
  //const [temperature, setTemperature] = useState(null);
  const [message, showMessage] = useState("");

  function giveTemperature(response) {
    showMessage(
      <ul>
        <li>Temperature: {Math.round(response.data.temperature.current)} ºC</li>
        <li>Description: {response.data.condition.description}</li>
        <li>Wind: {response.data.wind.speed} km/h</li>
        <li>Humidity: {response.data.temperature.humidity}%</li>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="white"
          size="50"
          animate={true}
        />
      </ul>
    );
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "1a747f2d7ac32a100bt13fab8776o6ca";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${input}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(giveTemperature);
  }

  function updateInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a city"
          value={input}
          onChange={updateInput}
        />
        <input type="submit" value="Search" />
      </form>
      <p>{message}</p>
    </div>
  );
}
