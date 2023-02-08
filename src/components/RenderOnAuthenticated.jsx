import React from "react";
import PostFeed from "./PostFeed";

export default function RenderOnAuthenticated({
  isAuthenticated,
  isLoading,
  posts,
}) {
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {!isAuthenticated && <h2 className="text-center">Sign in to See Feed</h2>}
      {isAuthenticated && <PostFeed posts={posts} />}
      {/* <Button onClick={()=>{console.log(user)}}>Get User Info</Button> */}
    </>
  );
}
