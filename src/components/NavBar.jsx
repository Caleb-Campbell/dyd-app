import React from "react";
import { Nav, ButtonGroup, Button } from "react-bootstrap";
import LogoutButton from "./LogoutButton";
import { useNavigate } from "react-router";

import profilePlaceholder from "../assets/profile_placeholder.png";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Nav className="justify-content-between p-3">
      <Nav.Item>
        <img
          style={{ width: "2em" }}
          src={profilePlaceholder}
          onClick={() => {
            navigate("profile-view");
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
          <Button>Login</Button>
          <LogoutButton>Logout</LogoutButton>
        </ButtonGroup>
      </Nav.Item>
    </Nav>
  );
}
