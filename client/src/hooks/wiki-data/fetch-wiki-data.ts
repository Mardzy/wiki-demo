import {gql, useQuery} from '@apollo/client'

import { WikiData } from "../../../../common/types";

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

export const useFetchWikiData = (title: string): WikiData | undefined => {
  const options = { variables: { title } };

  const { data } = useQuery(FETCH_WIKI_DATA, options);

  return data?.fetchWikiData;
}
