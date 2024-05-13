import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/WishlistSlice';

function WhishList() {
  const wishlist = useSelector(state => state.wishlist.movies);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = movieId => {
    dispatch(removeFromWishlist(movieId));
  };

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map(movie => (
            <li key={movie.id}>
              {movie.title}{' '}
              <button onClick={() => handleRemoveFromWishlist(movie.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WhishList;
