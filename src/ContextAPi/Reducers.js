const ProfileReducer = (state, action) => {
    switch (action.type) {
      case "IS_LOADING":
        return {
          ...state,
          is_loading: true,
        };
  
      case "API_ERROR":
        return {
          ...state,
          is_loading: false,
          is_error: true,
        };

  
  
      default:
        return state;
    }
  };
  
  export default ProfileReducer;
  