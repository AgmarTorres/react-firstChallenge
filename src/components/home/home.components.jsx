import React from "react";
import Repository from "../repository/repository.component";
import { SpinnerContainer, SpinnerOverlay } from "../home/with-spinner.styles";

import "./home.styles.scss";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { getData } from "../../redux/repositories/repositories.action";

class Home extends React.Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.refs.myscroll.addEventListener("scroll", () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
        this.refs.myscroll.scrollHeight
      ) {
        this.fetchMoreData();
      }
    });
  }

  fetchMoreData = () => {
    const page = this.props.page ? this.props.page : 1;
    getData(parseInt(page) + 1);
  };

  render() {
    return (
      <div className="home" ref="myscroll" style={{ height: "320px", overflow: "auto" }}>
        {this.props.repositories && this.props.repositories.length > 0 ? (
          this.props.repositories.map((item, index) => (
            <Repository id={index} key={index} item={item}></Repository>
          ))
        ) : (
          <SpinnerOverlay>
            <SpinnerContainer />
          </SpinnerOverlay>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories.repositories,
  page: state.repositories.page
});

const mapDispatchToProps = dispatch => bindActionCreators(getData, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
