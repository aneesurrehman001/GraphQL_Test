# Project Setup

To set up the project, follow these steps:

1. Make a project directory, then navigate to the project directory in your terminal.

2. Run the following commands to set up the project dependencies:

```
  yarn init -y
  yarn add apollo-server-express express @apollo/client
  npm install graphql
  yarn add graphql
  npm install react
  yarn add react
```

Create two files in the project directory with name index.js and server.js and copy the code.

# Running the Server

To run the server, follow these steps:

1. Open a separate terminal for each of the following commands and make sure you are in the project directory:

- Terminal 1:

  `node server.js`

- Terminal 2:

  `node index.js`

2. Open a web browser and visit http://localhost:4000/graphql. You should see the GraphQL Playground, indicating that the server is running successfully.

# Querying Data

To query data from the server, follow these steps:

1. In the GraphQL Playground, located at http://localhost:4000/graphql, enter the following query:

`  query { 
    posts { 
      id 
      title
      content 
    } 
  }`

2. Press the play button or hit `Ctrl + Enter` to execute the query.

3. The server will respond with the requested data in the response panel.
