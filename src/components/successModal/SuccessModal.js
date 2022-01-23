import React from "react";
import Modal from "react-modal";
import "./SuccessModal.css";

export default function SuccessModal(props) {
  
  const onClickOk = p => {
    props.onClick()
    p.onClose();
  };

  return (
    <div>
      <Modal
        className="modal"
        isOpen={props.isOpen}
        onRequestClose={props.onClose}
        ariaHideApp={false}
      >
        <div>Thêm nhân viên thành công</div>
        <br/>
        <button onClick={() => onClickOk(props)}>Ok</button>
      </Modal>
    </div>
  );
}
