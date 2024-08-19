import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Context";

const Navbar = () => {
    const {user, logOut} =useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch()
    }
    return (
          <div className="mt-6 max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                {/* <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                   
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></label>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>  
                 </div> */}

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="mr-5 text-2xl font-medium hover:text-[#3A8CFB]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44">
                        <li><Link to='/' className="text-lg font-medium">Home</Link></li>
                        <li><Link className="text-lg font-medium">About</Link></li>
                        <li><Link className="text-lg font-medium">Contact Us</Link></li>  
                    </ul>
                  </div>
                  <IoSearchSharp className="text-2xl font-medium hover:text-[#3A8CFB]"></IoSearchSharp>
                </div>
                <div className="navbar-center">
                    <div className="">
                         <Link to='/' className="text-5xl mb-4 font-bold ">The Spectator</Link>  
                     </div>
                </div>
                <div className="navbar-end">
                     <div className="flex items-center gap-2">
                        {
                            user ? 
                             <Link to='/profile'> 
                                <img className=" mr-3 w-12 h-12 rounded-full border-2" src={user?.displayName} alt={user?.email} />
                             </Link>
                            :
                            <NavLink to='/register' className='mr-3 font-semibold text-[#3A8CFB] border-2 border-blue-400 px-4 py-2  rounded-xl'>Register</NavLink>
                        }
                        {
                            user ? <button onClick={handleLogOut} className="bg-[#3A8CFB] text-white px-4 py-2 rounded-xl text-lg font-medium">LogOut</button>
                            :
                            <Link to='/login'><button className="bg-[#3A8CFB] text-white px-4 py-2 rounded-xl text-lg font-medium hover:text-[#3A8CFB] hover:border-2 hover:border-blue-400 hover:px-4 hover:py-2 hover:rounded-xl hover:bg-white">Login</button>
                            </Link>
                        }
                    </div>
                 </div>
           </div>           
          </div>
    );
};

export default Navbar;