import React from "react";
import Repository from "../repository/repository.component";
import { SpinnerContainer, SpinnerOverlay } from "../home/with-spinner.styles";

import "./home.styles.scss";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { getData } from "../../redux/repositories/repositories.action";

const Home = ({ repositories, page, getData }) => {
  return (
    <div className="home">
      {repositories.total_count ? (
        repositories.items.map((item, index) => (
          <Repository id={index} key={index} item={item}></Repository>
        ))
      ) : (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  repositories: state.repositories.repositories,
  page: state.repositories.page
});

const mapDispatchToProps = dispatch => bindActionCreators(getData, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
