import { repositoryTypes } from "./repository.types";

export function getData( page ) {
  console.log(
    `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${page}`)
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
