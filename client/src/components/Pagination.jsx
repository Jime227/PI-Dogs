import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ dogsPerPage, totalDogs, pageNumber }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={styles.container}>
      <div className={styles.numberBlock}>
        {pageNumber &&
          pageNumbers.map((number) => {
            return (
              <a
                className={styles.number}
                key={number}
                onClick={() => pageNumber(number)}
              >
                {number}
              </a>
            );
          })}
      </div>
    </nav>
  );
};

export default Pagination;
