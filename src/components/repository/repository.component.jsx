import React from "react";
import { ReactComponent as Favorite } from "../../assets/favorite.svg";
import { ReactComponent as Fork } from "../../assets/fork.svg";
import "./repository.styles.scss";
import PopUp from "./../popup/popup.components";

const Repository = ({ item }) => {
  return (
    <div className="repository">
      <div className="image-container">
        <img className="image" alt="ref" src={item.owner.avatar_url} />
      </div>
      <div className="itens">
        <div className="item">
          <div className="users">
            <div className="user-repository">
              <label className="info-name">Repository: </label>
              <span className="name">{item.name}</span>
            </div>

            <div className="user-name">
              <label className="info-name">Author:</label>
              <span className="username">{item.owner.login} </span>
            </div>
          </div>

          <div className="features">
            <div>
              <PopUp
                className="btn"
                url={`https://api.github.com/repos/${item.full_name}/pulls`}
              ></PopUp>
            </div>
            <div>
              <Fork className="fork"></Fork>
              <span className="forks"> {item.forks_count}</span>
            </div>
            <div>
              <Favorite className="favorite"></Favorite>
              <span className="stars"> {item.stargazers_count}</span>
            </div>
          </div>
        </div>
        <div className="info">
          <label className="info-name">Description:</label> <br />
          <span className="description">{item.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Repository;
