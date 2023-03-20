import React from "react";
import { Card, Carousel, Image, Button } from "react-bootstrap";
import "../styles/posts.css";

export default function Post({ post }) {
  return (
    <Card className="bg-dark">
      {/* <MultipleImgs photos={post.post_img_link} /> */}
      <Card.Img src={post.post_img_link} className="post-img" />
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

// const MultipleImgs = ({ photos }) => {
//   return (
//     <>
//       <Carousel>
//         {photos.map((photo, index) => {
//           <Carousel.Item key={index}>
//             <img src={photo} className="post-img" />
//           </Carousel.Item>;
//         })}
//       </Carousel>
//     </>
//   );
// };
