import React from "react";
import Repository from "../repository/repository.component";
import { SpinnerContainer, SpinnerOverlay } from "../home/with-spinner.styles";

import InfiniteScroll from "react-infinite-scroll-component";

import "./home.styles.scss";

import { connect } from "react-redux";
import { getData } from "../../redux/repositories/repositories.action";

class Home extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const page = this.props.page ? this.props.page : 1;
    this.props.getData(page);
  }

  render() {
    return (
      <InfiniteScroll
        dataLength={this.props.repositories.length}
        next={() => this.props.getData(parseInt(this.props.page) + 1)}
        hasMore={true}
        loader={
          <SpinnerOverlay>
            <SpinnerContainer />
          </SpinnerOverlay>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>All repositories was apresented </b>
          </p>
        }
      >
        <div className="home">
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
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories.repositories,
  page: state.repositories.page
});

const mapDispatchToProps = dispatch => ({
  getData: page => dispatch(getData(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
