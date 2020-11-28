import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export default class WikipediaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://en.wikipedia.org/w/api.php';
  }

  /**
   * Fetches json data for Wikipedia page from string input
   * @param {String} title
   */
  async fetchWikiData (title: string) {
    const params = {
      action: "parse",
      format: "json",
      formatversion: "2",
      page: title,
      prop: "categories|sections" // for more data this "prop" can be omitted for the default data set or have other properties added to add to data call
    };

    const { parse } = await this.get('/', params);

    return parse;
  }
}
