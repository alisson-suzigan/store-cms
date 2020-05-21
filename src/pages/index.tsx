import React, { ReactNode } from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Shelf from '../components/shelf/shelf';
import { DataModel, ShelfData, Category, ProductGroup, ShelfProduct } from '../components/shelf/type';

interface Props {
  data: DataModel;
}

const IndexPage = ({ data }: Props): JSX.Element => {
  const { categories, products } = data;

  const createShelfData = (categories: Category[], products: ProductGroup[]): ShelfData[] => {
    const shelfData: ShelfData[] = [];

    // TODO: refactor this code to make it more consise and readable!!
    products.forEach(product => {
      const category = categories.find(category => category.frontmatter.title === product.fieldValue);

      if (category) {
        const shelfProducts: ShelfProduct[] = product.nodes.map(item => ({
          id: item.id,
          ...item.frontmatter,
        }));

        shelfData.push({
          id: category.id,
          ...category.frontmatter,
          products: shelfProducts,
        });
      }
    });

    return shelfData;
  };

  const renderShelves = (): ReactNode => {
    const shelfData = createShelfData(categories.nodes, products.group);
    return shelfData.map((data, idx) => <Shelf key={idx} data={data} />);
  };

  return (
    <>
      <SEO title="Home" />
      {renderShelves()}
      <Link to="/page-2/">Go to page 2</Link>
    </>
  );
};

// GraphQL data model
export const query = graphql`
  {
    categories: allMarkdownRemark(filter: { frontmatter: { layout: { eq: "category" } } }) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          icon
        }
      }
    }
    products: allMarkdownRemark(sort: { fields: [frontmatter___value, frontmatter___available], order: DESC }) {
      group(field: frontmatter___categories___category) {
        totalCount
        fieldValue
        nodes {
          id
          frontmatter {
            title
            value
            gallery
          }
        }
      }
    }
  }
`;

export default IndexPage;
