import './App.css';
import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { Suspense } from 'react';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import WhishList from './components/WhishList';
import NotFound from './components/NotFound';
import Movie from './components/Movie';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path="movie" element={<Movie />} />
          </Route>
          <Route path="details/:id" element={<MovieDetails />} />
          <Route path="wishlist" element={<WhishList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;