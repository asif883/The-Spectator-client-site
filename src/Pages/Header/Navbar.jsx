import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Provider/Context";
import useUserData from "../../Hooks/useUserData";

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

                <div className="dropdown block lg:hidden">
                    <div tabIndex={0} role="button" className="mr-2 text-2xl font-medium hover:text-[#3A8CFB]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-auto p-2 shadow bg-base-200 rounded-box w-44">
                    <NavLink to='/' className='mr-3 font-medium hover:text-[#3A8CFB]'>Home</NavLink>            
                <NavLink to='/add-articles' className='mr-3 font-medium hover:text-[#3A8CFB]'>Add Articles</NavLink>            
                <NavLink to='/all-articles' className='mr-3 font-medium hover:text-[#3A8CFB]'>All Articles</NavLink>                        
                           
                <NavLink to='/my-article' className='mr-3 font-medium hover:text-[#3A8CFB]'>My Articles</NavLink>            
                <NavLink to='/premium-article' className='mr-3 font-medium hover:text-[#3A8CFB]'>Premium Articles</NavLink>
                {
                    role === 'admin' ? 
                    <NavLink to='/dashboard/statistics' className='mr-3 font-medium hover:text-[#3A8CFB]'>Dashboard</NavLink>
                    :
                    <></>
                } 
                    </ul>
                  </div>
                  <img className="w-14 h-14 rounded-full border hidden lg:block" src="https://i.ibb.co/4RxT1Hz/148828-medium-logo-teaser300.png" alt="" />
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
                                <img className="mr-1 md:mr-3 w-8 md:w-12 h-8 md:h-12 rounded-full border-2" src={user?.photoURL} alt={user?.email} />
                             </Link>
                            :
                            <NavLink to='/register' className='ml-2 mr-1 md:mr-3 font-semibold text-[#3A8CFB] border-2 border-blue-400 px-2 md:px-4 py-1 md:py-2  text-xs md:text-lg  rounded-xl'>Register</NavLink>
                        }
                        {
                            user ? <button onClick={handleLogOut} className="bg-[#3A8CFB] text-white px-2 md:px-4 py-1 md:py-2 rounded-xl text-xs md:text-lg font-medium">LogOut</button>
                            :
                            <Link to='/login'><button className="bg-[#3A8CFB] text-white px-2 md:px-4 py-1 md:py-2 rounded-xl text-xs md:text-lg font-medium hover:text-[#3A8CFB] hover:border-2 hover:border-blue-400 hover:px-4 hover:py-2 hover:rounded-xl hover:bg-white">Login</button>
                            </Link>
                        }
                    </div>
                 </div>
           </div>           
          </div>
    );
};

export default Navbar;