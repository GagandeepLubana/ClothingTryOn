import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogIn() {
  const { logout } = useAuth0();

  return (
    <a
      onClick={() => logout()}
      type="button"
      className="text-black bg-gradient-to-r from-[#F0ACFF] to-[#A8B5FF] transition-all duration-500 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
    >
      Log Out
    </a>
  );
}
