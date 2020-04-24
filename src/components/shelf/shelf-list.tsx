import React from 'react';
import styled from 'styled-components';
import ShelfItem from './shelf-item';
import { ProductMarkdownRemark } from './type';

const ShelfList = ({ data }: ProductMarkdownRemark): JSX.Element => {
  const { nodes } = data.allMarkdownRemark;

  return (
    <StyledShelfList>
      {nodes.map(({ frontmatter }, idx) => (
        <ShelfItem key={idx} data={frontmatter} />
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
