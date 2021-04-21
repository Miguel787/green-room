import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Login.scss";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="form__modal">
        <Modal.Title id="contained-modal-title-vcenter">Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body className="form__modal">
        <form className="form">
          <label>Email</label>
          <input type="email" className="form__input"></input>
          <label>Password</label>
          <input type="password" className="form__input"></input>
        </form>
      </Modal.Body>
      <Modal.Footer className="form__modal">
        <Button variant="dark" onClick={props.onHide} className="hero__signUp">
          Log in
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Login() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="dark"
        onClick={() => setModalShow(true)}
        className="hero__logIn"
      >
        Log In
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Login;
