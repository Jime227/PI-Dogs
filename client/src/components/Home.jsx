import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDogs,
  searchByName,
  getDetails,
  createADog,
} from "../store/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Pagination from "./Pagination";
import styles from "./Home.module.css";
import NavBar from "./NavBar";
import Error from "./Error";

export default function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsprePage] = useState(8);
  const pages = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles.cardContainer}>
        {currentDogs &&
          currentDogs.map((d) => (
            <Card
              name={d.name}
              temperament={d.temperament}
              img={d.img}
              id={d.id}
            />
          ))}
        <Pagination
          dogsPerPage={dogsPerPage}
          totalDogs={dogs.length}
          pageNumber={pages}
        />
      </div>
    </div>
  );
}
