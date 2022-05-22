# Cinch

Cinch is a full stack application that allows business to have control of thier business by providing a simple way of keeping track of all your customers and their jobs. Logged in users can make new customers to track for your business as well as edit and delete. A simple way of keeping your customers in check while the user focus on how to increase the revenue of thier business. Once customers are created a user can make jobs to the corresponding customer and not have to worry about remembering the information of the job like the type of service and for when the job is schedule.

## Application Architecture
Cinch was created on React Frontend and Flask backend, using PostgreSQL as a database.Flask was used to allow the backend to communicate with PostgreSQL.


## Frontend Overview
Cinch had a mix of application logic spread across the frontend and backend.

## Frontend Technologies Used

### React
Cinch is a React application.


### Redux
Cinch took advantage of Redux store. All state was handled with Redux using thunks to make API calls to the backend server.

### Google Map API
The Google Map Api was used to render a google map in customers detail page allowing the user to have a quick way of locating a customer. As well the Street view was used when creating a new job allowing the user to locate the house.

## Backend Overview
Cinch uses Flask with a PostgreSQL database, with SQLAlchemy to allow the backend interact with Postgresql

## Backend Technologies Used

### Flask python
Flask was the choice for cinch's backend routes. Flask is a very powerful tool that make the workflow from the frontend to the backend quick and easy to develop.

### PostgreSQL
PostgreSQL was the choice for the database because it is easy to work with.

### SQLAlchemy
SQLAchemy was uses to connect the backend with Postgres. SQLAlcegemy made it really easy to construct the database models/tables as well manipulate/alter the data in the tables. Querying was quick and straight to the point.

### Google Geocoder API
The Google Geocoder API was used when a new customer or a customer was edited to change their address it took thier address and it returned the latitude and longitude coordinates to be stored in the database. Which was helpful as google map api takes in the latitude and longitude coordinates.

## Conclusion and Cinch's Future
I am really happy with cinch so far and I have many plans for it. I could definitly go back and make sections of code more efficient. Some features I would like to implament are allowing users to make services for thier business as right now it is a fixed list. After implamenting the ability to create services, the impleamention of scheduling to certain worker time would follow. The addition of making invoices for the customers to bill them as well keep track of the montly revenue of a business.


