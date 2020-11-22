import { gql, IResolvers, makeExecutableSchema } from 'apollo-server';

const typeDefs = gql`
  type Category {
    sortkey: String
    category: String
    hidden: Boolean
  }
  
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
  
  type WikiResponse {
    title: String
    categories: [Category!]
    sections: [Section!]
  }
  
  type Query {
    fetchItem(title: String): WikiResponse
  }
`;

const resolvers: IResolvers = {
  Query: {
    fetchItem(_, { title }, { dataSources }) {
      return dataSources.wikipediaAPI.fetchItem(title)
    }
  }
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs
})
