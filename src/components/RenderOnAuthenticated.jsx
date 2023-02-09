import React from "react";
import { Container } from "react-bootstrap";
import PostFeed from "./PostFeed";

export default function RenderOnAuthenticated({
  isAuthenticated,
  isLoading,
  posts,
}) {
  return (
    <>
      {isLoading && <h3>Loading Feed...</h3>}
      <Container>
        <PostFeed posts={posts} />
      </Container>
    </>
  );
}
