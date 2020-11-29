import _ from 'lodash'
import * as React from 'react';
import styled from 'styled-components'

import { Section } from '../../types/Section';

type SectionListProps = {
  sections: Section[] | undefined
}

type SectionListItemProps = {
  key: string
  dots: number
}

const SectionListItem = styled.div<SectionListItemProps>`
  margin-left: ${(props) => ((props.dots * 10) + 10) + "px;"}
`;

/**
 *
 * @param {Section[]} categories
 * @constructor
 */
const SectionList: React.FC<SectionListProps> = ({ sections }: SectionListProps) => {

  return (
    <div>
      <h3>Table of Contents</h3>
      {sections && sections.map(({anchor, index, number}) => {
          const sumOfDotsInSectionNumber: number = (number.match(/\./g) || []).length;

          return <SectionListItem dots={sumOfDotsInSectionNumber} key={index}><span>{number}. </span>{_.startCase(anchor)}</SectionListItem>
        }
      )}
    </div>
  );
};

export default SectionList;
