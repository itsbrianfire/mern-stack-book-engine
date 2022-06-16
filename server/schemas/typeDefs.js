const { gql } = require('apollo-server-express');

// user-routes.js from 'Routes' [User.js models] in GraphQL format
// ! = required
// 
const typeDefs = gql`
  
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: String
    description: String!
    title: String!
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookFields: bookInput): User
    removeBook(bookId: ID!): User
  }

  input bookInput {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

`;

module.exports = typeDefs;
