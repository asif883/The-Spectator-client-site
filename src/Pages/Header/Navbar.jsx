import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Provider/Context";
import useUserData from "../../Hooks/useUserData";
import NavStart from "./NavStart";

const Navbar = () => {
    const {user, logOut} =useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch()
    }
    const{ role } = useUserData()
    return (
          <div className="mt-6 max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                   <div className="hidden md:block">
                        <NavStart/>
                   </div>
                  <div className="dropdown block md:hidden">
                    <div tabIndex={0} role="button" className="mr-2 text-2xl font-medium hover:text-[#3A8CFB]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-black bg-opacity-50 rounded-box w-44 space-y-3 text-white">
                    <Link to='/' className='  hover:text-[#3A8CFB]'>Home</Link>            
                <Link to='/add-articles' className='  hover:text-[#3A8CFB]'>Add Articles</Link>            
                <Link to='/all-articles' className='  hover:text-[#3A8CFB]'>All Articles</Link>                        
                           
                <Link to='/my-article' className='  hover:text-[#3A8CFB]'>My Articles</Link>            
                <Link to='/premium-article' className='  hover:text-[#3A8CFB]'>Premium Articles</Link>
                {
                    role === 'admin' ? 
                    <Link to='/dashboard/statistics' className='  hover:text-[#3A8CFB]'>Dashboard</Link>
                    :
                    <></>
                } 
                    </ul>
                  </div>
               
                </div>
                <div className="navbar-center">
                    <div className="">
                         <Link to='/' className="text-2xl md:text-5xl mb-4 font-bold ">The Spectator</Link>  
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