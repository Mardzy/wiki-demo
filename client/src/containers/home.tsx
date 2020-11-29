import * as React from 'react';
import { Layout, Spin } from 'antd';

import { useFetchWikiData } from "../hooks/wikiData/fetch-wiki-data";

import { SectionList } from "../components/section";
import { CategoryList } from "../components/category";
import TextBox from "../components/inputs/text-box";
import { WikiData, WikiDataResponse } from "../types";


const { Header, Content } = Layout;

const Home: React.FC = () => {
  const [value, setValue] = React.useState("");
  const { data, loading }: WikiDataResponse = useFetchWikiData(value);
  console.log("data: ", data);

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
      {loading && <Spin tip="Loading..." />}
      {
        data && data.fetchWikiData &&
        <Content>
          <h1>{data.fetchWikiData.title}</h1>
          <SectionList sections={data.fetchWikiData.sections} />
          <CategoryList categories={data.fetchWikiData.categories} />
        </Content>
      }
    </div>
  );
}

export default Home;
