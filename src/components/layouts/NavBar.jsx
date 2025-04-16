import React from "react";
import { ChevronDown } from "lucide-react";
import LangSwithcer from "../LangSwithcer";

const NavBar = () => {
  return (
    <nav className="w-full bg-blue-400 flex justify-center items-center px-4 py-2 text-white">
      <LangSwithcer />
    </nav>
  );
};

export default NavBar;
