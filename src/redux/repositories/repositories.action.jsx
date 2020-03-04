import { repositoryTypes } from "./repository.types";

export function getData() {
  return function( dispatch ) {
    return fetch(
      `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=1`
    ) .then(response => response.json())
      .then(repositories => {
        dispatch({
          type: repositoryTypes.FETCH_DATA_START,
          payload: { repositories: repositories, page: 1 }
        });
      });
  };
}

export function getMoreData( page ) {
  
  return function( dispatch ) {
    return fetch(
      `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${page}`
    ) .then(response => response.json())
      .then(repositories => {
        dispatch({
          type: repositoryTypes.DATA_LOADED,
          payload: { repositories: repositories, page: page }
        });
      });
  };
}

