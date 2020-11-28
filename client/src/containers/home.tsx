import * as React from 'react';

import { useFetchWikiData } from "../hooks/wiki-data/fetch-wiki-data";

const Home: React.FC = () => {
  const wikiData = useFetchWikiData("hockey");

  return (
    //title
    //table of contents
    //sections
    <div>
      {wikiData}
    </div>
  );
}

export default Home;
