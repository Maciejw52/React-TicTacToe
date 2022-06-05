import { Button, Modal } from "react-bootstrap"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalShowNoWinner({handleCloseNoWinner, noWinner}) {

  return (
    <>
      <div>
        <div style={{textAlign: "center"}}>
        <Modal style={{fontFamily: "Courier New"}} show={noWinner} onHide={handleCloseNoWinner}>
          <Modal.Header closeButton>
            <Modal.Title>No One Won :(</Modal.Title>
          </Modal.Header>
          <Modal.Body>Would you like to play again?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseNoWinner}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseNoWinner}>
              Play Again
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    </>
  );
}
