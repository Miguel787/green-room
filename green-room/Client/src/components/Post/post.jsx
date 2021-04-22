import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./post.scss";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="formPost__modal">
        <Modal.Title id="contained-modal-title-vcenter">Post</Modal.Title>
      </Modal.Header>
      <Modal.Body className="formPost__modal">
        <form className="formPost">
          <label>Let the people know what you got going on!</label>
          <textarea type="text" className="formPost__input"></textarea>
        </form>
      </Modal.Body>
      <Modal.Footer className="formPost__modal">
        <Link to="/userhome">
          <Button
            variant="light"
            onClick={props.onHide}
            className="hero__signUp"
          >
            Post
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

function Post() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="light"
        onClick={() => setModalShow(true)}
        className="userHome__post"
      >
        Post what's on your mind!
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Post;
