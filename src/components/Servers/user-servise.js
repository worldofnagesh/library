import App from "../../App";
import { myAxios } from "./helper";

export const signUp=(user)=>{
    
    return myAxios.post("/api/v1/students",user).then((response)=>response.data);
};

