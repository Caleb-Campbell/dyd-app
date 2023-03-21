import { useState } from "react";
import { Button, Nav, Stack, ButtonGroup } from "react-bootstrap";
import { Routes, Route } from "react-router";

//components
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import PostFeed from "./components/PostFeed";
import Profile from "./components/Profile";
import NewPostButton from "./components/NewPostButton";
import NewPostModal from "./components/NewPostModal";
import LoginModal from "./components/LoginModal";

//utils

function App() {
  const [newPostModal, setNewPostModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const toggleModal = () => {
    setNewPostModal(!newPostModal);
  };

  const toggleLogin = () => {
    setLoginModal(!loginModal);
  };

  return (
    <>
      <Stack>
        <NavBar openLogin={toggleLogin} />
        <LoginModal toggle={toggleLogin} show={loginModal} />
      </Stack>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <NewPostButton toggle={toggleModal} />
      <NewPostModal toggle={toggleModal} show={newPostModal} />
    </>
  );
}

export default App;
