import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const EditStaffModal = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    department: "",
    experience: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const clearInputs = () => {
    setValues({
      username: "",
      email: "",
      department: "",
      experience: "",
    });
  };

  const onEditStaff = async () => {
    props.onHide();
    console.log(props.row);
    const { username, email, department, experience } = values;
    const user_id = props.row.userId;
    const staff = { user_id, username, email, department, experience };
    await axios.post(
      "http://localhost:8081/LibraryManagementSystem/updatestaff",
      staff
    );
    clearInputs();
  };

  return (
    <Form onSubmit={onEditStaff}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onEnter={() => {
          setValues({
            ...values,
            username: props.row.username,
            email: props.row.email,
            department: props.row.department,
            experience: props.row.experience,
          });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            EDIT STAFF
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={values.username}
              onChange={handleChange("username")}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange("email")}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department"
              value={values.department}
              onChange={handleChange("department")}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter experience"
              value={values.experience}
              onChange={handleChange("experience")}
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="success" type="submit" onClick={onEditStaff}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default EditStaffModal;
