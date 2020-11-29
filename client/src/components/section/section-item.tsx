import * as React from 'react';

import { Section } from '../../types/Section';

type SectionProps = {
  section: Section
}

const SectionItem: React.FC<SectionProps> = ({ section }: SectionProps) => {
  // console.log("section: ", section);
  return (
    <div>
      <div><span>{section.number}. </span>{section.anchor}</div>
    </div>
  );
};

export default SectionItem;
