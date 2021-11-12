import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../store/actions";
import Card from "./Card";
import Pagination from "./Pagination";
import styles from "./Home.module.css";
import NavBar from "./NavBar";
import Order from "./Order";

export default function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsperPage] = useState(8);
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
      <Order />
      <div className={styles.cardContainer}>
        {currentDogs &&
          currentDogs?.map((d) => (
            <Card
              name={d.name}
              temperament={d.temperament}
              img={d.img ? d.img : d.image}
              id={d.id}
              key={d.id}
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
