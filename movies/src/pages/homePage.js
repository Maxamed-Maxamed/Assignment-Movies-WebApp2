import React, { useState } from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '@mui/material/Pagination'; // Import the Pagination component
import PageTemplate from '../components/templateMovieListPage';
import { getMovies } from "../api/tmdb-api";
// Assuming getMovies is defined correctly to handle the page parameter


const HomePage = () => {
  const [page, setPage] = useState(1); // Start with page 1

  const { data, error, isLoading, isError } = useQuery(['discover', page], () => getMovies(page), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Handle the page change action
  const handlePageChange = (event, value) => {
    setPage(value); // Set the new page number
  };

 
    const totalPages = data.total_pages;

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={data.results}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
      {/* Pagination component with Material-UI */}
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

export default HomePage;
