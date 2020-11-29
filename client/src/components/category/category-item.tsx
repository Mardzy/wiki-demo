import * as React from 'react';

import { Category } from '../../types/Category';

type CategoryProps = {
  category: Category
}

const CategoryItem: React.FC<CategoryProps> = ({ category }: CategoryProps) => {
  return (
    <div>{category.category}</div>
  );
};

export default CategoryItem;
