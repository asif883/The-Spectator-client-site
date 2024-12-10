import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import Footer from "../Pages/Footer";
import Nav from "../Pages/Header/Nav";
import { useEffect, useState } from "react";
import Loading from "../Pages/Loading";

const Root = () => {
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/articles')
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            setLoading(false)
        })
    },[])
    return (
        <div>
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