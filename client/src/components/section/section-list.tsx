import * as React from 'react';

import { Section } from '../../../../common/types/Section';

import { SectionItem } from "./index";

type SectionListProps = {
  sections: Section[]
}

/**
 *
 * @param {Section[]} categories
 * @constructor
 */
const SectionList: React.FC<SectionListProps> = ({ sections }: SectionListProps) => {

  return (
    <div>
      {sections.map(section =>
        <SectionItem key={section.index} section={section} />
      )}
    </div>
  );
};

export default SectionList;
