import * as React from 'react';

import { Category } from '../../../../common/types/Category';

type CategoryProps = {
  category: Category
}

const CategoryItem: React.FC<CategoryProps> = ({ category }: CategoryProps) => {
  console.log("category: ", category);
  return <div>category</div>
};

export default CategoryItem;
