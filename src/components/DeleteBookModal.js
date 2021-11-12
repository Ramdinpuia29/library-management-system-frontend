import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const DeleteBookModal = (props) => {
  //   const bookId = props.row.bookId;
  const [bookId, setBookId] = useState("");
  const onDeleteBook = async () => {
    // console.log(`bookId`, bookId);
    props.onHide();
    await axios.get(
      "http://localhost:8081/LibraryManagementSystem/deletebook?bookId=" + bookId
    );
  };

  return (
    <Form onSubmit={onDeleteBook}>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onEnter={() => {
          setBookId(props.row.bookId);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            CONFIRM DELETE BOOK?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="success" type="submit" onClick={onDeleteBook}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default DeleteBookModal;
