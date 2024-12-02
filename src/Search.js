import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit now">Search</button>
    </form>
  );
};

export default Search;
