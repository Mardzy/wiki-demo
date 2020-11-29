import * as React from 'react';
import { useDebounce } from 'use-debounce';
import {Input, Layout, Spin} from 'antd';

import { useFetchWikiData } from "../hooks/wikiData/fetch-wiki-data";

import { SectionList } from "../components/section";
import { CategoryList } from "../components/category";

import { WikiDataResponse } from "../types";

const { Header, Content } = Layout;

const Home: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [delayedTitle]  = useDebounce<string>(title, 1500);
  const { data, loading }: WikiDataResponse = useFetchWikiData(delayedTitle);

  return (
    <div>
      <Header>
        <Input
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
          }
          placeholder="Enter title to search"
        />
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
