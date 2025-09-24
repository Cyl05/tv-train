import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';

mongoose.connect("mongodb://127.0.0.1:27017/graphql-demo");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongB connection error:"));
db.once("open", () => console.log("Connected to Mongo"));

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
});

const Book = mongoose.model("Book", bookSchema);

const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
  }
`;

const resolvers = {
    Query: {
        books: async () => await Book.find(),
    },
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

await server.start();
app.use("/graphql", cors(), express.json());

app.listen(4000, () => {
    console.log("GraphQL server running at http://localhost:4000/graphql");
});