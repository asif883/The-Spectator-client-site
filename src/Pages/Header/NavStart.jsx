import { RiMenu2Fill } from "react-icons/ri";
import '../../Css/nav.css'
import { NavLink } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";


const NavStart = () =>{       
       
    const {role} = useUserData()

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                
                    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                            <RiMenu2Fill size={24}/>
                    </label>
                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="bg-base-100 text-base-content min-h-full w-80 p-6">
                    <h1 className="text-2xl font-bold pb-5">The Spectator</h1>
                    <input type="text" placeholder="Search In The Spectator" className="p-2 border border-gray-700 rounded-md w-full mt-3 mb-5 " />
                    <li className="flex flex-col gap-3 nav-font">
                      <NavLink to='/' className='mr-5  hover:text-[#E82D85]'>Home</NavLink>            
                       <NavLink to='/add-articles' className='mr-5  hover:text-[#E82D85]'>Add Articles</NavLink>            
                       <NavLink to='/all-articles' className='mr-5  hover:text-[#E82D85]'>All Articles</NavLink>                        
                                              
                       <NavLink to='/my-article' className='mr-5  hover:text-[#E82D85]'>My Articles</NavLink>            
                       <NavLink to='/premium-article' className='mr-5  hover:text-[#E82D85]'>Premium Articles</NavLink>
                        {
                             role === 'admin' ? 
                             <NavLink to='/dashboard/statistics' className='  hover:text-[#E82D85]'>Dashboard</NavLink>
                                 :
                               <></>
                       } 
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavStart;