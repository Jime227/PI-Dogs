import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createADog, getTemperaments } from "../store/actions";
import styles from "./CreateADog.module.css";
import { useHistory } from "react-router-dom";

export default function NewDog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperaments = useSelector((state) => state.temperaments);

  const [chosenTemps, setChosenTemps] = useState([]);
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image: "",
    temperament: [],
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

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
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.name &&
      input.height &&
      input.weight &&
      input.life_span &&
      input.image &&
      input.temperament
    ) {
      dispatch(createADog(input));
      setInput({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image: "",
        temperament: [],
      });
      alert("Your dog was created!");
      history.push("/home");
    } else {
      alert("Please check if all the information is correct and complete.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create your own dog!</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.div}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            autoComplete="off"
            required
            minLength="3"
            maxLength="20"
          />
        </div>
        <div className={styles.div}>
          <label>Height: </label>
          <input
            type="text"
            name="height"
            value={input.height}
            onChange={handleInputChange}
            autoComplete="off"
            required
            min="15"
            max="150"
          />
        </div>
        <div className={styles.div}>
          <label>Weight: </label>
          <input
            type="text"
            name="weight"
            value={input.weight}
            onChange={handleInputChange}
            autoComplete="off"
            required
            min="1"
            max="80"
          />
        </div>
        <div className={styles.div}>
          <label>Life span: </label>
          <input
            type="text"
            name="life_span"
            value={input.life_span}
            onChange={handleInputChange}
            autoComplete="off"
            required
            min="1"
            max="20"
          />
        </div>
        <div className={styles.div}>
          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.div}>
          <label>Temperaments: </label>
          <select onChange={handleSelect}>
            <option value="all">Temperaments</option>
            {temperaments?.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
          <ul>
            <h3>Chosen temperaments: </h3>
            <div>
              {chosenTemps?.map((el) => (
                <div key={el}>
                  <p>{el}</p>
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
