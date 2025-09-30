import { useState, useEffect } from 'react';
import logo from "./logo,svg";
import './App.css';

// Import our components
import MovieDisplay from "./components/MovieDisplay.mjs";
import Form from "./components/Form.mjs"

export default function App() {
  // Constant with your API key
  const apiKey = "98e3fb1f";

  // State to hold movie
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

  // We pass the getMovie funciton as a prop called moviesearch
  // We pass movie as props to movie display

  return (
    <>
      <div className="App">
        <Form moviesearch={getMovie} />
        <MovieDisplay movie={movie} />
      </div>
    </>
  );
}


