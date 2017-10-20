import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import AuthorListContainer from './containers/AuthorListContainer';
import AuthorDetailContainer from './containers/AuthorDetailContainer';
import PostDetailContainer from './containers/PostContainer';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql',
});
const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <Router>
      <Switch>
        <Route component={AuthorListContainer} exact path={'/'} />
        <Route component={AuthorDetailContainer} path={'/authors/:authorId'} />
        <Route component={PostDetailContainer} path={'/posts/:postId'} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
