export interface DataModel {
  categories: CategoryNodes;
  products: {
    group: ProductGroup[];
  };
}

export interface ProductGroup {
  totalCount: number;
  fieldValue: string;
  nodes: Product[];
}

// Product
interface Product {
  id: string;
  frontmatter: {
    title: string;
    value: number;
    image: string;
    date: string;
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
  image: string;
  date: string;
}
