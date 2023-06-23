RESTful API using Node.js, MongoDB, and Express

This project implements a RESTful API using Node.js, MongoDB as the database, and Express as the web framework. The API allows you to manage student records by providing endpoints to fetch, create, update, and delete student data.

Setup
Install Node.js and MongoDB on your machine if you haven't already.

Clone this repository to your local machine:


git clone <repository-url>
Navigate to the project directory:


cd <project-directory>
Install the required dependencies:


npm install
Rename the .env.example file to .env and provide the necessary configuration values:

mv .env.example .env
Update the .env file with your MongoDB connection URI and desired server port.

Database Configuration
Connect to a MongoDB database by updating the MONGODB_URI variable in the .env file with your MongoDB connection string.

Create a new collection named "students" in your MongoDB database. The API will automatically create the collection if it doesn't exist when you start the server.

Define the required fields for the "students" collection. By default, the API expects the following fields: name (String), age (Number), grade (String). You can modify the data structure by updating the studentModel.js file.

Running the API
To start the API server, run the following command:

\
npm start
The server will start running on the specified port, and you will see a message indicating the server is listening.

API Endpoints
GET /students
Fetch all the students from the database.

Response

Status: 200 OK

Body:
[
  {
    "_id": "student-id",
    "name": "ANmol Jain",
    "age": 18,
    "grade": "A"
  },
  {
    "_id": "student-id",
    "name": "anmol",
    "age": 17,
    "grade": "B"
  },
  ...
]
GET /students/:id
Fetch a specific student by their ID from the database.

Parameters

id: The ID of the student.
Response

Status: 200 OK

Body:

{
  "_id": "student-id",
  "name": "Anmol",
  "age": 18,
  "grade": "A"
}
POST /students
Create a new student in the database.

Request Body

{
  "name": "ANmol",
  "age": 18,
  "grade": "A"
}
Response

Status: 201 Created

Body:

{
  "_id": "student-id",
  "name": "Anmol",
  "age": 18,
  "grade": "A"
}
PUT /students/:id
Update an existing student in the database.

Parameters

id: The ID of the student.
Request Body

{
  "name": "Anmol",
  "age": 19,
  "grade": "A+"
}
Response

Status: 200 OK

Body:

{
  "_id": "student-id",
  "name": "Anmol",
  "age": 19,
  "grade": "A+"
}
DELETE /students/:id
Delete a specific student by their ID from the database.

Parameters

id: The ID of the student.
Response

Status: 200 OK
