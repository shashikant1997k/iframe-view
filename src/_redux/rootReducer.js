let userDetails = localStorage.getItem("userDetails");
let tkn = localStorage.getItem("authToken");
let urls = localStorage.getItem("urls");

export const initialState = {
  user:
    userDetails !== null && JSON.parse(userDetails)
      ? JSON.parse(userDetails)
      : null,
  token: tkn !== null ? tkn : null,
  urlAddress:
    urls !== null && JSON.parse(urls)
      ? JSON.parse(urls)
      : { input1: "", input2: "" },
};

export const actionTypes = {
  SET_USER: "SET_USER",
  USER_LOGOUT: "USER_LOGOUT",
  URL_ENTERED: "URL_ENTERED",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.data.userDetails,
        token: action.data.token,
      };
    case actionTypes.USER_LOGOUT:
      localStorage.clear();
      return {};

    case actionTypes.URL_ENTERED:
      console.log(action);
      return {
        ...state,
        urlAddress: action.inputUrl,
      };

    default:
      return state;
  }
};

export default rootReducer;
