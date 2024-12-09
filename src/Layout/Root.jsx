import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import Footer from "../Pages/Footer";
import Nav from "../Pages/Header/Nav";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Nav/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;