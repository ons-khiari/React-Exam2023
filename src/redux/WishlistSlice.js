import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        movies: [],
    },
    reducers: {
        addToWishlist(state, action) {
            const movie = action.payload;
            if (!state.movies.some(item => item.id === movie.id)) {
                state.movies.push(movie);
            }
        },
        removeFromWishlist(state, action) {
            const movieId = action.payload;
            state.movies = state.movies.filter(movie => movie.id !== movieId);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;