import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import Nav from "../Pages/Header/Nav";
import Footer from "../Pages/Footer";
import { useEffect, useState } from "react";
import Loading from "../Pages/Loading";
import useAuth from "../Hooks/useAuth";
import '../Css/theme.css'


const Root = () => {
    const [loading , setLoading] = useState(true)
    const { isDarkMode } = useAuth()
  
    useEffect(()=>{
        fetch('https://newspaper-server-silk.vercel.app/articles')
        .then(res => res.json())
        .then(data=> {
            // console.log(data);
            setLoading(false)
        })
    },[])
    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            {
                loading? <><Loading/></>
                :
                <>   
                    <Navbar></Navbar>
                    <Nav/>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </>
            }
            
        </div>
    );
};

export default Root;