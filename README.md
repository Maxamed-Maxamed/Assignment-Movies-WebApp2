# Assignment-Movies-WebApp2
Name: Maxamed Maxamed. 
student no: 20088349

## Features. 
A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)

1. /tmdb/movie/:id: Get movie by id
2. /tmdb/movies/:movies/upcoming
3. /tmdb/movies/:movies/popular movies
3. /tmdb/movies/:movies/popular actors
4. /tmdb/movies/:movies/search
5. /tmdb/movies/:movies/genre/:genre
6. /tmdb/movies/:movies/details/:id
7. /tmdb/movies/:movies/reviews/:id

- **Password Validation in User Registration**: Implemented password validation in the user registration feature. Passwords must meet the following criteria:
  - Minimum length: 8 characters.
  - At least one uppercase letter.
  - At least one lowercase letter.
  - At least one digit.
  - At least one special character.

  - **User Authentication**: Implemented a user authentication system to allow users to create accounts, log in, and to see the movies including trending, upcoming etc.


## Packages used 
1. express : It is a minimal and flexible Node.js web application framework that provides a robust set of features for building single and multi-page applications. 
2. bcrypt : It is a password hashing function that takes a password and returns a hash.
3. dotenv : It is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
4. jsonwebtoken : It is an implementation of JSON Web Tokens.
5. mongoose : It is a MongoDB object modeling tool designed to work in an asynchronous environment.


## Setup requirements.
To run the app locally after cloning the repo, follow these steps:
1. Install dependencies using `npm install`.
2. Set up a TMDB API key and update the configuration file with the key.
3. Ensure MongoDB is running.
4. Set up a MongoDB database and update the configuration file with the connection details.
5. Run the application using `npm run dev`.

The `npm run dev` command will concurrently start both the React app and the MongoDB database, making the development environment ready for testing.

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

______________________
NODEENV=development
PORT=***
HOST=***
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design

Give an overview of your web API design, perhaps similar to the following:

- `/api/movies` | **GET** | Gets a list of all movies.
- `/api/movies/upcoming` | **GET** | Retrieves a list of upcoming movies.
- `/api/movies/trending` | **GET** | Fetches a list of trending movies.
- `/api/movies/popular` | **GET** | Gets a list of popular movies.
- `/api/movies/{movieid}` | **GET** | Retrieves details for a specific movie.
- `/api/movies/search?q={query}` | **GET** | Searches for movies based on the provided query.
- `/api/movies/latest` | **GET** | Gets information about the latest movies.

- `/api/movies/{movieid}/reviews` | **POST** | Creates a new review for a movie.
- `/api/movies/{movieid}/reviews/{reviewid}` | **PUT** | Updates an existing review.
- `/api/movies/{movieid}/reviews/{reviewid}` | **DELETE** | Deletes an existing review.
- `/api/movies` | **POST** | Adds a new movie to the database.
- `/api/movies/{movieid}` | **PUT** | Updates details for a specific movie.
- `/api/movies/{movieid}` | **DELETE** | Deletes a specific movie from the database.
- `/api/users` | **POST** | Creates a new user.
- `/api/users/login` | **POST** | Logs in a user.
- `/api/users/logout` | **POST** | Logs out a user.
- `/api/users/me` | **GET** | Retrieves details for the logged in user.
- `/api/users/me/reviews` | **GET** | Retrieves a list of reviews for the logged in user.
- `/api/users/me/reviews/{reviewid}` | **GET** | Retrieves details for a specific review for the logged in user.
- `/api/users/me/reviews/{reviewid}` | **PUT** | Updates an existing review for the logged in user.
## Testing Plan
Describe how you plan on testing each requirement above. Be as detailed as possible so that anyone can understand exactly what needs to be done to test the requirement.
**Test Case ID** 1 - /GET Movies (all)
**Test Case ID** 2 - /GET Movies (upcoming)
**Test Case ID** 3 - /GET Movies (trending)
**Test Case ID** 4 - /GET Movies (popular)
**Test Case ID** 5 - /GET Movie Details
**Test Case ID** 6 - /GET Movies (search)
**Test Case ID** 7 - /GET Movies (latest)
**Test Case ID** 8 - /POST Review
**Test Case ID** 9 - /PUT Review
**Test Case ID** 10 - /DELETE Review
**Test Case ID** 11 - /POST Movie
**Test Case ID** 12 - /PUT Movie
**Test Case ID** 13 - /DELETE Movie

## Security and Authentication
Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.
The security measures implemented are as follows:
- **JWT-based Authentication**: Implemented JSON Web Token (JWT) authentication for secure user authentication.
- **Protected Routes**: Routes such as `/api/movies/{movieid}/reviews` are protected and require authentication.



## Error Handling
The error handling strategy should be implemented as follows:
For server errors (e.g., 500s), return a JSON object with a `status`, `message`, and optionally
a `data` property.
For client errors (e.g., 404s), simply return a JSON object with a `status` and `message`.
For all other errors, simply return a JSON object with a `status` and `message`. 

In both cases, include a stack trace if the environment variable NODE_ENV is set to "development".
json
{
    "status": 500,
    "message": "Internal Server Error",
    "data": {
        "stack": "..."
        }
        }
        For client errors (e.g., 404s), simply return a JSON object with a `status` and `message`.
        json
        {
            "status": 404,
            "message": "Not Found"
            }
            For all other errors, simply return a JSON object with a `status` and `message`. 





## Integrating with React App
Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.
- **Enhanced User Registration**: Integrated user registration in the React app.
- **Password Validation in React App**: Integrated password validation in the React app during user registration.
- **Enhanced User Authentication**: Leveraged JWT-based authentication for improved security.
- **Enhanced Error Handling**: Implemented error handling for all errors.
- **Enhanced Routing**: Implemented routing for all pages.
- **Enhanced Styling**: Implemented styling for all pages login and signup.
- **Enhanced Search Functionality**: Implemented search functionality for all pages.
- **Enhanced Pagination**: Implemented pagination for all pages.
- **Enhanced Movie Details**: Implemented movie details for all pages.
- **Enhanced Movie Reviews**: Implemented movie reviews for all pages.
- **Enhanced Movie Upcoming**: Implemented movie upcoming for all pages.
- **Enhanced Movie Trending**: Implemented movie trending for all pages.
- **Enhanced Movie Popular Actors**: Implemented movie popular actors for all pages.
- **Enhanced Movie Search**: Implemented movie search for all pages.
- **Enhanced Movie Popular Movies**: Implemented movie popular movies for all pages.


## Independent learning (if relevant)
During the development of this project, I independently researched and adopted the following styles components:
- **Styled Components for Styling**: Utilized Styled Components to create modular and maintainable styles for the components.
References:
- Styled Components Documentation: [https://styled-components.com/docs](https://styled-components.com/docs)
