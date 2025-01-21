import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import Nav from "../Pages/Header/Nav";
import Footer from "../Pages/Footer";
import { useEffect, useState } from "react";
import Loading from "../Pages/Loading";
// import NavSection from "../Components/Header/NavSection";

const Root = () => {
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://newspaper-server-silk.vercel.app/articles')
        .then(res => res.json())
        .then(data=> {
            // console.log(data);
            setLoading(false)
        })
    },[])
    return (
        <div>
            {
                loading? <><Loading/></>
                :
                <>   
                    {/* <NavSection/> */}
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