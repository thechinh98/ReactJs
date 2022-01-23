import React from "react";
import Modal from "react-modal";
import "./CustomModal.css";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { editUser } from "../../redux/actions";
import store from "../../redux/store";

export default function CustomModal(props) {
  const [userID, setUserID] = useState(props.user.userID);
  const [name, setName] = useState(props.user.name);
  const [age, setAge] = useState(props.user.age);
  const [occupation, setOccupation] = useState(props.user.occupation);

  useEffect(
    () => {
      setUserID(props.user.user);
      setName(props.user.name);
      setAge(props.user.age);
      setOccupation(props.user.occupation);
    },
    [props]
  );

  const onClickOk = p => {
    console.log(props.user.id);
    store.dispatch(
      editUser({
        id: props.user.id,
        userID: userID,
        name: name,
        age: age,
        occupation: occupation
      })
    );
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
        <div>Chỉnh sửa thông tin nhân viên</div>
        <br />
        <form>
          <TextField
            id="filled-basic"
            label="Mã nhân viên"
            variant="outlined"
            value={userID}
            onChange={e => setUserID(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="filled-basic"
            label="Tên"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="filled-basic"
            label="Tuổi"
            variant="outlined"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="filled-basic"
            label="Chức vụ"
            variant="outlined"
            value={occupation}
            onChange={e => setOccupation(e.target.value)}
          />
        </form>
        <br />
        <button onClick={() => onClickOk(props)}>Ok</button>
      </Modal>
    </div>
  );
}
