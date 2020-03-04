import { repositoryTypes } from "./repository.types";

const initialState = {
  repositories: [],
  items: [],
  page: 1,
  hasMore: true
};

function repositorieReducer(state = initialState, action) {
  switch (action.type) {
    case action.type === repositoryTypes.DATA_LOADED:
      return {
        ...state,
        repositories: state.repositories.concat(action.payload.repositories),
        items: state.items.concat(action.payload.items),
        page: action.page
      };
    default:
      return state;
  }
}

export default repositorieReducer;
