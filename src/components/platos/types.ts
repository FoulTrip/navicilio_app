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
  price_10_15?: number;
  price_libra?: number;
}

export interface MenuData {
  platos: Plato[];
}
