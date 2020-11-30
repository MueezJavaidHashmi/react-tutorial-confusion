export interface CommentInterface {
  id: number;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export interface DishInterface {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  comments: Array<CommentInterface>;
}
