import { useContext } from "react";
import { AuthContext } from "../Provider/Context";



const useAuth = () => {

    const auth = useContext(AuthContext)

    return auth;
};

export default useAuth;