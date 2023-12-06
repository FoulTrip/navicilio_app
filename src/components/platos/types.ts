export interface Plato {
  id: number;
  categoria: string;
  menu: Menu[];
}

export interface Menu {
  id: number;
  image: string;
  name: string;
  description?: string;
  scope?: number;
  price?: number;
  link?: string;
}

export interface MenuData {
  platos: Plato[];
}
