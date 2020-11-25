import { gql } from 'apollo-server';

/**
 * All queries to be added within this type
 */
export const Query = gql`
  type Query {
    fetchCategoriesAndSections(title: String): WikiResponse
  }
`;
