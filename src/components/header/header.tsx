import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import theme from '../../theme';

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props): JSX.Element => (
  <AppBar position="static">
    <Toolbar>
      <ShoppingBasketIcon spacing="20px" />
      <Typography component="h1" variant="h5">
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Typography>
    </Toolbar>
  </AppBar>
);

const StyledLink = styled(Link)`
  margin: 0 ${theme.spacing()}px;
  color: inherit;
  text-decoration: none;
`;

export default Header;
