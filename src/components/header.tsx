import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // let headr = document.getElementById("main-header");
  // let headrLength=headr?.offsetHeight;
  return (
    <div
      id="main-header"
      className="bg-background text-text border-b border-primary p-4 flex justify-between items-center"
    >
      <FontAwesomeIcon icon={faBars} className="h-12" />
      <FontAwesomeIcon
        icon={faUser}
        className="h-12 p-1 border rounded rounded-t-2xl border-primary shadow-sm shadow-primary"
      />
    </div>
  );
};

export default Header;
