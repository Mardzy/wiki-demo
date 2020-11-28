import * as React from 'react';
import { Layout } from 'antd';

import { useFetchWikiData } from "../hooks/wiki-data/fetch-wiki-data";

import { SectionList } from "../components/section";
import { CategoryList } from "../components/category";
import TextBox from "../components/inputs/text-box";

const { Header, Content } = Layout;

const Home: React.FC = () => {
  const [value, setValue] = React.useState("")
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
      <Header>
        <TextBox handleChange={handleChange}/>
      </Header>
      {
        wikiData &&
        <Content>
          <h1>{wikiData?.title}</h1>
          <SectionList sections={wikiData?.sections} />
          <CategoryList categories={wikiData?.categories} />
        </Content>
      }
    </div>
  );
}

export default Home;
