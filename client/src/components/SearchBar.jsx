import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../store/actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = async (e) => {
    await setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByName(search));
    setSearch("");
  };

  return (
    <div className={style.container}>
      <form>
        <input
          className={style.input}
          type="text"
          placeholder="Are you looking for a dog?"
          value={search}
          onChange={(e) => handleChange(e)}
        />
        <button
          className={style.btn}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        ></button>
      </form>
    </div>
  );
}

module.export = SearchBar;
