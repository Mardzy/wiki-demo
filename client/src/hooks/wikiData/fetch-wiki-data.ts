import { gql, QueryResult, useQuery } from '@apollo/client'

import { Data, WikiDataResponse } from "../../types";

const FETCH_WIKI_DATA = gql`
  query FetchWikiData($title: String!) {
    fetchWikiData(title: $title) {
      categories {
        sortkey
        category
        hidden
      }
      sections {
        toclevel
        level
        line
        number
        index
        fromtitle
        byteoffset
        anchor
      }
      title
    }
  }
`
/**
 *
 * @param {string} title
 */
export const useFetchWikiData = (title: string): WikiDataResponse => {
  const options = { variables: { title } };

  const { data, loading, error }: QueryResult<Data, { title: string; }> = useQuery(FETCH_WIKI_DATA, options);

  if(error) {
    console.log("Error: ", error);
  }

  return { data, loading }
}
