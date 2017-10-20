import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import gql from 'graphql-tag';

import { AuthorDetail } from '../components/AuthorDetail';
import { apolloRenderHelper } from '../utils/apolloRenderHelper';

import { Author } from '../interfaces';

const AuthorAndPostsQuery = gql`
  query GetAuthorWithPosts($authorId: Int!) {
    author(id: $authorId) {
      firstName
      id
      lastName
      posts {
        id
        title
        text
        views
        genre
      }
    }
  }
`;

interface Response {
  author: Author;
}

interface Props {
  match: {
    params: {
      authorId: string;
    };
  };
}

const withAuthor = graphql<
  Response,
  Props,
  Response & QueryProps
>(AuthorAndPostsQuery, {
  options: ({ match: { params: { authorId } } }) => ({
    variables: { authorId },
  }),
  props: ({ data }) => ({ ...data }),
});

export default withAuthor(({ author, error, loading }) =>
  apolloRenderHelper(error, loading, AuthorDetail, {
    author,
    posts: author ? author.posts : [],
  }),
);
