import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/WishlistSlice';

function Movie({ movie }) {
    const [rating, setRating] = useState(null);
    const [ratings, setRatings] = useState([]);
    const [submittedRating, setSubmittedRating] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const dispatch = useDispatch();

    const handleRatingChange = (event) => {
        const newRating = parseInt(event.target.value);
        if (newRating >= 1 && newRating <= 5) {
            setRating(newRating);
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter a rating between 1 and 5');
        }
    };

    const handleRatingSubmit = () => {
        if (!errorMessage) {
            setRatings([...ratings, rating]);
            setSubmittedRating(true);
            setRating(null);
        } else {
            alert(errorMessage);
        }
    };

    const calculateAverageRating = () => {
        const sum = ratings.reduce((acc, rating) => acc + rating, 0);
        return sum / ratings.length;
    };

    const handleAddToWishlist = () => {
        dispatch(addToWishlist(movie));
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    };

    return (
        <>
            <Card>
                <Card.Img variant="top" src={`images/${movie.img}`} />
                <Card.Body>
                    <NavLink to={`/details/${movie.id}`}>
                        <Card.Title>{movie.title}</Card.Title>
                    </NavLink>
                    <Card.Text>
                        <strong>Year:</strong> {movie.year}<br />
                        <strong>Genre:</strong> {movie.genre}<br />
                        <strong>Description:</strong> {movie.description}
                    </Card.Text>
                    {submittedRating && <p>Thank you for your rating!</p>}
                    {!submittedRating && ratings.length > 0 ? (
                        <p>Average Rating: {calculateAverageRating().toFixed(1)}</p>
                    ) : (
                        <>
                            {!submittedRating && <p>No ratings yet</p>}
                            <p>Average Rating: {calculateAverageRating().toFixed(1)}</p>
                            <p>Ratings: {JSON.stringify(ratings)}</p>
                        </>
                    )}

                    <input type="number" value={rating || ''} onChange={handleRatingChange} />
                    <Button variant="primary" onClick={handleRatingSubmit}>Submit Rating</Button>
                    <br />
                    {errorMessage}
                    <Button onClick={handleAddToWishlist}>Add to Wishlist</Button>
                    {showMessage && <p>Added to wishlist</p>}
                </Card.Body>
            </Card>
        </>
    );
}

export default Movie;
