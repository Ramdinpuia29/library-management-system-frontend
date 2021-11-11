import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import AuthService from "../../Auth/AuthService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/dashboard/books");
    }
  }, [navigate]);

  async function loginUser(credentials) {
    return fetch("http://localhost:8081/LibraryManagementSystem/Login1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleLogin = async (e) => {
    // e.preventDefault();
    const result = await loginUser({
      username,
      password,
    });
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/dashboard/books");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "60vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "25rem" }}>
        <Form onSubmit={handleLogin}>
          <Card.Header>
            <Card.Title>Sign In</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button variant="dark" type="submit">
              Login
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
