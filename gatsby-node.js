/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
// Convert image src(s) in markdown to be relative to their node’s parent directory.
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
// Used to create slugs using file name
const { createFilePath } = require(`gatsby-source-filesystem`);

// Used to insert data on GraphQL nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
  // Add image relative paths to graphQL nodes
  fmImagesToRelative(node);

  // Add slug fields to graphQL nodes
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// Used to map the query results to pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/product.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
