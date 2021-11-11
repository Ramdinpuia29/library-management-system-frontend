import { useState, useEffect } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";
import useWindowSize from "../assets/useWindowSize";

const Navigation = () => {
  const size = useWindowSize();
  var location = useLocation();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      setIsAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <GiSpellBook size={28} style={{ marginRight: "20px" }} />
            {size.width > 767 ? "Library Management System" : ""}
          </Navbar.Brand>
          <Nav>
            {isAuth ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : location.pathname !== "/login" ? (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
