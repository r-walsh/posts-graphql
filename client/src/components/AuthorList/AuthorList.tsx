import * as React from 'react';
import { Link } from 'react-router-dom';
import { ResetSearchAction, UpdateSearchAction } from '../../ducks/search';
import { filterMap } from '../../utils/filterMap';

import { Author } from '../../interfaces';

interface Props {
  authors: Author[];
  searchText: string;
  resetSearch(): ResetSearchAction;
  updateSearch(text: string): UpdateSearchAction;
}

export const AuthorList: React.SFC<Props> = ({
  authors,
  searchText,
  updateSearch,
}) => (
  <div>
    <input
      onChange={e => updateSearch(e.target.value)}
      type="text"
      value={searchText}
    />
    <ul>
      {filterMap(
        authors,
        ({ firstName, id, lastName, stars }, doFilter) =>
          `${firstName} ${lastName}`
            .toLowerCase()
            .includes(searchText.toLowerCase()) ? (
            <li key={id}>
              <Link to={`/authors/${id}`}>
                {firstName} {lastName}
              </Link>
            </li>
          ) : (
            doFilter
          ),
      )}
    </ul>
  </div>
);
