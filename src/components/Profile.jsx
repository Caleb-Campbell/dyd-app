import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card } from "react-bootstrap";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  user.followers = 5;
  user.following = 17;

  return (
    isAuthenticated && (
      <Card className="mt-5">
        <Card.Img
          className="w-50 mx-auto"
          variant="top"
          src={user.picture}
          alt={user.name}
        />
        <Card.Body>
          <Card.Title className="text-center">{user.name}</Card.Title>
          <Card.Text className="text-center">{user.email}</Card.Text>
          <div
            className="mx-auto"
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <label className="mx-5 text-center">
              Followers
              <Button>{user.followers}</Button>
            </label>
            <label className="mx-5 text-center">
              Following
              <Button>{user.following}</Button>
            </label>
          </div>
        </Card.Body>
      </Card>

      // <div>
      //   <img src={user.picture} alt={user.name} />
      //   <h2>{user.name}</h2>
      //   <p>{user.email}</p>
      // </div>
    )
  );
};

export default Profile;
