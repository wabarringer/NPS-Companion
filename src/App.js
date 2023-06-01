import './App.css';
import React, { useState, useEffect } from 'react';
const APIKey = 'eMa6BRoNrnC3bxsSAEL2hwJb0LmayafzhPTTkM7w';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const requestURL = `https://developer.nps.gov/api/v1/parks?q=${searchTerm}&limit=10&api_key=${APIKey}`;
    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setSearchResults(data.data);
      });
  }, [searchTerm]);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>NPS Companion</h1>
      </header>
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((park) => (
          <li key={park.id}>{park.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
