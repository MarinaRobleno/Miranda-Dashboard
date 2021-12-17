
const saveAuthState = (state) => {  
    localStorage.setItem('auth', JSON.stringify(state));  
  };
  
  export function AuthReducer (state, action) {
      switch (action.type) {
        case "LOGIN":
          saveAuthState({
            isAuthenticated: true,
            user: action.user
          });
          return {
            ...state,
            isAuthenticated: true,
            user: action.payload
          };
  
        case "LOGOUT":
          saveAuthState({
            isAuthenticated: false,
            user: null
          });
          return {  
          ...state,
            isAuthenticated: false,
            user: null
          };
        case "CHANGE_PASSWORD":
          saveAuthState({
            isAuthenticated: true,
            user: action.user
          });
            return {
                ...state,
                user: action.payload
            };
        case "CHANGE_USERNAME":
          saveAuthState({
            isAuthenticated: true,
            user: action.user
          });
            return {
                ...state,
                user: action.payload
            };
        default:
          return state;
      }
    }