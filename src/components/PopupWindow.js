import React from "react";
import '../../src/App.css';
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function PopupWindow({modalIsOpen, setModalIsOpen, player}) {

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={500}
      >
        <div class="col">
          <div class="row" style={{fontFamily: "Courier New", fontWeight: "bold", textAlign: "center"}}>Player {player} has won!</div>
          <div class="row">
            <button class="btn btn-light" style={{whiteSpace: "nowrap"}} onClick={() => {
              setModalIsOpen(false)
            }}>OK</button>
          </div>
        </div>

      </Modal>
    </div>
  );
}
