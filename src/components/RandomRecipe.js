import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import axios from 'axios';
import "./RandomeRecipe.css"

const RandomRecipe = () => {
    const [ random, setRandom ] = useState({ meals: []})
    const getRandom = async () => {
        const { data } = await axios(
          `https://www.themealdb.com/api/json/v1/1/random.php`
        );
        setRandom({ meals: data.meals[0] });
      };

      useEffect(() => {
        getRandom();
      }, []);

      console.log(random);

    return (
      <div class="jumbotron dishStyle">
                  <h1 style={{fontWeight: "bold", color: "orangered"}}>{random.meals.strMeal}</h1>
                  <h5><strong>Category:</strong> {random.meals.strCategory}</h5>
                  <img class="randomImg" src={random.meals.strMealThumb} alt={random.meals.strMeal} ></img>
                  <h2 style={{textAlign: "left", color: "orangered", fontWeight: "bold"}}>Instructions:</h2>
                  <p style={{textAlign: "left", fontSize: "18px"}}>{random.meals.strInstructions}</p>
                  <ReactPlayer class="player" url={random.meals.strYoutube} style={{playing: 'true'}}   />
                  <p style={{textAlign: "center", fontSize: "18px",fontStyle: "italic"}}>For more details click <a style={{color: "orangered"}} href={random.meals.strSource} target="_blank">Here!</a></p>
      </div>
          )
}

export default RandomRecipe;