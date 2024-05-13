import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import moviesData from '../api/db.json';

function MovieDetails() {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const movie = moviesData.movies.find(movie => movie.id === movieId);

  return (
    <div>
      {movie ? (
        <Card>
          <Card.Img
            variant="top"
            src={`/images/${movie.img}`} alt="movie Img"
            height="300"
          />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              <p>Year: {movie.year}</p>
              <p>Director: {movie.director}</p>
              <p>Genre: {movie.genre}</p>
              <p>Rating: {movie.rating}</p>
              <p>Description: {movie.description}</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}

export default MovieDetails;