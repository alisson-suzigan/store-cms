import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';

const ShelfItem = (): JSX.Element => {
  return (
    <li>
      <StyledCard>
        <CardActionArea>
          <StyledCardMedia image="https://i.picsum.photos/id/95/400/400.jpg" title="Contemplative Reptile" />
          <StyledCardContent>
            <Typography component="h3" variant="h6">
              Lizard
            </Typography>
            <Typography component="strong" variant="h6">
              R$ 35,20
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
