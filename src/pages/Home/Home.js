import Button from "react-bootstrap/Button";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Button href="/dashboard/books" variant="dark">
          Go to Dashboard
        </Button>
      </div>
    </>
  );
};

export default Home;
