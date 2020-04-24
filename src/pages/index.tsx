import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Shelf from '../components/shelf/shelf';
import { ProductMarkdownRemark } from '../components/shelf/type';

const IndexPage = ({ data }: ProductMarkdownRemark): JSX.Element => {
  return (
    <>
      <SEO title="Home" />
      <Shelf data={data} />
      <Link to="/page-2/">Go to page 2</Link>
    </>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      nodes {
        frontmatter {
          title
          layout
          image
          value
        }
      }
    }
  }
`;

export default IndexPage;
