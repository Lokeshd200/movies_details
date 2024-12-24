
import React, { useEffect, useState } from "react";
import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // Fetch movie data from the API
    fetch('https://dummyapi.online/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="movie-container">
      {movies.length === 0 ? (
        <p>Loading movies...</p>
      ) : (
        movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.movie} className="movie-image" />
            <div className="movie-details">
              <h3>{movie.movie}</h3>
              <p>Rating: {movie.rating}</p>
              <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
                View on IMDb
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Movies;
