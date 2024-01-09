import axios from "axios";
import { createContext, useContext,useEffect,useReducer } from "react";
import { useState } from "react";
import reducer from "../Reducer/AuthReducer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

const initialState={
  ProfileLoading:false,
  Profile_list:{},
  isError:false,
  memberShip:{},
  memberShipLoad:false,
  UserData:{},
  userdataLoad:false,
}

const API='https://admin.faibnetwork.co.uk/api/user/loggeduser';
const API1='https://admin.faibnetwork.co.uk/api/user/getmembership';

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState([]);
    const [state,dispatch]=useReducer(reducer,initialState);

    const Profile = async (url) => {
      dispatch({ type: "SET_Profile_LOADING" });
      try {
        const token = localStorage.getItem('token');
        console.log('tokenprofile', token)
        const res = await axios.post(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token // Add a space here
          }
        });
        console.log('profile', res);
        if (res.data.status === 'Success') {
          const Profile_list = await res.data.loggeduserdata;
          localStorage.setItem("UserID", res.data.loggeduserdata.id);
          localStorage.setItem("user_email", res.data.loggeduserdata.email);
          dispatch({ type: "SET_API_DATA", payload: Profile_list });
        }
        console.log("AuthContext", res.data.loggeduserdata);
      } catch (err) {
        dispatch({ type: "API_ERROR" });
        console.log(err);
      }
    }

 const CancelMemberShip=async(plan_id)=>{
  console.log(plan_id);
  try{
    const user_id=localStorage.getItem('UserID')
    const id=parseInt(user_id)
   const res=await axios.get(` https://admin.faibnetwork.co.uk/api/user/cancel-membership/${id}/${plan_id}`,{
    headers: {
      'Content-Type': 'application/json',
      // Include any required headers
    },
    withCredentials: true, // Enable CORS credentials (cookies, headers)
  });
   if(res.data.success==="Membership Cancel"){
    console.log(res.data.success);
    toast.error(res.data.success, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
  }catch(err){
   console.log(err)
  }
}

const  getALLMEMBERSHIP = async (url) => {
  dispatch({type:"SET_Member_LOADING"})
  try {
    const res = await axios.get(url,{
      headers: {
        'Content-Type': 'application/json',
        // Include any required headers
      },
      withCredentials: true, // Enable CORS credentials (cookies, headers)
    });
    const memberShip=await res.data;
    console.log(memberShip);
    dispatch({type:"SET_Membership_DATA",payload:memberShip})
  } catch (error) {
    dispatch({type:"API_ERROR"})
    console.log(error);
  }
  };

  const getUserData=async()=>{
    dispatch({type:"SET_UserData_LOADING"})
try{
  const user_id=localStorage.getItem('UserID')
  const id=parseInt(user_id)
  const res=await axios.get(`https://admin.faibnetwork.co.uk/api/user/get-membership-first-page-details/${id}`,{
    headers: {
      'Content-Type': 'application/json',
      // Include any required headers
    },
    withCredentials: true, // Enable CORS credentials (cookies, headers)
  });
  if(res.status===200){
    const UserData=await res.data.data
    dispatch({type:"SET_UserData_DATA",payload:UserData})
  }
}
catch(err){
  dispatch({type:"API_ERROR"})
   console.log(err)
}
  }

 useEffect(()=>{
   Profile(API)
   getALLMEMBERSHIP(API1)
   getUserData()
 },[window.location.pathname])


    return <AuthContext.Provider value={{...state,user,setUser,CancelMemberShip}}>{children}</AuthContext.Provider>;
}

//custom hooks
const useAuthContext = () => {
    return useContext(AuthContext);
  };

export { AuthProvider, AuthContext, useAuthContext };

