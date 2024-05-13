import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './WishlistSlice';

const rootReducer = {
    wishlist: wishlistReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;