import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>

          {movies.map( movie =>

            <div className="movies">
             {movie.title}
             {movie.time}
             <ul>
            {movie.genres.map( movie => <li>{movie}</li>)}
            </ul>
            </div>

            )}
        </div>
  );
};

export default Movies;