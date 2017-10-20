import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import gql from 'graphql-tag';

import { PostDetail } from '../components/PostDetail/PostDetail';

import { Post } from '../interfaces';
import { apolloRenderHelper } from '../utils/apolloRenderHelper';

const PostQuery = gql`
  query GetPost($postId: Int!) {
    post(id: $postId) {
      id
      title
      text
      views
      genre
      author {
        firstName
        lastName
        id
      }
    }
  }
`;

interface Response {
  post: Post;
}

interface Props {
  match: {
    params: {
      postId: string;
    };
  };
}

const withPost = graphql<{}, Props, Response & QueryProps>(PostQuery, {
  options: ({ match: { params: { postId } } }) => ({
    variables: { postId },
  }),
  props: ({ data }) => ({ ...data }),
});

export default withPost(({ error, loading, post }) =>
  apolloRenderHelper(error, loading, PostDetail, { post }),
);
