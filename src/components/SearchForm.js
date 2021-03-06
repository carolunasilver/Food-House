import "./SearchForm.css";
import React, { useState } from 'react';

const SearchForm = ({ setSearch, initialPlaceholder }) => {
 const [query, setQuery] = useState(initialPlaceholder);
 const onChange = event => setQuery(event.target.value);
 const onSubmit = (event) => {
   event.preventDefault();
   setSearch(query);
 }

 return (
   <form class="form-inline" className="container search-form" onSubmit={onSubmit} class="form-control mr-sm" type="search" >
     <input type="text" value={query} onChange={onChange}  placeholder="Enter Main Ingredient" aria-label="Search" class="form-inline form-control mr-sm-2"  aria-label="Search"/>
   </form>
 );
};

export default SearchForm;