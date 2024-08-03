import React from "react";
import LogIn from "../components/LogIn";
import icon from "../images/icon.png";
import model from "../images/model.jpg";
import garment from "../images/garment.jpg";
import converted from "../images/converted.jpg";
import plus from "../images/plus.png";
import equals from "../images/equals.png";
import Logout from "../components/Logout"
import Home from "./home";
import { useAuth0 } from "@auth0/auth0-react";
import TryOn from "./TryOn";

export default function Landing() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;

  }

  if (isAuthenticated) {
    return <TryOn />
  }

  return < Home/>
}
