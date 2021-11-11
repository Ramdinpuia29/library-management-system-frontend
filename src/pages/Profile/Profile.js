import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import ChangePasswordModal from "../../components/ChangePasswordModal";
import "./Profile.css";

import placeholderprofile from "../../assets/placeholderprofile.png";

const Profile = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="profileWrapper">
      <Container>
        <Image src={placeholderprofile} height={150}></Image>
        <h3>Username</h3>
        <h5>Department: CSE</h5>
        <h5>Experience: 5 years</h5>
        <Button onClick={() => setModalShow(true)}>Change password</Button>
      </Container>
      <ChangePasswordModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Profile;
