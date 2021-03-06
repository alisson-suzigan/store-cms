import React from 'react';
import { Link } from 'gatsby';
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
  const { title, value, gallery, slug } = data;
  const image = gallery[0].childImageSharp.fixed.src;

  const convertValueToCurrency = (value: number): string => {
    const [ints, cents = ''] = value.toString().split('.');
    return `R$ ${ints},${cents.padEnd(2, '0')}`;
  };

  return (
    <li>
      <StyledCard>
        <CardActionArea title={`${title}`}>
          <StyledLink to={slug}>
            <StyledCardMedia image={image} title={title} />
            <StyledCardContent>
              <StyledTitle variant="h3">{title}</StyledTitle>
              <StyledPrice color="primary">{value ? convertValueToCurrency(value) : 'Indefinido *'}</StyledPrice>
            </StyledCardContent>
          </StyledLink>
        </CardActionArea>
      </StyledCard>
    </li>
  );
};

const imageSize = 250;

const StyledCard = styled(Card)`
  width: ${imageSize}px;
  margin: ${theme.spacing()}px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: ${imageSize}px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;

const StyledCardContent = styled(CardContent)`
  height: 100px;
`;

const StyledTitle = styled(Typography)`
  font-size: 1rem;
  min-height: 38px;
  line-height: 1.2;
`;

const StyledPrice = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default ShelfItem;
