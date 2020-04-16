/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

/* eslint-disable */
import React from 'react';
import Layout from './src/components/layout';

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
