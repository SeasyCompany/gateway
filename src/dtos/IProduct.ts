export interface IVariations {
  name: string;
  options: string[];
}

export interface IProduct {
  url: string;
  price: number;
  marketplace: string;
  location: string;
  image: string;
  title: string;
  variations: IVariations[];
}
