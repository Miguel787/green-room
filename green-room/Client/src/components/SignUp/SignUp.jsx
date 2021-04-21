import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="form__modal">
        <Modal.Title id="contained-modal-title-vcenter">Join us</Modal.Title>
      </Modal.Header>
      <Modal.Body className="form__modal">
        <form className="form">
          <label>First Name</label>
          <input type="name" className="form__input"></input>
          <label>Last Name</label>
          <input type="name" className="form__input"></input>
          <label>Email</label>
          <input type="email" className="form__input"></input>
          <label>Password</label>
          <input type="password" className="form__input"></input>
          <label>Confirm Password</label>
          <input type="password" className="form__input"></input>
        </form>
      </Modal.Body>
      <Modal.Footer className="form__modal">
        <Link to="/userhome">
          <Button
            variant="dark"
            onClick={props.onHide}
            className="hero__signUp"
          >
            Join Now!
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

function SignUp() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="dark"
        onClick={() => setModalShow(true)}
        className="hero__signUp"
      >
        Join
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default SignUp;
