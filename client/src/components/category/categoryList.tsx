import * as React from 'react';

import { Category } from '../../types/Category';

type CategoryListProps = {
  categories: Category[] | undefined
}

/**
 *
 * @param {Category[]} categories
 * @constructor
 */
const CategoryList: React.FC<CategoryListProps> = ({ categories }: CategoryListProps) => {

  return (
    <div>
      <h3>Categories</h3>
      {categories && categories.map(({ category, hidden, sortkey }) =>
        <div key={category}>{category}</div>
      )}
    </div>
  );
};

export default CategoryList;
