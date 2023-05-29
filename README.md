# Project Setup

To set up the project, follow these steps:

1. Make a project directory, then navigate to the project directory in your terminal.

2. Run the following commands to set up the project dependencies:

# Running the Server

To run the server, follow these steps:

1. Create two files in the project directory named `index.js` and `server.js`.

2. Copy the code provided for each file.

3. Open a separate terminal for each of the following commands and make sure you are in the project directory:

- Terminal 1:

  `node server.js`

- Terminal 2:

  `node index.js`

4. Open a web browser and visit http://localhost:4000/graphql. You should see the GraphQL Playground, indicating that the server is running successfully.

# Querying Data

To query data from the server, follow these steps:

1. In the GraphQL Playground, located at http://localhost:4000/graphql, enter the following query:

`query { posts { id title content } }`

2. Press the play button or hit `Ctrl + Enter` to execute the query.

3. The server will respond with the requested data in the response panel.
