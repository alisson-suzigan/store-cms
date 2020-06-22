export interface DataModel {
  categories: CategoryNodes;
  products: {
    group: ProductGroup[];
  };
}

export interface ProductGroup {
  totalCount: number;
  fieldValue: string;
  nodes: DataProduct[];
}

// DataProduct
interface DataProduct {
  id: string;
  frontmatter: {
    title: string;
    value: number;
    gallery: Gallery;
    date: string;
  };
  fields: {
    slug: string;
  };
}

interface CategoryNodes {
  totalCount: number;
  nodes: Category[];
}

// Category
export interface Category {
  id: string;
  frontmatter: {
    title: string;
    icon: string;
  };
}

//  Shelf
export interface ShelfData {
  id: string;
  title: string;
  icon?: string;
  products: ShelfProduct[];
}

export interface ShelfProduct {
  id: string;
  title: string;
  value: number;
  gallery: Gallery;
  date: string;
  slug: string;
}

// Gallery
export type Gallery = GalleryItem[];

interface GalleryItem {
  id: string;
  childImageSharp: {
    fixed: {
      src: string;
    };
  };
}

export interface SingleProduct {
  markdownRemark: {
    frontmatter: {
      title: string;
      description: string;
      available: boolean;
      value: number;
      gallery: Gallery;
    };
    html: string;
  };
}
