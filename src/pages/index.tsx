import React from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button variant="contained" color="primary">
      test
    </Button>
    <Link to="/page-2/">Go to page 2</Link>
  </>
);

export default IndexPage;
