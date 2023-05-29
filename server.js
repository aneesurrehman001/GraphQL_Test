// server.js

const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

// Sample data
const posts = [
  { id: "1", title: "First Post", content: "This is the first blog post." },
  { id: "2", title: "Second Post", content: "This is the second blog post." },
];

// GraphQL schema
const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    posts: [Post!]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    posts: () => posts,
  },
};

// Apollo Server setup
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  // Start the server
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer().catch((error) => console.error(error));
