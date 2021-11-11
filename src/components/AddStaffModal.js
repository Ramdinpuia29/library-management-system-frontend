import { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddStaffModal = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    department: "",
    experience: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const clearInputs = () => {
    setValues({
      name: "",
      email: "",
      department: "",
      experience: "",
    });
  };

  const onAddStaff = async () => {
    props.onHide();
    const { name, email, department, experience } = values;
    const staff = { name, email, department, experience };
    await axios.post(
      "http://localhost:8081/LibraryManagementSystem/insertstaff",
      staff
    );
    clearInputs();
  };

  return (
    <Form onSubmit={onAddStaff}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ADD STAFF
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={values.name}
              onChange={handleChange("name")}
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
          <Button variant="success" type="submit" onClick={onAddStaff}>
            Add Staff
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default AddStaffModal;
