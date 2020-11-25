import { IResolvers } from 'apollo-server';

export const resolvers: IResolvers = {
  Query: {
    fetchCategoriesAndSections(_, {title}, {dataSources}) {
      return dataSources.wikipediaAPI.fetchCategoriesAndSections(title)
    }
  }
}
