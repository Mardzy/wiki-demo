import { gql } from 'apollo-server';

export const Section = gql`
 type Section {
  toclevel: Int
  level: String
  line: String
  number: String
  index: String
  fromtitle: String
  byteoffset: Int
  anchor: String
 }
`;
