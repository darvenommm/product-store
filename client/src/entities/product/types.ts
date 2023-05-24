export interface IProductDataForCreating {
  title: string;
  description: string;
  price: number;
  photo: FileList;
}

export interface IProductDataForSending
  extends Omit<IProductDataForCreating, 'photo'> {
  photo: File;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  photoUrl: string;
}
