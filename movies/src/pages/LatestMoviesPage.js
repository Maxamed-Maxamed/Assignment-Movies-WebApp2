import React from "react";
import { getLatestMovies } from "../api/tmdb-api"; // Update the import statement
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
const LatestMoviesPage = () => {
    const { data: movie, error, isLoading, isError } = useQuery('latest', getLatestMovies);

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <h1>{error.message}</h1>;
    }

    // If API is returning a single movie, we need to create an array with just that one movie
    const movies = movie ? [movie] : [];


    return (
      <PageTemplate
        title="Latest Movie" // Changed to singular as it's likely only one movie
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />;
        }}
      />
    );
  };

  export default LatestMoviesPage;