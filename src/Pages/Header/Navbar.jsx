import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Provider/Context";

import NavStart from "./NavStart";

const Navbar = () => {
    const {user, logOut} =useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch()
    }
 
    return (
          <div className="mt-3 max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                   <div className="">
                        <NavStart/>
                   </div>
                 
               
                </div>
                <div className="navbar-center">
                    <div className="">
                         <Link to='/'> 
                            <h1 className='font text-2xl md:text-3xl lg:text-5xl text-gray-900'>The Spectator
                            </h1>
                         </Link>  
                     </div>
                </div>
                <div className="navbar-end">
                     <div className="flex items-center gap-2">
                        {
                            user ? 
                             <Link to='/profile'> 
                                   {
                                user?.photoURL 
                                ?
                                <img className="mr-1 md:mr-3 w-8 md:w-12 h-8 md:h-12 rounded-full border-2" src={user?.photoURL} alt={user?.email} />
                                : 
                                <><img className='mr-1 md:mr-3 w-8 md:w-12 h-8 md:h-12 rounded-full border-2' src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt={user?.email} /></>
                            }
                              
                             </Link>
                            :
                            <></>
                        }
                        {
                            user ? <button onClick={handleLogOut} className="bg-[#3A8CFB] text-white px-2 md:px-4 py-1 md:py-2 rounded-xl text-xs md:text-lg font-medium">LogOut</button>
                            :
                            <Link to='/login'><button className="bg-[#3A8CFB] text-white px-2 md:px-4 py-1 md:py-2 rounded-xl text-xs md:text-lg font-medium hover:text-[#3A8CFB] hover:border-2 hover:border-blue-400 hover:px-4 hover:py-2 hover:rounded-xl hover:bg-white">Sing In</button>
                            </Link>
                        }
                    </div>
                 </div>
           </div>           
          </div>
    );
};

export default Navbar;