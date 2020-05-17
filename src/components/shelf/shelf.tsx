import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ShelfList from './shelf-list';
import { ShelfData } from './type';
import theme from '../../theme';

interface Props {
  data: ShelfData;
}

const Shelf = ({ data }: Props): JSX.Element => (
  <StyledSection>
    <StyledTitle variant="h2">
      <StyledIcon>{data.icon || 'star'}</StyledIcon>
      <Typography component="span" variant="h5">
        {data.title}
      </Typography>
    </StyledTitle>
    <ShelfList data={data.products} />
  </StyledSection>
);

const StyledSection = styled.section`
  margin-bottom: ${theme.spacing(3)}px;
`;

const StyledTitle = styled(Typography)`
  display: flex;
  align-items: center;
  margin: 0 ${theme.spacing(2)}px;
`;

const StyledIcon = styled(Icon)`
  &.material-icons {
    margin-right: ${theme.spacing()}px;
    font-size: 1.8rem;
  }
`;

export default Shelf;
