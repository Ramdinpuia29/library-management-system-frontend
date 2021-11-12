import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const DeleteStaffModal = (props) => {
  const [userId, setUserId] = useState("");
  const onDeleteUser = async () => {
    props.onHide();
    await axios.get(
      "http://localhost:8081/LibraryManagementSystem/deletestaff?userId=" +
        userId
    );
  };

  return (
    <Form onSubmit={onDeleteUser}>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onEnter={() => {
          setUserId(props.row.userId);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            CONFIRM DELETE STAFF?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="success" type="submit" onClick={onDeleteUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default DeleteStaffModal;
