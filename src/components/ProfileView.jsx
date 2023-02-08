import React from "react";
import { Card, Stack } from "react-bootstrap";
import LoginButton from "./LoginButton";
import Profile from "./Profile";

export default function ProfileView({ isAuthenticated }) {
  return (
    <>
      <Stack>
        {isAuthenticated ? <Profile /> : <LoginButton width={50} />}
      </Stack>
    </>
  );
}
