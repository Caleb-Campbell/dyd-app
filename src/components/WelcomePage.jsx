import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router";
import LoginButton from "./LoginButton";

export default function WelcomePage({ isAuthenticated }) {
  const navigate = useNavigate();

  return (
    <Stack gap={2} className="mt-5">
      <h1 className="text-center fw-bold" style={{ fontSize: "6em" }}>
        Dyd
      </h1>
      <h2 className="text-center text-secondary">Share what you dyd.</h2>
      {!isAuthenticated ? (
        <LoginButton width="50" />
      ) : (
        <Button
          onClick={() => {
            navigate("/feed");
          }}
          className="w-50 mx-auto"
        >
          Go to Feed
        </Button>
      )}
    </Stack>
  );
}
