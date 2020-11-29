import * as React from 'react';

import { Section } from '../../types/Section';

import { SectionItem } from "./index";

type SectionListProps = {
  sections: Section[] | undefined
}

/**
 *
 * @param {Section[]} categories
 * @constructor
 */
const SectionList: React.FC<SectionListProps> = ({ sections }: SectionListProps) => {

  return (
    <div>
      <h3>Table of Contents</h3>
      {sections && sections.map(section =>
        <SectionItem key={section.index} section={section} />
      )}
    </div>
  );
};

export default SectionList;
