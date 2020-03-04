import { repositoryTypes } from "./repository.types";

const initialState = {
  repositories: [],
  page: 1,
  hasMore: true
};

function repositorieReducer(state = initialState, action) {
  
  switch (action.type) {
    case repositoryTypes.FETCH_DATA_START:
      return {
        ...state,
        repositories: action.payload.repositories,
        page: action.page
      };

    case repositoryTypes.FETCH_DATA_LOAD:
      return {
        ...state,
        repositories: state.repositories.concat(action.payload.repositories),
        page: action.page
      };
    default:
      return state;
  }
}

export default repositorieReducer;
