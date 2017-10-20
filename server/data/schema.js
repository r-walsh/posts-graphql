import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
  stars: Int
}

type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
  genre: String
}

type Query {
 author(firstName: String, lastName: String, id: Int): Author
 authors: [Author]
 posts: [Post]
 post(id: Int): Post
}
schema {
 query: Query
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
