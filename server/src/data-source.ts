import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class WikipediaAPI extends  RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://en.wikipedia.org/w/api.php';
  }

  /**
   * Fetches json data for Wikipedia page from string input
   * @param {String} title
   */
  async fetchItem (title: String) {
    const params = {
      action: "parse",
      format: "json",
      formatversion: "2",
      page: title,
      prop: "categories|sections"
    };

    const { parse } = await this.get('/', params);

    return parse;
  }
}

export const dataSources = () => ({ wikipediaAPI: new WikipediaAPI() });
