import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { Button, Card } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState(null);
  supabase.auth
    .getUser()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return (
    <Card className="mt-5">
      {/* {user && <h1>{user}</h1>} */}
      {/* <Card.Img
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
      </Card.Body> */}
    </Card>
  );
};

export default Profile;
