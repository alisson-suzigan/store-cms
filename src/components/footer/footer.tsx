import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import theme from '../../theme';

const Footer = (): JSX.Element => {
  const phone = '11 98444 1155';

  return (
    <StyleFooter>
      <Typography variant="caption">© {new Date().getFullYear()} | Store CMS</Typography>
      <Button variant="contained" color="primary" size="small" href={`tel: ${phone}`} startIcon={<PhoneIcon />}>
        {phone}
      </Button>
    </StyleFooter>
  );
};

const StyleFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing()}px;
  background: #ddd;
`;

export default Footer;
