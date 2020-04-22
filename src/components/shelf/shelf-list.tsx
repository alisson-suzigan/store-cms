import React from 'react';
import styled from 'styled-components';
import ShelfItem from './shelf-item';

const ShelfList = (): JSX.Element => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <StyledShelfList>
      {list.map((_, idx) => (
        <ShelfItem key={idx} />
      ))}
    </StyledShelfList>
  );
};

const StyledShelfList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-x: auto;
`;

export default ShelfList;
