//ID Name Author Location
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import BootstrapTable from "react-bootstrap-table-next";
import Button from "react-bootstrap/Button";
import { MdAddCircleOutline } from "react-icons/md";

import AddBooksModal from "./AddBooksModal";
import EditBooksModal from "./EditBooksModal";
import DeleteBookModal from "./DeleteBookModal";

import useWindowSize from "../assets/useWindowSize";
import "./BooksTable.css";

const BooksTable = () => {
  const size = useWindowSize();

  const [modalShow, setModalShow] = useState(false);

  const [isRowSelected, setIsRowSelected] = useState(false);

  const [books, setBooks] = useState([]);

  const loggedIn = sessionStorage.getItem("user-info");

  const [rowValues, setRowValues] = useState({
    bookId: "",
    bookName: "",
    author: "",
    location: "",
  });
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);

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
  }, [modalShow, editModalShow, deleteModalShow]);

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

  const selectRow = {
    mode: "radio",
    hideSelectColumn: true,
    bgColor: "grey",
    clickToSelect: true,
    onSelect: (row) => {
      setIsRowSelected(true);
      setRowValues({
        bookId: row.bookId,
        bookName: row.bookName,
        author: row.author,
        location: row.location,
      });
    },
  };

  return (
    <>
      <div className="bookstable">
        <div className="btn-container">
          {isRowSelected && loggedIn ? (
            <div>
              <Button variant="warning" onClick={() => setEditModalShow(true)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => setDeleteModalShow(true)}>
                Delete
              </Button>
            </div>
          ) : loggedIn ? (
            <Button variant="success" onClick={() => setModalShow(true)}>
              {size.width > 767 ? (
                "Add Books"
              ) : (
                <MdAddCircleOutline size={24} />
              )}
            </Button>
          ) : (
            ""
          )}
        </div>
        <Container>
          <BootstrapTable
            keyField="bookId"
            data={books}
            columns={columns}
            selectRow={selectRow}
          />
        </Container>
      </div>
      <AddBooksModal show={modalShow} onHide={() => setModalShow(false)} />
      <EditBooksModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        row={rowValues}
      />
      <DeleteBookModal
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        row={rowValues}
      />
    </>
  );
};

export default BooksTable;
