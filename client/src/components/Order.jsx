import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderZA,
  orderAZ,
  getTemperaments,
  weightZA,
  weightAZ,
  filterBy,
  filter,
  getAllDogs,
} from "../store/actions";
import style from "./Order.module.css";

export default function Order() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allTemps = useSelector((state) => state.temperaments);
  function orderA(e) {
    e.preventDefault();
    dispatch(orderAZ());
  }

  function orderZ(e) {
    e.preventDefault();
    dispatch(orderZA());
  }

  function weightA(e) {
    e.preventDefault();
    dispatch(weightAZ());
  }

  function weightZ(e) {
    e.preventDefault();
    dispatch(weightZA());
  }

  function gettingAllDogs(e) {
    dispatch(getAllDogs());
  }

  function apiOrDb(e) {
    dispatch(filterBy(e.target.value));
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleChange(e) {
    dispatch(filter(e.target.value));
  }

  return (
    <div className={style.container}>
      <button className={style.btn} onClick={(e) => orderA(e)}>
        A to Z
      </button>
      <button className={style.btn} onClick={(e) => orderZ(e)}>
        Z to A
      </button>
      <button className={style.btn} onClick={(e) => weightA(e)}>
        Weight: - to +
      </button>
      <button className={style.btn} onClick={(e) => weightZ(e)}>
        Weight: + to -
      </button>
      <button
        className={style.btn}
        value="DB"
        type="submit"
        onClick={(e) => apiOrDb(e)}
      >
        NEW DOGS
      </button>

      <button
        className={style.btn}
        value="ALL"
        type="submit"
        onClick={(e) => gettingAllDogs(e)}
      >
        ALL
      </button>

      <select className={style.filter} onChange={(e) => handleChange(e)}>
        {allTemps.map((t) => (
          <option value={t.name} key={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}
