import React, { useState } from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '@mui/material/Pagination'; // Import the Pagination component

const PopularMoviesPage = () => {
  const [page, setPage] = useState(1); // State for current page
  const { data, error, isLoading, isError } = useQuery(['popular', page], () => getPopularMovies(page), {
    keepPreviousData: true, // Keep previous data visible while new data is being loaded
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;
  const totalPages = data.total_pages; // Total page count from the API

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value); // Set new page number
  };

  return (
    <>
      <PageTemplate
        title="Popular Movies"
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
        showFirstButton
        showLastButton
        style={{ paddingBottom: '20px', paddingTop: '20px', justifyContent: 'center', display: 'flex' }}
      />
    </>
  );
};

export default PopularMoviesPage;