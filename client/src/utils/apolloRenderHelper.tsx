import * as React from 'react';

export const apolloRenderHelper = <Props extends {}>(
  error: any,
  loading: any,
  Component: React.ComponentClass<Props> | React.StatelessComponent<Props>,
  props: Props,
) => {
  if (error) {
    return <h1>YOU DUN GOOFED</h1>;
  }

  if (loading) {
    return <div />;
  }

  return <Component {...props} />;
};
