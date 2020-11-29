import WikipediaAPI from './wikipedia';

export const dataSources = () =>
  ({ wikipediaAPI: new WikipediaAPI() })

