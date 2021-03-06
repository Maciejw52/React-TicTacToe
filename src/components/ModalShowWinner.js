import { Button, Modal } from "react-bootstrap"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalShowWinner({handleClose, show, player}) {

  return (
    <>
      <div>
        <div style={{textAlign: "center"}}>
        <Modal style={{fontFamily: "Courier New"}} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Player {player} has won!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Would you like to play again?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Play Again
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    </>
  );
}
