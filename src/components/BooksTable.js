//ID Name Author Location
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import BootstrapTable from "react-bootstrap-table-next";
import Button from "react-bootstrap/Button";
import { MdAddCircleOutline } from "react-icons/md";

import AddBooksModal from "./AddBooksModal";

import useWindowSize from "../assets/useWindowSize";
import "./BooksTable.css";

// import { books } from "../assets/booksDummyData";

const columns = [
  {
    dataField: "bookName",
    text: "Book Name",
    sort: true,
  },
  {
    dataField: "author",
    text: "Author",
    sort: true,
  },
  {
    dataField: "location",
    text: "Location",
    sort: true,
  },
];

const BooksTable = () => {
  const size = useWindowSize();

  const [modalShow, setModalShow] = useState(false);

  const [books, setBooks] = useState([]);

  const loggedIn = localStorage.getItem("user-info");

  useEffect(() => {
    const axiosBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/LibraryManagementSystem/books"
        );
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    axiosBooks();
  }, [modalShow]);

  return (
    <>
      <div className="bookstable">
        <div className="btn-container">
          {!loggedIn ? (
            ""
          ) : (
            <Button variant="success" onClick={() => setModalShow(true)}>
              {size.width > 767 ? (
                "Add Books"
              ) : (
                <MdAddCircleOutline size={24} />
              )}
            </Button>
          )}
        </div>
        <Container fluid="sm">
          <BootstrapTable keyField="bookId" data={books} columns={columns} />
        </Container>
      </div>
      <AddBooksModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default BooksTable;
