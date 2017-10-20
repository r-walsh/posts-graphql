import * as React from 'react';
import { Link } from 'react-router-dom';
import { chain } from 'lodash';

import { Author, Post } from '../../interfaces';

interface Props {
  author: Author;
  posts: Post[];
}

export const AuthorDetail: React.SFC<Props> = ({
  author: { firstName, lastName },
  posts,
}) => {
  const groupedPosts = chain(posts)
    .orderBy('views', ['desc'])
    .groupBy('genre')
    .value();
  return (
    <div>
      <Link to={'/'}>Back</Link>
      <h1>{`${firstName} ${lastName}`}</h1>
      <ul>
        {Object.keys(groupedPosts).map(genre => (
          <div key={genre}>
            <h3>{genre}</h3>
            <ul>
              {groupedPosts[genre].map(({ id, title, views }) => (
                <li key={id}>
                  <Link to={`/posts/${id}`}>{title}</Link>
                  <p>Views: {views}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};
