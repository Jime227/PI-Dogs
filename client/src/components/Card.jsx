import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, img, id, temperament }) {
  return (
    <div className={styles.container} key={id}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="A dog" />
      </div>
      <div className={styles.textContainer}>
        <h3>{name}</h3>
        <h4>Temperaments</h4>
        <p>{temperament}</p>
        <Link to={`/dogs/${id}`}>
          <button className={styles.btn}>Do you want to know more?</button>
        </Link>
      </div>
    </div>
  );
}
