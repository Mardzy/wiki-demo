import * as React from 'react';

import { Section } from '../../../../common/types/Section';

type SectionProps = {
  section: Section
}

const SectionItem: React.FC<SectionProps> = ({ section }: SectionProps) => {
  console.log("section: ", section);
  return <div>section</div>
};

export default SectionItem;
