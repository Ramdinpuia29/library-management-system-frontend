import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
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
        <Form>
          <Card.Header>
            <Card.Title>Sign In</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
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
