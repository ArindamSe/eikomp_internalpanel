import {
    useContext,
    createContext,
   
    useReducer,
  } from "react";
  import AllProfile from "./Context";
  import axios from "axios";
  
  /* API URL */
  
  const createAccounturl = "https://backend.eikompapp.com/accounts/register/";
  const landingpageApi = "https://backend.eikompapp.com/";
  const AppContext = createContext();
  const ConfirmationEmail =
    "https://backend.eikompapp.com/accounts/";
  const loginurl = "https://backend.eikompapp.com/api/token/";
  const userCurrent = "https://backend.eikompapp.com/accounts/current_user/";
  const postSeanUrl="https://backend.eikompapp.com/compliance"
  /* Initial State */
  const intialState = {
    is_loading: false,
    is_error: false,
    craeteAccountStatus: "",
    loginStatus: "",
    userData: "",
    landingPages:[],
    buttonData:[],
    landingInput:"",
    sean:{},
    Discribtion:'',
    bargraphData:[],
    is_single_loading: false,
    is_single_error: false,
  };
  
  const storedValueToken = localStorage.getItem("token");
  
  const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AllProfile, intialState);
  
  
  
  
  
    const createAccount = async (data) => {
      console.log(data, "signup");
      dispatch({ type: "IS_LOADING" });
      try {
        const res = await axios.post(createAccounturl, data);
        const status = await res;
        console.log(status);
  
        dispatch({ type: "SET_API_DATA", payload: status });
      } catch (error) {
        dispatch({ type: "API_ERROR" });
        console.log(error, "signup");
      }
    };
  
  
  
  
  
    const statusupdate = () => {
      dispatch({ type: "SET_STATUS_DATA" });
    };
  
  
  
  
  
    const loginAccount = async (data) => {
      console.log(data, "sdugvcusfdb");
      dispatch({ type: "IS_LOADING" });
      try {
        const res = await axios.post(loginurl, data, {});
        const status = await res;
        console.log(data)
        dispatch({ type: "SET_API_LOGIN_DATA", payload: status.data });
      } catch (error) {
        alert("please write your correct mail and password")
        dispatch({ type: "API_ERROR" });
      }
    };
  
  
  
  
  
    const sendConfirmationEmail = async (data) => {
    
      dispatch({ type: "IS_LOADING" });
  
      try {
        const res = await axios.post(
          ConfirmationEmail,
          data.email, // Assuming this is the request body
          {
            headers: {
              Authorization: `Bearer ${storedValueToken}`,
              "Content-Type": "application/json", // Assuming JSON content type, adjust if needed
            },
          }
        );
  
        const status = await res;
        console.log(status, "statusssssssss");
  
        // Handle the response or dispatch further actions as needed
      } catch (error) {
        dispatch({ type: "API_ERROR" });
        // Handle the error or dispatch further actions as needed
      }
    };
  
  
  
  
  
    const currentUser = async (data) => {
      dispatch({ type: "IS_LOADING" });
  
      try {
        const res = await axios.get(
          userCurrent,
          // Assuming this is the request body
          {
            headers: {
              Authorization: `Bearer ${data.token}`,
              "Content-Type": "application/json", // Assuming JSON content type, adjust if needed
            },
          }
        );
  
        const status = await res;
        console.log(status, "current");
        dispatch({ type: "SET_USER_DATA", payload: status.data });
        // Handle the response or dispatch further actions as needed
      } catch (error) {
        console.log(error, "error");
        dispatch({ type: "API_ERROR" });
        // Handle the error or dispatch further actions as needed
      }
    };
  
  
  
  
    const landingPageData = async () => {
      dispatch({ type: "IS_LOADING" });
  
      try {
        const res = await axios.get(
          landingpageApi,
          // Assuming this is the request body
          {
            headers: {
              Authorization: `Bearer ${storedValueToken}`,
              "Content-Type": "application/json", // Assuming JSON content type, adjust if needed
            },
          }
        );
  
        const status = await res;
        console.log(status, "landssssssss");
        dispatch({ type: "SET_LANDING_DATA", payload: status });
        // Handle the response or dispatch further actions as needed
      } catch (error) {
        console.log(error, "error");
        dispatch({ type: "API_ERROR" });
        // Handle the error or dispatch further actions as needed
      }
    };
    const  handleTogglechange=(data)=>{
      console.log(data,"togglr")
      dispatch({ type: "SET_Toggle_DATA", payload: data });
    }
    const handleChangeInput=(data)=>{
      console.log(data,"input")
  
      dispatch({ type: "SET_LANDING_INPUT_DATA", payload: data });
    }
  
  // senario button click
    const handleClickSenarioButton=(id,event)=>{
      dispatch({ type: "SET_SENARIO_BUTTON_DATA", payload: id });
      
     
      
     
    } 
  
  
  const handleCLickpostSean=async(Id,itemtype)=>{
  
    const data ={
      id:Id,
      item_emotion:state.landingInput,
      item_type:itemtype
    }
    dispatch({ type: "IS_LOADING" });
  
    try {
      const res = await axios.post(
        postSeanUrl,
  
        data, // Assuming this is the request body
        {
          headers: {
            Authorization: `Bearer ${storedValueToken}`,
            "Content-Type": "application/json", // Assuming JSON content type, adjust if needed
          },
        }
      );
  
      const status = await res;
      console.log(status, "statusssssseanpostsss");
      dispatch({ type: "SET_Sean_DATA", payload: status.data.data });
      // Handle the response or dispatch further actions as needed
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      // Handle the error or dispatch further actions as needed
    }
  }
  
  
    return (
      <AppContext.Provider
        value={{
          ...state,
          createAccount,
          statusupdate,
          currentUser,
          sendConfirmationEmail,
          loginAccount,
          landingPageData,
          handleTogglechange,
          handleChangeInput,
          handleClickSenarioButton,
          handleCLickpostSean
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };
  
  const useProfileGlobal = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider, useProfileGlobal };
  