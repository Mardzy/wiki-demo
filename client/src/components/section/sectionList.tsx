import * as React from 'react';

import { Section } from '../../types/Section';

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
        <div key={section.index}><span>{section.number}. </span>{section.anchor}</div>
      )}
    </div>
  );
};

export default SectionList;
