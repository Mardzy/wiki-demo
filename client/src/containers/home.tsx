import * as React from 'react';

import { useFetchWikiData } from "../hooks/wiki-data/fetch-wiki-data";

import { SectionList } from "../components/section";
import { CategoryList } from "../components/category";
import TextBox from "../components/inputs/text-box";
import {useState} from "react";

const Home: React.FC = () => {
  const [value, setValue] = useState("")
  const wikiData = useFetchWikiData(value);

  let timeout: number | null = null;

  const handleChange = (value: string) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = window.setTimeout(() => setValue(value), 1500)
  }

  return (
    <div>
      <TextBox handleChange={handleChange}/>
      {
        wikiData &&
        <>
          <h1>{wikiData?.title}</h1>
          <SectionList sections={wikiData?.sections} />
          <CategoryList categories={wikiData?.categories} />
        </>
      }
    </div>
  );
}

export default Home;
