import React from "react";
import { Stack } from "react-bootstrap";

import Post from "./Post";

export default function PostFeed({ posts }) {
  return (
    <Stack className="m-1" gap={3}>
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </Stack>
  );
}
