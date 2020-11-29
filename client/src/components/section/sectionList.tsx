import _ from 'lodash'
import * as React from 'react';
import styled from 'styled-components'

import { Section } from '../../types';

type SectionListProps = {
  sections: Section[] | undefined | null
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
  return !!sections?.length ?
  (
    <div>
      <h3>Table of Contents</h3>
      {
        sections && sections
        .slice()
        .sort((a:Section, b:Section) => Number(a.number) - Number(b.number))
        .map(({anchor, index, number}: Section) =>
          <SectionListItem
            dots={(number.match(/\./g) || []).length}
            key={index}
          >
            <span>{number}. </span>
            {_.startCase(anchor)}
          </SectionListItem>)
      }
    </div>
  ): null;
};

export default SectionList;
