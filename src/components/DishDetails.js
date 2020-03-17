import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DishDetails = props => {

    const [recipe, setRecipe] = useState({ meals: [] })
    const getRecipe = async () => {
        const result = await axios(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
        );
        setRecipe({ meals: result.data.meals [0]});
      };
     
    
      useEffect(() => {
        getRecipe();
      }, []);

      console.log(recipe);

    return (
        <div>
            <h1>About This Dish</h1>
            <h1>{recipe.meals.strMeal}</h1>
            <p>{recipe.meals.strCategory}</p>
            <img src={recipe.meals.strMealThumb} alt={recipe.meals.strMeal} ></img>
            <p>{recipe.meals.strInstructions}</p>
        </div>
    )
}

export default DishDetails;