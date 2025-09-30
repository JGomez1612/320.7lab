import { useState, useEffect } from 'react';
import './App.css';

// Import our components
import MovieDisplay from "./components/MovieDisplay.jsx";
import Form from "./components/Form.jsx"

export default function App() {

  const apiKey = "98e3fb1f";


  const [movie, setMovie] = useState(null);


  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e)
    }
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <>
      <div className="App">
        <Form moviesearch={getMovie} />
        <MovieDisplay movie={movie} />
      </div>
    </>
  );
}


