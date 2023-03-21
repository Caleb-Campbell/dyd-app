import { useState, useEffect } from "react";
import { Button, Nav, Stack, ButtonGroup } from "react-bootstrap";
import { Routes, Route } from "react-router";
import supabase from "./config/supabaseClient";

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
  const [userAuth, setUserAuth] = useState(false);
  const [user, setUser] = useState(null);

  const toggleModal = () => {
    setNewPostModal(!newPostModal);
  };

  const toggleLogin = () => {
    setLoginModal(!loginModal);
  };

  useEffect(() => {
    // getCurrentUser();
    currentSession();
  }, []);

  const currentSession = async () => {
    const stuff = await supabase.auth.getSession();
    if (stuff) {
      setUser(stuff.data.session.user);
      if (stuff.data.session.user.role === "authenticated") {
        setUserAuth(true);
      }
    }
  };

  return (
    <>
      <Stack>
        <NavBar setUserAuth={setUserAuth} openLogin={toggleLogin} />
        <LoginModal toggle={toggleLogin} show={loginModal} />
      </Stack>
      <Routes>
        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              setUser={setUser}
              auth={userAuth}
              setAuth={setUserAuth}
            />
          }
        />
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      {userAuth && <NewPostButton toggle={toggleModal} />}
      <NewPostModal
        userAuth={userAuth}
        toggle={toggleModal}
        show={newPostModal}
      />
    </>
  );
}

export default App;
