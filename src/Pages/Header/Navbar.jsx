import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Provider/Context";

import NavStart from "./NavStart";
import ThemeControl from "../../Components/Header/ThemeControl";

const Navbar = () => {
    const {user, logOut} =useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch()
    }
 
    return (
          <div className="max-w-7xl mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                   <div className="">
                        <NavStart/>
                   </div>
                 
               
                </div>
                <div className="navbar-center">
                    <div className="">
                         <Link to='/'> 
                            <h1 className='font text-2xl md:text-3xl lg:text-5xl '>The Spectator
                            </h1>
                         </Link>  
                     </div>
                </div>
                <div className="navbar-end">
                     <div className="flex items-center gap-4">
                            <ThemeControl/>
                        {
                            user ? <button onClick={handleLogOut} className="bg-[#E82D85] text-white px-2 md:px-4 py-1 md:py-2 rounded-md text-xs md:text-lg font-medium">Sing Out</button>
                            :
                            <Link to='/login'><button className="bg-[#E82D85] text-white px-2 md:px-4 py-1 md:py-2 rounded-md text-xs md:text-lg font-medium ">Sing In</button>
                            </Link>
                        }
                    </div>
                 </div>
           </div>           
          </div>
    );
};

export default Navbar;