import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div>
        <Link to="/">
          <button className={style.btn}>Home</button>
        </Link>
      </div>
      <div className={style.SearchBar}>
        <SearchBar />
      </div>
      <div>
        <Link to="/dog">
          <button className={style.btn}>Create a dog!</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
