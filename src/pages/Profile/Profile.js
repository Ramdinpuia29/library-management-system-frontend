import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import ChangePasswordModal from "../../components/ChangePasswordModal";
import "./Profile.css";

import placeholderprofile from "../../assets/placeholderprofile.png";

const Profile = () => {
  const [modalShow, setModalShow] = useState(false);

  const isAuth = sessionStorage.getItem("user-info");

  return (
    <div className="profileWrapper">
      <Container>
        <Image src={placeholderprofile} height={150}></Image>
        <h3>{isAuth ? `${JSON.parse(isAuth).username}` : "Guest"}</h3>
        <h5>Email: {isAuth ? `${JSON.parse(isAuth).email}` : "---"}</h5>
        <h5>
          Department: {isAuth ? `${JSON.parse(isAuth).department}` : "---"}
        </h5>
        <h5>
          Experience: {isAuth ? `${JSON.parse(isAuth).experience}` : "---"}
        </h5>
        {isAuth ? (
          <Button onClick={() => setModalShow(true)}>Change password</Button>
        ) : (
          ""
        )}
      </Container>
      <ChangePasswordModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Profile;
