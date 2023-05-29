// index.js

const { ApolloClient, InMemoryCache, gql } = require("@apollo/client");

// Apollo Client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // GraphQL endpoint
  cache: new InMemoryCache(),
});

// GraphQL query
const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
    }
  }
`;

// Fetching data using Apollo Client
client
  .query({ query: GET_POSTS })
  .then((response) => {
    console.log(response.data.posts);
    // Update the UI with the received blog posts
  })
  .catch((error) => console.error(error));
