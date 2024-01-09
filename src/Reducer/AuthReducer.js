const AuthReducer=(state,action)=>{
    switch(action.type){
        case "SET_Profile_LOADING":
            return{
                ...state,
                ProfileLoading:true
            };
            case "SET_API_DATA":
              return{
                ...state,
                ProfileLoading:false,
                Profile_list:action.payload,
              };
              case "SET_Member_LOADING":
            return{
                ...state,
                memberShipLoad:true
            };
            case "SET_Membership_DATA":
              return{
                ...state,
                memberShipLoad:false,
                memberShip:action.payload,
              };
              case "SET_UserData_LOADING":
            return{
                ...state,
                userdataLoad:true
            };
            case "SET_UserData_DATA":
              return{
                ...state,
                userdataLoad:false,
                UserData:action.payload,
              }
            case "API_ERROR":
                return{
                    ...state,
                    ProfileLoading:true,
                    isError:true
                };

                default:
                 return state;
            }
           
            
}
export default AuthReducer;