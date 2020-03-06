import { repositoryTypes } from "./repository.types";

const initialState = {
  repositories: [],
  page: 1,
  hasMore: true
};

function repositorieReducer(state = initialState, action) {
  switch (action.type) {
    case repositoryTypes.FETCH_DATA_LOAD:
      return {
        ...state,
        repositories: state.repositories.concat(
          action.payload.repositories.items
        ),
        page: action.page
      };
    default:
      return state;
  }
}

export default repositorieReducer;
