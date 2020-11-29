import * as React from 'react';
import { useDebounce } from 'use-debounce';
import { Card, Input, Layout, Spin } from 'antd';
import styled from 'styled-components';

import { useFetchWikiData } from "../hooks";

import { SectionList } from "../components/section";
import { CategoryList } from "../components/category";

import { WikiDataResponse } from "../types";

const { Header } = Layout;

const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

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
      {loading && <StyledSpinnerContainer><Spin size="large" tip="Loading..." /></StyledSpinnerContainer>}
      {
        data && data.fetchWikiData &&
        <Card title={<h2>{data.fetchWikiData.title}</h2>}>
          <SectionList sections={data.fetchWikiData.sections} />
          <CategoryList categories={data.fetchWikiData.categories} />
        </Card>
      }
    </div>
  );
}

export default Home;
