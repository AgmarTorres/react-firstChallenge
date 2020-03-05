import React, { Component } from "react";
import Modal from "react-awesome-modal";
import Pull from "./../pulls/pull.component";
import "./popup.styles.scss";
import { Link } from "react-router-dom";

export default class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      pulls: []
    };
  }

  functionModal() {
    this.setState({
      visible: !this.state.visible
    });
  }

  getPulls(url) {
    fetch(url)
      .then(response => response.json())
      .then(pulls => this.setState({ pulls: pulls }));
    this.functionModal();
  }

  render() {
    return (
      <section className="section">
        <Link to={this.props.url}>
          <input
            className="btn"
            type="button"
            value="Pull Requests"
            onClick={() => {
              this.getPulls(this.props.url);
            }}
          />
        </Link>
        <Modal
          className="modal"
          height="600px"
          width="350px"
          visible={this.state.visible}
          effect="fadeInUp"
          onClickAway={() => this.functionModal()}
        >
          <div className="pull-request">
            Pull Requests
            <Link to="/home">
              <span className="btn-close" onClick={() => this.functionModal()}>
                X
              </span>
            </Link>
          </div>
          <div className="body">
            {this.state.pulls
              ? this.state.pulls.map((item, index) => (
                  <Pull key={index} item={item}>
                    {item.id}
                  </Pull>
                ))
              : null}
          </div>
        </Modal>
      </section>
    );
  }
}
