import _ from 'lodash';
import * as React from 'react';
import styled from 'styled-components';

import { Category } from '../../types';

type CategoryListProps = {
  categories: Category[] | undefined | null
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
  const nonHiddenCategories = categories?.filter(category => !category.hidden ? category : null);

  return !!nonHiddenCategories?.length ?
    <CategoriesContainer>
      <h3>Categories</h3>
      {nonHiddenCategories && nonHiddenCategories.map(({category, hidden}) =>
        <CategoryListItem key={category}>{_.startCase(category)}</CategoryListItem>
      )}
    </CategoriesContainer> : null;
}

export default CategoryList;
