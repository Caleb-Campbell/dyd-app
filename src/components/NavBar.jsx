import React from "react";
import supabase from "../config/supabaseClient";
import { Nav, ButtonGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import profilePlaceholder from "../assets/profile_placeholder.png";

export default function NavBar({ openLogin, setUserAuth }) {
  const navigate = useNavigate();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setUserAuth(false);
  }

  return (
    <Nav className="justify-content-between p-3">
      <Nav.Item>
        <img
          style={{ width: "2em" }}
          src={profilePlaceholder}
          onClick={() => {
            navigate("/profile");
          }}
        />
      </Nav.Item>
      <Nav.Item
        onClick={() => {
          navigate("/");
        }}
      >
        <h3>Dyd</h3>
      </Nav.Item>
      <Nav.Item>
        <ButtonGroup>
          <Button onClick={openLogin}>Login</Button>
          <Button onClick={signOut}>Logout</Button>
        </ButtonGroup>
      </Nav.Item>
    </Nav>
  );
}
