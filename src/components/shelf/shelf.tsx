import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import ShelfList from './shelf-list';
import theme from '../../theme';
import { ShelfData } from './type';

interface Props {
  data: ShelfData;
}

const Shelf = ({ data }: Props): JSX.Element => (
  <StyledSection>
    <StyledTitle variant="h2">
      <StarIcon />
      <Typography component="span" variant="h5">
        {data.title}
      </Typography>
    </StyledTitle>
    <ShelfList data={data.products} />
  </StyledSection>
);

const StyledSection = styled.section`
  margin-bottom: ${theme.spacing(2)}px;
`;

const StyledTitle = styled(Typography)`
  display: flex;
  align-items: center;
`;

export default Shelf;
