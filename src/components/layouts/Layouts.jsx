import React from "react";
import NavBar from "./NavBar";
import { Header } from "./Header";

const Layouts = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NavBar />
      <main className="flex-grow ">{children}</main>
    </div>
  );
};

export default Layouts;
