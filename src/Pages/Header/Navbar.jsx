import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    return (
          <div className="my-6 max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="mr-5 text-2xl font-medium hover:text-[#3A8CFB]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44">
                        <li><Link className="text-lg font-medium">About</Link></li>
                        <li><Link className="text-lg font-medium">Contact Us</Link></li>  
                    </ul>
                  </div>
                  <IoSearchSharp className="text-2xl font-medium hover:text-[#3A8CFB]"></IoSearchSharp>
                </div>
                <div className="navbar-center">
                    <div className="">
                         <h1 className="text-5xl mb-4 font-bold">The Daily Updates</h1>  
                     </div>
                </div>
                <div className="navbar-end">
                     <div className="">
                        <NavLink to='/subscription' className='mr-3 font-medium'>Subscription</NavLink>
                        <button className="bg-[#3A8CFB] text-white px-4 py-2 rounded-xl text-lg font-medium">Login</button>
                    </div>
                 </div>
           </div>
                
              <nav className="flex justify-center border-y py-3">
               <NavLink to='/' className='mr-3 font-medium'>Home</NavLink>            
                <NavLink to='/add-articles' className='mr-3 font-medium'>Add Articles</NavLink>            
                <NavLink to='/all-articles' className='mr-3 font-medium'>All Articles</NavLink>                        
                <NavLink to='/dashboard' className='mr-3 font-medium'>Dashboard</NavLink>            
                <NavLink to='/my-articles' className='mr-3 font-medium'>My Articles</NavLink>            
                <NavLink to='/premium-articles' className='mr-3 font-medium'>Premium Articles</NavLink> 
              </nav>
          </div>
    );
};

export default Navbar;