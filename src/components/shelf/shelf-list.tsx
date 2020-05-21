import React from 'react';
import styled from 'styled-components';
import ShelfItem from './shelf-item';
import { ShelfProduct } from './type';
import theme from '../../theme';

interface Props {
  data: ShelfProduct[];
}

const ShelfList = ({ data }: Props): JSX.Element => (
  <StyledShelfList>
    {data.map(item => (
      <ShelfItem key={item.id} data={item} />
    ))}
  </StyledShelfList>
);

const StyledShelfList = styled.ul`
  display: flex;
  margin: 0 ${theme.spacing()}px;
  padding: ${theme.spacing()}px 0;
  list-style: none;
  overflow-x: auto;
`;

export default ShelfList;
