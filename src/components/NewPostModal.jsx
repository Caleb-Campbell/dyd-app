import React, { useState } from "react";
import supabase from "../config/supabaseClient";
import {
  Container,
  FormControl,
  Modal,
  Stack,
  Form,
  Button,
} from "react-bootstrap";

export default function NewPostModal({ show, toggle, userAuth }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState();

  const handleChanges = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
      on;
    }
    if (e.target.id === "link") {
      setLink(e.target.value);
    }
    if (e.target.id === "description") {
      setDescription(e.target.value);
    }
  };

  const submitNewPost = (e) => {
    e.preventDefault();
    if (userAuth) {
      const newRow = {
        title: title,
        post_img_link: link,
        caption: description,
      };
      insertPost(newRow);
    }
  };

  const insertPost = async (newPost) => {
    const { data, error } = await supabase.from("Posts").insert([newPost]);

    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <Modal onHide={toggle} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>New Post</Modal.Title>
      </Modal.Header>
      <Stack>
        <Form onSubmit={submitNewPost} className="p-5">
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
          <Form.Label> Caption</Form.Label>
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
