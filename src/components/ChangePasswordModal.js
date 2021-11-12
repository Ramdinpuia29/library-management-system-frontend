import { useState } from "react";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ChangePasswordModal = (props) => {
  const [values, setValues] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const clearInputs = () => {
    setValues({
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
    });
  };

  const onChangePassword = async () => {
    if (values.newpassword === values.confirmpassword) {
      props.onHide();
      const { oldpassword, newpassword, confirmpassword } = values;
      const pass = { oldpassword, newpassword, confirmpassword };
      const response = await axios.post(
        "http://localhost:8081/LibraryManagementSystem/ChangePassword",
        pass
      );
      console.log(response.data);
      clearInputs();
    } else {
      alert("Your new password does not match");
    }
  };

  return (
    <Form onSubmit={onChangePassword}>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            CHANGE PASSWORD
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your old password"
              value={values.oldpassword}
              onChange={handleChange("oldpassword")}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={values.newpassword}
              onChange={handleChange("newpassword")}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              value={values.confirmpassword}
              onChange={handleChange("confirmpassword")}
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          <Button type="submit" onClick={onChangePassword}>
            Change Password
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default ChangePasswordModal;
