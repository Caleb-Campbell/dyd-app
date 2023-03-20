import React from "react";
import { Card, Carousel, Image, Button } from "react-bootstrap";

export default function Post({ post }) {
  return (
    <Card className="bg-dark">
      <Card.Body>
        <Card.Title className="text-light">{post.title}</Card.Title>
        {/* <Card.Title className="text-light">{post.author}</Card.Title> */}
        <Card.Text className="text-light">{post.caption}</Card.Text>
      </Card.Body>
      <Card.Footer className="justify-content-between">
        <p className="text-light">{post.created_at}</p>
        {/* {post.categories.map((category) => {
          return (
            <Button className="mx-2" variant="outline-secondary">
              {category}
            </Button>
          );
        })} */}
      </Card.Footer>
    </Card>
  );
}
