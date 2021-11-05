import axios from "axios";

export function getAllDogs() {
  return async (dispatch) => {
    const dogs = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: "GET_DOGS",
      payload: dogs.data,
    });
  };
}

export function searchByName(name) {
  return async (dispatch) => {
    try {
      const dogByName = await axios.get(
        `http://localhost:3001/dogs?name=${name}`
      );
      return dispatch({
        type: "SEARCH_BY_NAME",
        payload: dogByName.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetails(id) {
  return async (dispatch) => {
    try {
      const dogDetails = await axios.get(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: dogDetails.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createADog(input) {
  return async (dispatch) => {
    try {
      const newDog = await axios.post("http://localhost:3001/dog", input);
      return dispatch({
        type: "CREATE_A_DOG",
        payload: newDog,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTemperaments() {
  return async (dispatch) => {
    const temperaments = await axios.get("http://localhost:3001/temperament");
    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: temperaments.data,
    });
  };
}
