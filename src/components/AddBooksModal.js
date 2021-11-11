import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const AddBooksModal = (props) => {
  const [values, setValues] = useState({
    book_name: "",
    author: "",
    location: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const clearInputs = () => {
    setValues({
      book_name: "",
      author: "",
      location: "",
    });
  };

  const onAddBook = async () => {
    props.onHide();
    const { bookName, author, location } = values;
    const book = { bookName, author, location };
    await axios.post(
      "http://localhost:8081/LibraryManagementSystem/insertbook",
      book
    );
    clearInputs();
  };

  return (
    <Form onSubmit={onAddBook}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ADD A BOOK
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book name"
              value={values.bookName}
              onChange={handleChange("bookName")}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author's name"
              value={values.author}
              onChange={handleChange("author")}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={values.location}
              onChange={handleChange("location")}
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="success" type="submit" onClick={onAddBook}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default AddBooksModal;
