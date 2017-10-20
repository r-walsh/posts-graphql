export interface State {
  searchText: string;
}

enum TypeKeys {
  UpdateSearch = 'search/UPDATE_SEARCH',
  ResetSearch = 'search/RESET_SEARCH',
  OtherAction = 'unused/OTHER_ACTION',
}

export interface UpdateSearchAction {
  type: TypeKeys.UpdateSearch;
  text: string;
}

export interface ResetSearchAction {
  type: TypeKeys.ResetSearch;
}

interface OtherAction {
  type: TypeKeys.OtherAction;
}

type ActionTypes = UpdateSearchAction | ResetSearchAction | OtherAction;

const initialState = { searchText: '' };

export default function search(
  state: State = initialState,
  action: ActionTypes,
): State {
  switch (action.type) {
    case TypeKeys.UpdateSearch:
      return { searchText: action.text };
    case TypeKeys.ResetSearch:
      return { searchText: '' };
    default:
      return state;
  }
}

export const updateSearch = (text: string): UpdateSearchAction => ({
  text,
  type: TypeKeys.UpdateSearch,
});

export const resetSearch = (): ResetSearchAction => ({
  type: TypeKeys.ResetSearch,
});
