import React, { useState, useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router";
import PostFeed from "./PostFeed";

import supabase from "../config/supabaseClient";
import NewPostButton from "./NewPostButton";
import NewPostModal from "./NewPostModal";

export default function LandingPage() {
  const navigate = useNavigate();
  const [fetchError, setFetchError] = useState(null);
  const [posts, setPosts] = useState(null);
  const [postModal, setPostModal] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from("Posts").select();

    if (error) {
      setFetchError("Could not fetch");
      setPosts(null);
    }

    if (data) {
      setPosts(data);
      setFetchError(null);
    }
  };

  return (
    <Stack gap={2} className="mt-5">
      <h1 className="text-center fw-bold" style={{ fontSize: "6em" }}>
        Dyd
      </h1>
      <h2 className="text-center text-secondary">Share what you dyd.</h2>

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
