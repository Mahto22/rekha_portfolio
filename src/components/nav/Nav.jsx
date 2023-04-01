import React, { useState } from "react";
import "./nav.css";
import { BiHome } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBookmarks } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} 
      className={activeNav === "#" ? "active" : ""}>
        <BiHome></BiHome>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser></AiOutlineUser>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBookmarks></BsBookmarks>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "portfolio" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen></AiOutlineFundProjectionScreen>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BiMessageDetail></BiMessageDetail>
      </a>
    </nav>
  );
};

export default Nav;