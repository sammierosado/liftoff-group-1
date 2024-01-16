import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './stylesheets/SearchBar.css';

const SearchBar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
       setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
       e.preventDefault();
       handleSearch(searchTerm);
    };

  return (
           <form className="search-bar" onSubmit={handleSubmit}>
               <input
                   type="text"
                   className="search-input"
                   placeholder="Search By: Event Name, Artist, Genre, Venue, or Date..."
                   value={searchTerm}
                   onChange={handleChange}
               />
               <button className="search-button" type="submit">
                   Search
               </button>
           </form>
       );
   };

   SearchBar.propTypes = {
       handleSearch: PropTypes.func.isRequired,
   };

export default SearchBar;