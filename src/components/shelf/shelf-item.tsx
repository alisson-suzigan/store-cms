import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ShelfProduct } from './type';
import theme from '../../theme';

interface Props {
  data: ShelfProduct;
}

const ShelfItem = ({ data }: Props): JSX.Element => {
  const { title, value, image } = data;

  const convertValueToCurrency = (value: number): string => {
    const [ints, cents = ''] = value.toString().split('.');
    return `R$ ${ints},${cents.padEnd(2, '0')}`;
  };

  return (
    <li>
      <StyledCard>
        <CardActionArea title={`${title}`}>
          <StyledCardMedia image={image} title={title} />
          <StyledCardContent>
            <Typography component="h3" variant="h6">
              {title}
            </Typography>
            <Typography component="strong" variant="h6">
              {value ? convertValueToCurrency(value) : 'Indefinido *'}
            </Typography>
          </StyledCardContent>
        </CardActionArea>
      </StyledCard>
    </li>
  );
};

const imageSize = 250;

const StyledCard = styled(Card)`
  width: ${imageSize}px;
  margin: ${theme.spacing(2)}px ${theme.spacing()}px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: ${imageSize}px;
`;

const StyledCardContent = styled(CardContent)`
  height: 100px;
`;

export default ShelfItem;
