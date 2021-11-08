import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";
import { MdOutlineSupervisedUserCircle, MdHistory } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import useWindowSize from "../assets/useWindowSize";

import "./Sidebar.css";

const Sidebar = () => {
  const size = useWindowSize();
  return (
    <div className="sidebar">
      <div>
        <Nav
          navbar
          variant="pills"
          defaultActiveKey="/dashboard/books"
          className="flex-column justify-content-center"
          style={{ padding: "20px 10px" }}
        >
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="/dashboard/books"
              to="/dashboard/books"
            >
              <ImBook size={24} />
              {size.width > 767 ? "Books" : ""}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="/dashboard/staffs"
              to="/dashboard/staffs"
            >
              <MdOutlineSupervisedUserCircle size={24} />
              {size.width > 767 ? "Staffs" : ""}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="/dashboard/action-history"
              to="/dashboard/action-history"
            >
              <MdHistory size={24} />
              {size.width > 767 ? "Action History" : ""}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="sidebar-bottom">
        <Nav>
          <Nav.Item>
            <Nav.Link>
              <FaUserCircle size={24} />
              Welcome, Guest
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;