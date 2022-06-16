import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
  
`;

export const ADD_USER = gql`
  mutation($username: String!, $email: String!, $password: String!)  {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }  
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookFields: bookInput!)  {
    saveBook(bookFields: $bookFields) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  } 
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!)  {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      password
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
