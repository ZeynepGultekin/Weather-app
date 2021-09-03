import React from 'react';
import {Card} from "react-bootstrap";


function Weather({weatherData, isVisible,}) {
   
    const getCurrentDate =(d)=>{

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month= months[d.getMonth()];
        let year = d.getFullYear();
         
        return `${day} ${date} ${month} ${year}`
      }

    return (
        <div>
            {!weatherData.name ?
        (<h4 className="text-center">Please write a city name</h4>)
        : 
        (
            <Card className="cards mt-5" style={{width:"28rem", visibility: isVisible ? "visible" : "hidden"}}>
                <div className="d-flex justify-content-center">
                    <h3 className="text-center mt-3 m-1 ">{ weatherData.name}</h3>
                    <h3 className="text-center mt-3 m-1">{weatherData.sys.country}</h3>
                </div>
                <h6 className="text-center ">{getCurrentDate(new Date())}</h6>
                <Card.Body className="cardBody text-center">
                    <Card.Text>
                        <i className="wi wi-day-sunny display-1 mt-4"></i>
                    </Card.Text>
                    <Card.Title> <h4>{weatherData.weather[0].description}</h4></Card.Title>
                    <Card.Text>
                        <h1> {Math.floor(weatherData.main.temp - 273.15)}°</h1>
                    </Card.Text>
                </Card.Body>
                <Card.Body className="cardBody2">
                    <Card.Text>
                        max: {Math.floor(weatherData.main.temp_max - 273.15)}°
                    </Card.Text>
                    <Card.Text>
                        min: {Math.floor(weatherData.main.temp_min - 273.15)}°
                    </Card.Text>
                    <Card.Text>
                    humidity: {weatherData.main.humidity}
                    </Card.Text>
                </Card.Body>
            </Card>
        )}
        </div>
    )
}

export default Weather
