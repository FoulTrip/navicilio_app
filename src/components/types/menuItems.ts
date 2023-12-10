export interface MenuItem {
  id: number;
  image: string;
  name: string;
  description: string;
  scope: number;
  price: number;
  priceDiscount?: number;
  linkProduct: string;
}

export interface MenuCategory {
  id: number;
  categoria: string;
  menu: MenuItem[];
}

export interface Dates {
  platos: MenuCategory[];
}

export default Dates;
