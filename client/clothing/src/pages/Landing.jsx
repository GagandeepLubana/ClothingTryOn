import React from "react";
import Home from "./home";
import { useAuth0 } from "@auth0/auth0-react";
import TryOn from "./TryOn";

export default function Landing() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="w-screen h-screen">Loading ...</div>;
  }

  if (isAuthenticated) {
    return <TryOn />;
  }

  return <Home />;
}
