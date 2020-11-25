import { IResolvers } from 'apollo-server';

export const wikiResponse: IResolvers = {
  Query: {
    fetchCategoriesAndSections(_, {title}, {dataSources}) {
      return dataSources.wikipediaAPI.fetchCategoriesAndSections(title)
    }
  }
}
