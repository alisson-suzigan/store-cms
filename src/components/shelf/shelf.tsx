import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import ShelfList from './shelf-list';
import theme from '../../theme';

const Shelf = (): JSX.Element => {
  return (
    <StyledSection>
      <StyledTitle variant="h2">
        <StarIcon />
        <Typography component="span" variant="h5">
          Section name
        </Typography>
      </StyledTitle>
      <ShelfList />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin-bottom: ${theme.spacing(2)}px;
`;

const StyledTitle = styled(Typography)`
  display: flex;
  align-items: center;
`;

export default Shelf;
