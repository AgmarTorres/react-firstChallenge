import React, { Component } from "react";
import Modal from "react-awesome-modal";
import Pull from "./../pulls/pull.component";
import "./popup.styles.scss";

export default class PopUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        visible: false,
        pulls: []
        };
    }

    openModal() {
        this.setState({
        visible: true
        });
    }

    closeModal() {
        this.setState({
        visible: false
        });
    }

    getPulls(url) {
        fetch(url)
        .then(response => response.json())
        .then(pulls => this.setState({ pulls: pulls }));
        this.openModal();
    }

    render() {
        return (
        <section className="section">
            <input
            className="btn"
            type="button"
            value="Pull"
            onClick={() => {
                this.getPulls(this.props.url);
            }}
            />
            <Modal
            className="modal"
            height="600px"
            width="350px"
            visible={this.state.visible}
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
            >
            <div className="pull-request">
                Pull Requests
                <span className="btn" onClick={() => this.closeModal()}>
                Close
                </span>
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
