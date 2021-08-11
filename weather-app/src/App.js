import './App.css';
import {useState} from "react";
import {Card, Button,InputGroup, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "weather-icons/css/weather-icons.min.css";

function App() {

  const getCurrentDate =(d)=>{

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month= months[d.getMonth()];
    let year = d.getFullYear();
     
    return `${day} ${date} ${month} ${year}`
  }


  const [weatherData, setWeatherData] = useState({});
  const [description,setDescription] = useState("");
  const [temp,setTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [humidity,setHumidity] = useState("");
  const [country, setCountry] = useState("");
  const [inputCity,setInputCity] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  

  const API_key = "223c292e1bb3d05f5ed0eb30034a0c0b";
  const url = (`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_key}`)
 
  const submitHandler = async (e)=>{
   e.preventDefault();

   const weatherApi = await fetch(url);
   const weatherApiJson = await weatherApi.json();
   console.log(weatherApiJson);
   setWeatherData(weatherApiJson);
   setInputCity("");
   setIsVisible(true);
   
  
   setDescription(weatherApiJson.weather[0].description);
   setMaxTemp(Math.floor(weatherApiJson.main.temp_max - 273.25));
   setMinTemp(Math.floor(weatherApiJson.main.temp_min - 273.25));
   setHumidity(weatherApiJson.main.humidity);
   setTemp(Math.floor(weatherApiJson.main.temp - 273.15));
   setCountry(`${weatherApiJson.name}, ${weatherApiJson.sys.country}`);

   
 };
 const inputHandler = (e)=>{
   setInputCity(e.target.value);

 }
  return (
    <div className="container" >
      <h1 className=" text-center mt-5">Weather App</h1>
      <InputGroup className="mb-3 inputGroup" style={{width:"30rem"}}  >
        <FormControl
          placeholder="City name.."
          aria-label="City name"
          aria-describedby="basic-addon2"
          onChange ={inputHandler}
          value={inputCity}
        />
        <Button type="submit" onClick={submitHandler} variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      
        < >
        {/* {!weatherData.name ?(
          
          <Card className="cards mt-5" style={{width:"30rem", visibility: isVisible ? "visible" : "hidden"}}>
            <h4>"Please write a city name"</h4>
          </Card>
        ): ( */}
          <Card className="cards mt-5" style={{width:"30rem", visibility: isVisible ? "visible" : "hidden"}}>

        <h3 className="text-center mt-3">{country}</h3>
        <h6 className="text-center ">{getCurrentDate(new Date())}</h6>
        <Card.Body className="cardBody text-center">
          <Card.Text>
            <i className="wi wi-day-sunny display-1 mt-4"></i>
          </Card.Text>
          <Card.Title> <h4>{description}</h4></Card.Title>
          <Card.Text>
            <h1> {temp}°</h1>
          </Card.Text>
        </Card.Body>
        <Card.Body className="cardBody2">
          <Card.Text>
            max: {maxTemp}°
          </Card.Text>
          <Card.Text>
            min: {minTemp}°
          </Card.Text>
          <Card.Text>
           humidity: {humidity}
          </Card.Text>
        </Card.Body>
      </Card>
        {/* )} */}
        </>
     
    </div>
  );
}

export default App;
