import React from 'react';
import { useQuery, gql } from '@apollo/client';

const WIKI_ARTICLE = gql`
  query {
    fetchWikiData(title: "Black") {
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
export function FetchWikiArticle() {
  const { data, error, loading } = useQuery(WIKI_ARTICLE);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { categories, sections, title } = data.fetchWikiData;
  console.log("data", data);

  return <div>{title}</div>;
}
