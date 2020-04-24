export interface ProductMarkdownRemark {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter: Product;
      }[];
    };
  };
}

export interface Product {
  title: string;
  layout: string;
  image: string;
  value: number;
}
