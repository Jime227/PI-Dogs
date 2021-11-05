const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  details: {},
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
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
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };
    default:
      return state;
  }
}

export default reducers;
