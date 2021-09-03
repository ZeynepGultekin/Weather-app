import './App.css';
import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "weather-icons/css/weather-icons.min.css";
import Search from "./Components/Search.js";
import Weather from "./Components/Weather.js";
import { getWheatherData } from "./API/weatherApi.js";
import dotenv from "dotenv";
dotenv.config();

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getWheatherData(city).then(data => setWeatherData(data));
  }, [city])

  return (
    <div className="container justify-content-center">
      <Search
        city={city}
        setCity={setCity}
        setIsVisible={setIsVisible}
        inputCity={inputCity}
        setInputCity={setInputCity}
        setWeatherData={setWeatherData}
      />
      <Weather weatherData={weatherData} isVisible={isVisible} />
    </div>
  );
}

export default App;