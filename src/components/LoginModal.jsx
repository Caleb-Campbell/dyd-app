import React, { useState } from "react";
import supabase from "../config/supabaseClient";
import { Modal, Form, Button, ButtonGroup, FormLabel } from "react-bootstrap";

export default function LoginModal({ show, toggle }) {
  const [email, setEmail] = useState("");
  const login = (e) => {
    e.preventDefault();
    signInWithEmail();
    toggle();
  };

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "http://localhost:5173/",
      },
    });
  }

  return (
    <>
      <Modal onHide={toggle} show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Login/Register</Modal.Title>
        </Modal.Header>
        <Form onSubmit={login} className="p-5">
          <FormLabel className="w-100">
            {" "}
            Enter your Email:
            <Form.Control
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className=""
            />
          </FormLabel>
          <Modal.Footer>
            <ButtonGroup>
              <Button type="submit">Login</Button>
              <Button variant="secondary" onClick={toggle}>
                Close
              </Button>
            </ButtonGroup>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
