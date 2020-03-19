import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Modal from "./Modal";

class Home extends Component {
  state = {
    modalIsOpen: false
  };

  handleOpen = () => this.setState({ modalIsOpen: true });
  handleClose = () => this.setState({ modalIsOpen: false });

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleOpen}>
          Open Modal
        </Button>
        <Modal show={this.state.modalIsOpen} onClose={this.handleClose} />
      </>
    );
  }
}

export default Home;
