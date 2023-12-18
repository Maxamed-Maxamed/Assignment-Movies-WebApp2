import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterPeopleCard";
import Grid from "@mui/material/Grid";
import PeopleList from "../peopleList";

function PeopleListPageTemplate({ people, title, action }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedPeople = people
    .filter((p) => {
      return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
          />
        </Grid>
        <PeopleList action={action} people={displayedPeople}></PeopleList>
      </Grid>
    </Grid>
  );
}
export default PeopleListPageTemplate;