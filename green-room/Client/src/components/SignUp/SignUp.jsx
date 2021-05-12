import React, { useRef, useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";

function MyVerticallyCenteredModal(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      props.history.push("/userhome");
      props.hide();
    } catch {
      setError("Failed to create an account");
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
        <Modal.Title id="contained-modal-title-vcenter">Join us</Modal.Title>
      </Modal.Header>
      <Modal.Body className="form__modal">
        <form className="form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            ref={emailRef}
            className="form__input"
            required
          ></input>
          <label>Password</label>
          <input
            type="password"
            ref={passwordRef}
            className="form__input"
            required
          ></input>
          <label>Confirm Password</label>
          <input
            type="password"
            ref={passwordConfirmRef}
            className="form__input"
            required
          ></input>
        </form>
        {error && <Alert variant="danger">{error}</Alert>}
      </Modal.Body>
      <Modal.Footer className="form__modal">
        <div> Already have an account? Log in!</div>
        <Button
          disabled={loading}
          variant="dark"
          onClick={handleSubmit}
          className="hero__signUp"
        >
          Join Now!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function SignUp({ history }) {
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
        history={history}
      />
    </>
  );
}

export default SignUp;
