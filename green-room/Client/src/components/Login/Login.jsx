import React, { useRef, useState } from "react";
import "./Login.scss";
import { Modal, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      props.history.push("/userhome");
      props.hide();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

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
        {error && <Alert variant="danger">{error}</Alert>}
        <form className="form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" className="form__input" ref={emailRef}></input>
          <label>Password</label>
          <input
            type="password"
            className="form__input"
            ref={passwordRef}
          ></input>
          <Link to="/forgotpassword" className="form__noDec">
            <div> Forgot Password?</div>
          </Link>
        </form>
      </Modal.Body>
      <Modal.Footer className="form__modal">
        <div> Need an account? Join now</div>
        <Button
          disabled={loading}
          variant="dark"
          onClick={handleSubmit}
          className="hero__signUp"
        >
          Log in
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Login({ history }) {
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
        history={history}
      />
    </>
  );
}

export default Login;
