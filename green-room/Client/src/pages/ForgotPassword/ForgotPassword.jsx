import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import "./ForgotPassword.scss";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <section className="pForget__box">
        <div className="pForget">
          <Card className="pforget__card">
            <Card.Body className="pforget__card" className="form__modal">
              <h2 className="text-center mb-4">Password Reset</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit} className="form__modal">
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Button
                  disabled={loading}
                  varient="dark"
                  className="pForget__button"
                  type="submit"
                >
                  Reset Password
                </Button>
              </Form>
              <div className="">
                <Link to="/" className="form__noDec">
                  Login
                </Link>
              </div>
            </Card.Body>
          </Card>
          <div className="form__modal">
            Need an account?{" "}
            <Link to="/" className="form__noDec">
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
