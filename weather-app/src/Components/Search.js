import React from 'react'
import {Button,InputGroup, FormControl} from "react-bootstrap";

function Search({ setCity, inputCity, setInputCity, setIsVisible }) {
    const submitHandler = (e) => {
      e.preventDefault();
      setCity(inputCity);
      setInputCity("");
      setIsVisible(true);
    };
    
    const inputHandler = (e) => {
      setInputCity(e.target.value);
    };
  
    return (
      <div>
        <h1 className=" text-center mt-5">Weather App</h1>
        <InputGroup className="mb-3 inputGroup" style={{ width: "28rem" }}>
          <FormControl
            placeholder="City name.."
            aria-label="City name"
            aria-describedby="basic-addon2"
            onChange={inputHandler}
            value={inputCity}
          />
          <Button
            type="submit"
            onClick={submitHandler}
            variant="outline-secondary"
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>
      </div>
    );
  }
  

export default Search
