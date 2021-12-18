export const initialAuthState = {
  isAuthenticated: false,
  user: {
    name: "",
    email: "",
  },
};

export const types = {
  authLogin: "login",
  authLogout: "logout",
  authEditName: "editName",
  authEditMail: "editMail",
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case types.authLogout:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case types.authEditName:
      return {
        ...state,
        user: action.payload,
      };
    case types.authEditMail:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default AuthReducer;
