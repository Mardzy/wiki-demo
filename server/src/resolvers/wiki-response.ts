import { IResolvers } from 'apollo-server';

export const wikiResponse: IResolvers = {
  Query: {
    fetchWikiData(_, {title}, {dataSources}) {
      return dataSources.wikipediaAPI.fetchWikiData(title)
    }
  }
}
