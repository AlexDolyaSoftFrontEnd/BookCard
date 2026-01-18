export interface IBook {
  id: number;
  title: string;
  price: number;
  image: string;
  isHit?: boolean;
}

export interface IBookCardProps {
  book: IBook;
}
