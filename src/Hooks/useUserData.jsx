import { useEffect, useState } from "react";

import useAuth from "./useAuth";
import axios from "axios";

// import axios from "axios";

const useUserData = () => {
    const {user} = useAuth()
    const [userData , setUserData] = useState({})
    
    useEffect(()=>{
        const fetchData =()=>{
            axios.get(`https://newspaper-server-silk.vercel.app/user/${user?.email}`)
            .then(res =>{
               setUserData(res.data);
            })
        }
        fetchData()
},[user]);


    return userData;

}
export default useUserData;