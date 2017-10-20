import * as React from 'react';
import { Link } from 'react-router-dom';

import { Post } from '../../interfaces';

interface Props {
  post: Post;
}

export const PostDetail: React.SFC<Props> = ({
  post: { author, genre, text, title, views },
}) => (
  <div>
    <Link to={author ? `/authors/${author.id}` : '/'}>Back</Link>
    <h1>{title}</h1>
    {author && (
      <h3>
        {author.firstName} {author.lastName}
      </h3>
    )}
    <h3>
      {genre}, {views} views.
    </h3>
    <p>{text}</p>
  </div>
);
