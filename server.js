import { ApolloServer, gql } from 'apollo-server';
import { books } from './db.js'

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    genre: String!
    year: Int!
    rating: Float!
    price: Int!
    currency: String!
    image: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
