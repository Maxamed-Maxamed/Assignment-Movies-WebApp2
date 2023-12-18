import React, { useState } from "react";
import PeoplePageTemplate from '../components/templatePeopleListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPopularPeople } from "../api/tmdb-api";
import Pagination from '@mui/material/Pagination'; // Import the Pagination component
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const PopularPage = () => {
  const [page, setPage] = useState(1); // State for the current page
  const { data, error, isLoading, isError } = useQuery(['popular people', page], () => getPopularPeople(page), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }  

  const people = data.results;
  const totalPages = data.total_pages; // Get total page count from API response
  
  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value); // Set the new page number
  };

  return (
    <>
      <PeoplePageTemplate
        title="Popular Actors"
        people={people}
        // action={(person) => {
        //   // Define the action to perform for each person if necessary
        // }}

        // Add to favorites icon
        action={(person) => <AddToFavoritesIcon person={person} />}

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

export default PopularPage;