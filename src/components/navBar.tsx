import React from "react";
import Link from "next/link";
import './glow.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBriefcase,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <div className="bg-background py-4 text-text md:w-80 md:h-full justify-between md:border-b-0 md:border-e border-b border-primary flex md:flex-col md:items-start items-center gap-4 px-4">
      <Link href="/" className="">
        <title>Home</title>
        <FontAwesomeIcon
          icon={faHome}
          className="h-10 w-10 p-2 rounded-xl shadow-sm shadow-primary border border-primary"
        />
      </Link>
      <Link href="/Jobs">
        <FontAwesomeIcon
          icon={faSearch}
          className="h-10 w-10 p-2 rounded-xl border border-primary shadow-sm shadow-primary"
        />
      </Link>
      <Link href="/saved-jobs">
        <FontAwesomeIcon
          icon={faBriefcase}
          className="h-10 w-10 p-2 rounded-xl border border-primary shadow-sm shadow-primary"
        />
      </Link>
      <Link href="/add">
        <FontAwesomeIcon
          icon={faAdd}
          className="h-10 w-10 p-2 rounded-xl border border-primary shadow-sm shadow-primary"
        />
      </Link>
    </div>
  );
};

export default NavBar;
