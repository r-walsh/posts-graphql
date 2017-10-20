import { Author, Post } from './connectors';

const resolvers = {
  Query: {
    author(_, args) {
      return Author.find({ where: args });
    },
    authors() {
      return Author.findAll();
    },
    post(_, args) {
      return Post.find({ where: args });
    },
    posts(_, args) {
      return Post.findAll({ where: args });
    },
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
  },
};

export default resolvers;
