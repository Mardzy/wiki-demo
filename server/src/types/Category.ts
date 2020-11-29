import { gql } from 'apollo-server';

export const Category = gql`
  type Category {
    category: String
    hidden: Boolean
    sortkey: String
  }
`;
