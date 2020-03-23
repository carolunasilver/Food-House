import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm'
import DishCard from './components/DishCard'
import CarouselComp from './components/CarouselComp'
import Navbar from 'react-bootstrap/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RandomRecipe from './components/RandomRecipe';
import About from './components/About';
import DishDetails from './components/DishDetails'
import Categories from './components/Categories'

const FoodHouse = () => {

  const [data, setData] = useState({ hits: [] })
  const [search, setSearch] = useState('')

  const fetchData = async () => {
    const result = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    setData({ hits: result.data.meals });
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  console.log(data);
  
  return (
  <Router>
      <div>
       <nav class="navbar navbar-dark bg-dark">
       <Navbar.Brand as={Link} to="/" class="logo" style={{fontWeight: "bold", color: "orangered", fontSize: "25px"}}>FoodHouse</Navbar.Brand>
          <a class="navbar-brand"><Link to="/">Home</Link></a>
          <a class="navbar-brand"><Link to="/categories">Categories</Link></a>
          <a class="navbar-brand"><Link to="/random">Recipe of the Day</Link></a>
          <a class="navbar-brand"><Link to="/about">About</Link></a>
          <SearchForm class="col-xs-3" setSearch={setSearch} initialPlaceholder={search } />
        </nav>
  
        <Switch>
        <Route path="/categories">
           <Categories />
         </Route>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/random">
           <RandomRecipe />
         </Route>
         <Route path="/:id" component={DishDetails} />
         <Route exact path="/">

    < CarouselComp/>
  }
  
         <div className="container">
              {data.hits && data.hits.length
                ? data.hits.map(meal =>
                  <DishCard key={meal.idMeal} meal={meal}>
                  </DishCard>)
                : "Nothing found :-/"}
          </div>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default FoodHouse;