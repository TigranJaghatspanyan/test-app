export interface HomeTypes {
  route: {
    params: {
      isPermissionsUpdated: boolean;
      message: string;
      skipLocation: boolean;
    };
    name: string;
  };
  navigation: any;
}

export interface ProductType {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
