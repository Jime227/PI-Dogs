import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../store/actions";
import styles from "./Details.module.css";
import { Link } from "react-router-dom";

export default function Details({ match }) {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    // if para ver si es uuid o no
    <div className={styles.container} key={match.params.id}>
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
}
