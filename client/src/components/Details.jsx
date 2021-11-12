import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../store/actions";
import styles from "./Details.module.css";
import { Link } from "react-router-dom";

export default function Details({ match }) {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const { id } = match.params;
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  function renderDog(dog) {
    if (id.length < 10) {
      return (
        <div className={styles.container} key={id}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={details.img} alt="Dog" />
          </div>
          <div className={styles.textContainer}>
            <h2>{details.name}</h2>
            <h4>Temperaments: {details.temperament}</h4>
            <h4>Height: {details.height} centimeters</h4>
            <h4>Weight: {details.weight} kilograms</h4>
            <h4>Life span: {details.life_span}</h4>
            <Link to="/home">
              <button className={styles.btn}>Back to all the dogs!</button>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.container} key={id}>
          {console.log(details)}

          <div className={styles.imgContainer}>
            <img className={styles.img} src={details?.image} alt="Dog" />
          </div>
          <div className={styles.textContainer}>
            <h2>{details.name}</h2>
            <h4>Temperaments: {details?.temperament}</h4>
            <h4>Height: {details?.height} centimeters</h4>
            <h4>Weight: {details?.weight} kilograms</h4>
            <h4>Life span: {details?.life_span} years</h4>
            <Link to="/home">
              <button className={styles.btn}>Back to all the dogs!</button>
            </Link>
          </div>
        </div>
      );
    }
  }
  return (
    <div>
      {typeof details === "undefined" ? (
        <h1>Loading...</h1>
      ) : (
        renderDog(details)
      )}
    </div>
  );
}
