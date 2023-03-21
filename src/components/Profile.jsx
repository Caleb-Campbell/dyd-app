import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { Button, Card } from "react-bootstrap";

const Profile = ({ userAuth, setUserAuth, user, setUser }) => {
  const getCurrentUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
  };

  useEffect(() => {
    // getCurrentUser();
    currentSession();
  }, []);

  const currentSession = async () => {
    const stuff = await supabase.auth.getSession();
    setUser(stuff.data.session.user);

    if (stuff.data.session.user.role === "authenticated") {
      setUserAuth(true);
    }
  };

  return (
    <Card className="mt-5">{userAuth && <h2>User: {user.email}</h2>}</Card>
  );
};

export default Profile;
