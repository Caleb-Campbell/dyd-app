import React, { useState } from "react";
import {
  Container,
  FormControl,
  Modal,
  Stack,
  Form,
  Button,
} from "react-bootstrap";

export default function NewPostModal({ show, toggle }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const handleChanges = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    }
    if (e.target.id === "link") {
      setLink(e.target.value);
    }
    if (e.target.id === "description") {
      setDescription(e.target.value);
    }
  };

  const submitNewPost = () => {};

  return (
    <Modal onHide={toggle} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>New Post</Modal.Title>
      </Modal.Header>
      <Stack>
        <Form className="p-5">
          <Form.Label> Post Title</Form.Label>
          <FormControl
            onChange={handleChanges}
            value={title}
            id="title"
            className="mb-4"
            type="text"
          />
          <Form.Label>Link to Image?</Form.Label>
          <FormControl
            onChange={handleChanges}
            value={link}
            id="link"
            className="mb-4"
            type="text"
          />
          <p>
            To save money on database hosting, please go to{" "}
            <a href="https://imgbb.com/">ImgBB</a> and host your image there,
            then insert the link.{" "}
          </p>
          <Form.Label> Description</Form.Label>
          <FormControl
            onChange={handleChanges}
            value={description}
            id="description"
            className="mb-4"
            as="textarea"
          />
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Post
            </Button>
            <Button onClick={toggle} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Stack>
    </Modal>
  );
}