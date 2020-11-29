import _ from 'lodash';
import * as React from 'react';
import styled from 'styled-components';

import { Category } from '../../types/Category';

type CategoryListProps = {
  categories: Category[] | undefined
}

const CategoriesContainer = styled.div`
  margin-top: 15px;
`

const CategoryListItem = styled.div`
  margin-left: 10px;
`;

/**
 *
 * @param {Category[]} categories
 * @constructor
 */
const CategoryList: React.FC<CategoryListProps> = ({ categories }: CategoryListProps) => {

  return (
    <CategoriesContainer>
      <h3>Categories</h3>
      {categories && categories.map(({ category, hidden }) =>
          !hidden && <CategoryListItem key={category}>{_.startCase(category)}</CategoryListItem>
      )}
    </CategoriesContainer>
  );
};

export default CategoryList;
