import React from "react";
import { Modal as BSModal, Button } from "react-bootstrap";

function Modal({ show, onClose }) {
  return (
    <BSModal show={show} onHide={onClose}>
      <BSModal.Header closeButton>
        <BSModal.Title>Modal heading</BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>Woohoo, you're reading this text in a modal!</BSModal.Body>
      <BSModal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClose}>
          Save Changes
        </Button>
      </BSModal.Footer>
    </BSModal>
  );
}

export default Modal;
