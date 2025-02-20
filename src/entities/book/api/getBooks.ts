import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query {
    books {
      id
      title
      author
      genre
      year
      rating
      price
      currency
      image
    }
  }
`;