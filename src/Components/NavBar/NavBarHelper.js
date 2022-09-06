import axios from "axios";

//import { REACT_APP_URL } from "../CreateUser/CreateUserHelper";
const { REACT_APP_URL } = process.env;

export function logout(){
    try {
        axios.post(`${REACT_APP_URL}logout`, {
            withCredentials: true
        });
    } catch (error) {
        console.log(error)
    }
}