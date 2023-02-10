import React from "react";
import { Button } from "react-bootstrap";

export default function NewPostButton({ toggle }) {
  return (
    <Button
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
      }}
      variant="info"
      onClick={toggle}
    >
      ➕
    </Button>
  );
}
