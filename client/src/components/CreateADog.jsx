import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createADog, getTemperaments } from "../store/actions";
import styles from "./CreateADog.module.css";
import { Link, useHistory } from "react-router-dom";

export default function NewDog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image: "",
    temperaments: [],
  });
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);
  const temperaments = useSelector((state) => state.temperaments);
  const [chosenTemps, setChosenTemps] = useState([]);
  const handleInputChange = function (e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelect = (e) => {
    let index = e.target.selectedIndex;
    setChosenTemps((temps) => [...temps, e.target.options[index].text]);
    setInput((inputs) => ({
      ...inputs,
      temperaments: [...inputs.temperaments, Number(e.target.value)],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.name &&
      input.height &&
      input.weight &&
      input.life_span &&
      input.image &&
      input.temperaments
    ) {
      dispatch(createADog(input));
      setInput({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image: "",
        temperaments: [],
      });
    } else {
      alert("Please check if all the information is correct and complete.");
    }
    history.push("/home");
  };

  return (
    <div className={styles.container}>
      <h1>Create your own dog!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label>Height: </label>
          <input
            type="text"
            name="height"
            value={input.height}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label>Weight: </label>
          <input
            type="text"
            name="weight"
            value={input.weight}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label>Life span: </label>
          <input
            type="text"
            name="life_span"
            value={input.life_span}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label>Temperaments: </label>
          <select onChange={handleSelect}>
            <option value="all">Temperaments</option>
            {temperaments?.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
          <ul>
            <h3>Chosen temperaments: </h3>
            <div>
              {chosenTemps?.map((t, i) => (
                <div key={i}>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </ul>
        </div>
        <div>
          <button className={styles.btn} type="submit" onClick={handleSubmit}>
            Create!
          </button>
        </div>
      </form>
    </div>
  );
}
