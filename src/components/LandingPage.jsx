import React, { useState, useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router";
import LoginButton from "./LoginButton";
import PostFeed from "./PostFeed";

import supabase from "../config/supabaseClient";

export default function LandingPage() {
  const navigate = useNavigate();
  const [fetchError, setFetchError] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from("Posts").select();

    // if (error) {
    //   setFetchError("Could not fetch");
    //   console.log(error);
    //   setPosts(null);
    // }

    if (data) {
      setPosts(data);
      console.log(data);
      setFetchError(null);
    }
  };

  return (
    <Stack gap={2} className="mt-5">
      <h1 className="text-center fw-bold" style={{ fontSize: "6em" }}>
        Dyd
      </h1>
      <h2 className="text-center text-secondary">Share what you dyd.</h2>
      <LoginButton width="25" />

      {/* <Button
        onClick={() => {
          navigate("/feed");
        }}
        className="w-25 mx-auto"
      >
        Go to Feed
      </Button> */}
      {posts && <PostFeed posts={posts} />}
    </Stack>
  );
}