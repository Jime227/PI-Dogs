const initialState = {
  dogs: [],
  temperaments: [],
  details: {},
  createdDogs: [],
  filter: [],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
      };
    case "SEARCH_BY_NAME":
      return {
        ...state,
        dogs: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    case "CREATE_A_DOG":
      return {
        ...state,
        createdDogs: action.payload,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };
    case "ORDER_A":
      return {
        ...state,
        dogs: action.payload,
      };
    case "ORDER_Z":
      return {
        ...state,
        dogs: action.payload,
      };
    case "WEIGHT_A":
      return {
        ...state,
        dogs: action.payload,
      };
    case "WEIGHT_Z":
      return {
        ...state,
        dogs: action.payload,
      };
    case "DB":
      return {
        ...state,
        dogs: state.dogs.filter((e) => e.id.length > 6),
      };

    case "ALL":
      return {
        ...state,
        dogs: state.dogs,
      };
    case "FILTER_TEMPERAMENTS":
      const filtered =
        action.payload === null
          ? state.dogs
          : state.dogs.filter((d) => {
              if (d.temperament && d.temperament.includes(action.payload))
                return d;
            });
      return {
        ...state,
        dogs: filtered,
      };
    default:
      return state;
  }
}

export default reducers;
