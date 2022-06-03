import { Button, Modal } from "react-bootstrap"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalShowWinner({handleClose, show, player}) {

  return (
    <>
      <div className="player-won-modal-text">
        <div style={{textAlign: "center"}}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{fontFamily: "Courier New"}}>Player {player} has won!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontFamily: "Courier New"}}>Would you like to play again?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" style={{fontFamily: "Courier New"}} onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" style={{fontFamily: "Courier New"}} onClick={handleClose}>
              Play Again
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    </>
  );
}
