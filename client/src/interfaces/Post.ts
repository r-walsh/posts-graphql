import { Author } from './';

export interface Post {
  id: number;
  title: string;
  text: string;
  views: number;
  author?: Author;
  genre: string;
}
