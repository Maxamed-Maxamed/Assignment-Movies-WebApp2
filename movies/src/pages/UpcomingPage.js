import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PlaylistAddIcon from "../components/cardIcons/playListAdd";
import Pagination from '@mui/material/Pagination'; // Import the Pagination component

const UpcomingPage = () => {
  const [page, setPage] = useState(1); // State to track current page

  // Fetch upcoming movies with the current page as a dependency
  const { data, error, isLoading, isError } = useQuery(['upcoming', page], () => getUpcomingMovies(page), {
    keepPreviousData: true, // Use this option to keep displaying the current data during loading of new page data
  });

  // Handle the page change
  const handlePageChange = (event, value) => {
    setPage(value); // Set the page to the new value
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Extract the movies and total page count from the data
  const movies = data.results;
  const totalPages = data.total_pages;

  return (
    <>
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => <PlaylistAddIcon movie={movie} />}
      />
      {/* Pagination component */}
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

export default UpcomingPage;

