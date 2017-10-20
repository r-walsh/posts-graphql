import * as React from 'react';
import { connect, Connect } from 'react-redux';
import { graphql, QueryProps } from 'react-apollo';
import gql from 'graphql-tag';

import { AuthorList } from '../components/AuthorList';
import { resetSearch, State, updateSearch } from '../ducks/search';

import { Author } from '../interfaces';
import { apolloRenderHelper } from '../utils/apolloRenderHelper';

const AuthorQuery = gql`
  query GetAuthors {
    authors {
      id
      firstName
      lastName
      stars
    }
  }
`;

interface Response {
  authors: Author[];
}

const withAuthors = graphql<Response, {}, Response & QueryProps>(AuthorQuery, {
  props: ({ data }) => ({ ...data }),
});

const mapStateToProps = (state: State) => state;
const ConnectedAuthorList = connect(mapStateToProps, {
  resetSearch,
  updateSearch,
})(AuthorList);

export default withAuthors(({ authors, error, loading }) =>
  apolloRenderHelper(error, loading, ConnectedAuthorList, { authors }),
);
