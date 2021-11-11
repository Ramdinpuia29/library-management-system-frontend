//ID Name Department Experience
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import BootstrapTable from "react-bootstrap-table-next";
import Button from "react-bootstrap/Button";
import { MdAddCircleOutline } from "react-icons/md";

import AddStaffModal from "./AddStaffModal";

import useWindowSize from "../assets/useWindowSize";
import "./StaffsTable.css";

// import { staffs } from "../assets/staffsDummyData";

const columns = [
  {
    dataField: "username",
    text: "Name",
    sort: true,
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
  },
  {
    dataField: "department",
    text: "Department",
    sort: true,
  },
  {
    dataField: "experience",
    text: "Experience",
    sort: true,
  },
];

const BooksTable = () => {
  const size = useWindowSize();

  const [modalShow, setModalShow] = useState(false);

  const [staffs, setStaffs] = useState([]);

  const isAuth = localStorage.getItem("user-info");
  const parsed = JSON.parse(isAuth);
  const isAdmin = parsed.role === "admin";

  useEffect(() => {
    const axiosStaffs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/LibraryManagementSystem/staffs"
        );
        setStaffs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    axiosStaffs();
  }, [modalShow]);

  return (
    <>
      <div className="staffstable">
        <div className="btn-container">
          {isAdmin ? (
            <Button variant="success" onClick={() => setModalShow(true)}>
              {size.width > 767 ? (
                "Add Staff"
              ) : (
                <MdAddCircleOutline size={24} />
              )}
            </Button>
          ) : (
            ""
          )}
        </div>
        <Container fluid="sm">
          <BootstrapTable keyField="staff" data={staffs} columns={columns} />
        </Container>
      </div>
      <AddStaffModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default BooksTable;
