import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import axios from 'axios';
import "./DishDetails.css"

const DishDetails = props => {

  const [recipe, setRecipe] = useState({ meals: [] })
  const getRecipe = async () => {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
      );
      setRecipe({ meals: data.meals[0] });
    };

    useEffect(() => {
      getRecipe();
    }, []); 

    return (
      <div class="jumbotron dishStyle">
        <h1 style={{fontWeight: "bold", color: "orangered"}}>{recipe.meals.strMeal}</h1>
        <h5><strong>Category:</strong> {recipe.meals.strCategory}</h5>
        <img class="dishImg" src={recipe.meals.strMealThumb} alt={recipe.meals.strMeal} ></img>
        <h2 style={{textAlign: "left", color: "orangered", fontWeight: "bold"}}>Instructions:</h2>
        <p style={{textAlign: "left", fontSize: "18px"}}>{recipe.meals.strInstructions}</p>
        <ReactPlayer class="player" url={recipe.meals.strYoutube} style={{playing: 'true'}}   />
        <p style={{textAlign: "center", fontSize: "18px",fontStyle: "italic"}}>For more details click <a style={{color: "orangered"}} href={recipe.meals.strSource} target="_blank">Here!</a></p>
      </div>
    )
}

export default DishDetails;