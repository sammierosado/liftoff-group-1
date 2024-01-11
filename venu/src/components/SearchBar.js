import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
           <form onSubmit={handleSubmit}>
               <input
                   type="text"
                   placeholder="Search Events"
                   value={searchTerm}
                   onChange={handleChange}
               />
               <button type="submit">
                   Search
               </button>
           </form>
       );
   };

   SearchBar.propTypes = {
       handleSearch: PropTypes.func.isRequired,
   };

export default SearchBar;