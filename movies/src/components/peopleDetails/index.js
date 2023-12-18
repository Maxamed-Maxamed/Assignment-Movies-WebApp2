import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CakeIcon from '@mui/icons-material/Cake';
import TheatersIcon from '@mui/icons-material/Theaters';

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};


const gridStyle = {
    display: 'grid',
    placeItems: 'center',
    minHeight: '10vh'
  };
  

const PeopleDetails = ({ person }) => {  
    function age(person) {
        if (!person.birthday) {
            return null;
        }
    
        const today = new Date();
        const birthDate = new Date(person.birthday);
        let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
        const birthdayPassedThisYear = (today.getUTCMonth() > birthDate.getUTCMonth()) || 
                                       (today.getUTCMonth() === birthDate.getUTCMonth() && today.getUTCDate() >= birthDate.getUTCDate());
    
        if (!birthdayPassedThisYear) {
            age--;
        }
    
        return age;
    }

    return (
        <>
        <div style={gridStyle}>

       
            <Typography variant="h5" component="h3">
                Overview
                </Typography>
               
                
            <Typography variant="h6" component="p">
                {person.name}
                {person.PeopleDetails}
            </Typography>
            
        </div>

               

            <Paper component="ul" sx={{...root}}>
                <Chip  label={`Popularity: ${Math.round(person.popularity)}`} />
            </Paper>
            <Paper component="ul" sx={{...root}}>
                <li>
                    
                    <a href={`https://www.imdb.com/name/${person.imdb_id}/?ref_=nv_sr_srsg_0`} target="_blank" rel="noopener noreferrer">
                       
                       
                        <Chip icon={<TheatersIcon />} label="IMDB Website" />
                    </a>




                    <Chip icon={<CakeIcon />} label={`${person.birthday}`} color="primary" />
                    {person.birthday && <Chip label={`Age: ${age(person)}`} color="primary"/>}
                </li>
            </Paper>
        </>
    );
};

export default PeopleDetails;
