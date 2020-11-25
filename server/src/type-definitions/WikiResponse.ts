import { gql } from 'apollo-server';

export const WikiResponse = gql`
  type WikiResponse {
    title: String
    categories: [Category]
    sections: [Section]
  }
`;
