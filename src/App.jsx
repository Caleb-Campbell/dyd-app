import { useState } from "react";
import { Button, Nav, Stack, ButtonGroup } from "react-bootstrap";
import { Routes, Route } from "react-router";

//components
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import PostFeed from "./components/PostFeed";
import ProfileView from "./components/ProfileView";
import NewPostButton from "./components/NewPostButton";
import NewPostModal from "./components/NewPostModal";

//utils

function App() {
  const [newPostModal, setNewPostModal] = useState(false);

  const newPost = () => {};
  const toggleModal = () => {
    setNewPostModal(!newPostModal);
  };

  return (
    <>
      <Stack>
        <NavBar />
        <NewPostButton toggle={toggleModal} />
        <NewPostModal toggle={toggleModal} show={newPostModal} />
      </Stack>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route path="profile-view" element={<ProfileView />} />
      </Routes>
    </>
  );
}

export default App;
