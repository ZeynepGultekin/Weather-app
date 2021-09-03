export async function getWheatherData(city) {
    const API_key = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    
  
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }