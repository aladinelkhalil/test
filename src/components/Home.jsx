import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Modal from "./Modal";

class Home extends Component {
  state = {
    show: false
  };

  handleOpen = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleOpen}>
          Open Modal
        </Button>
        <Modal show={this.state.show} onClose={this.handleClose} />
      </>
    );
  }
}

export default Home;
