import * as React from 'react';

import { Category } from '../../../../common/types/Category';

import { CategoryItem } from "./index";

type CategoryListProps = {
  categories: Category[]
}

/**
 *
 * @param {Category[]} categories
 * @constructor
 */
const CategoryList: React.FC<CategoryListProps> = ({ categories }: CategoryListProps) => {

  return (
    <div>
      {categories.map(({ category, hidden, sortkey }) =>
        !hidden
        ? <CategoryItem key={category} category={{ category, hidden, sortkey }} />
        : null)}
    </div>
  );
};

export default CategoryList;
