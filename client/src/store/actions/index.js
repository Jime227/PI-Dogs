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

export function orderAZ() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/dogs").then((response) => {
      const orderA = response.data.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      dispatch({
        type: "ORDER_A",
        payload: orderA,
      });
    });
  };
}

export function orderZA() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/dogs").then((response) => {
      const orderZ = response.data.sort((b, a) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      dispatch({
        type: "ORDER_Z",
        payload: orderZ,
      });
    });
  };
}
export function weightAZ() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/dogs").then((response) => {
      const weightA = response.data.sort((a, b) => {
        if (Number(a.weight) > Number(b.weight)) return 1;
        if (Number(a.weight) < Number(b.weight)) return -1;
        return 0;
      });
      dispatch({
        type: "WEIGHT_A",
        payload: weightA,
      });
    });
  };
}

export function weightZA() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/dogs").then((response) => {
      const weightZ = response.data.sort((b, a) => {
        if (Number(a.weight) > Number(b.weight)) return 1;
        if (Number(a.weight) < Number(b.weight)) return -1;
        return 0;
      });
      dispatch({
        type: "WEIGHT_Z",
        payload: weightZ,
      });
    });
  };
}
export function filterBy(value) {
  if (value === "DB") {
    return {
      type: "DB",
    };
  } else if (value === "ALL") {
    return {
      type: "ALL",
    };
  }
}
export function filter(payload) {
  return {
    type: "FILTER_TEMPERAMENTS",
    payload,
  };
}
