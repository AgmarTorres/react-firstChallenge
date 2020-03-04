import React from "react";
import Repository from "../repository/repository.component";

import { connect } from "react-redux";
import { getData } from "../../redux/repositories/repositories.action";

import {bindActionCreators} from 'redux'

import InfiniteScroll from "react-infinite-scroll-component";

class Home extends React.Component {
 
  render() {
  //  <Repository id={index} key={index} item={item}></Repository>
  return (
      <div className="App">
        <h1 className="title"> Git Repositories</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.repositories.items,
  page: state.repositories.page
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(getData, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
