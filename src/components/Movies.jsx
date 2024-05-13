import React, { useState } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import Movie from './Movie';
import moviesData from '../api/db.json';

function Movies() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(moviesData.movies);

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setSearchResults(moviesData.movies);
        } else {
            const filteredMovies = moviesData.movies.filter(movie =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredMovies);
        }
    };

    return (
        <>
            <Container>
                <Form className="mb-3">
                    <Form.Group controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search movie..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSearch}>Submit</Button>
                </Form>
                <Row>
                    {searchResults.length > 0 ? (
                        searchResults.map((movie, index) => (
                            <Movie key={index} movie={movie} />
                        ))
                    ) : (
                        <p>No result found</p>
                    )}
                </Row>
            </Container>
        </>
    );
}

export default Movies;
