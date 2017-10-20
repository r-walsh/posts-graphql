import { Post } from './';

export interface Author {
  firstName: string;
  id: number;
  lastName: string;
  posts?: Post[];
  stars: number;
}
