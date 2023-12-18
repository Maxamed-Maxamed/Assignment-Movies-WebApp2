import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRouter from './api/users';
import './db';
import defaultErrHandler from './errHandler'

import moviesRouter from './api/movies';   //import movies router
import authenticate from './authenticate';




dotenv.config();

const app = express();
const port = process.env.PORT; 


app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);
app.use(defaultErrHandler);
app.use('/api/movies', moviesRouter); //ADD THIS BEFORE THE DEFAULT ERROR HANDLER.

app.use('/api/movies',authenticate,  moviesRouter);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});