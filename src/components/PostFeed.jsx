import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import Post from "./Post";

export default function PostFeed({ posts }) {
  return (
    <Container>
      <Row>
        <Col lg={6} sm={12} className="mx-auto">
          <Stack className="m-1" gap={3}>
            {posts.map((post, index) => {
              return <Post key={index} post={post} />;
            })}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
