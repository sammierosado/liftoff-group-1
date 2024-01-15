import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './stylesheets/SearchBar.css';

const SearchBarVenue = ({ handleSearch }) => {
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
                   placeholder="Search By: Venue Name, City, State, or Zip Code..."
                   value={searchTerm}
                   onChange={handleChange}
               />
               <button className="search-button" type="submit">
                   Search
               </button>
           </form>
       );
   };

   SearchBarVenue.propTypes = {
       handleSearch: PropTypes.func.isRequired,
   };

export default SearchBarVenue;