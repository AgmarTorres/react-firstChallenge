import { repositoryTypes } from "./repository.types";
export function getData(page) {
  return function(dispatch) {
    return fetch(
      `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${page}`
    )
      .then(response => response.json())
      .then(repositories => {
        dispatch({
          type: repositoryTypes.FETCH_DATA_LOAD,
          payload: { repositories: repositories, page: page }
        });
      });
  };
}
