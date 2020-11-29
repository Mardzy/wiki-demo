import * as React from 'react';
import { useDebounce } from 'use-debounce';
import { Card, Input, Layout, Spin } from 'antd';
import styled from 'styled-components';

import { useFetchWikiData } from "../hooks";

import { SectionList } from "../components/section";
import { CategoryList } from "../components/category";

import { WikiDataResponse } from "../types";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  &.ant-layout-header {
    padding: 0 8%;
    .ant-input{
      width: 20%;
    }
  }
`;

const StyledSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const StyledCard = styled(Card)`
  padding: 0 8%;
`

const Home: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [delayedTitle]  = useDebounce<string>(title, 1500);
  const { data, loading }: WikiDataResponse = useFetchWikiData(delayedTitle);

  return (
    <div>
      <StyledHeader>
        <Input
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
          }
          placeholder="Enter title to search"
        />
      </StyledHeader>
      {loading && <StyledSpinnerContainer><Spin size="large" tip="Loading..." /></StyledSpinnerContainer>}
      {
        data && data.fetchWikiData &&
        <StyledCard title={<h2>{data.fetchWikiData.title}</h2>}>
          <SectionList sections={data.fetchWikiData.sections} />
          <CategoryList categories={data.fetchWikiData.categories} />
        </StyledCard>
      }
    </div>
  );
}

export default Home;
