import { RiMenu2Fill } from "react-icons/ri";
import '../../Css/nav.css'
import { Link } from "react-router-dom";
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
                    <h1 className="text-4xl font-bold pb-5 font text-gray-900">The Spectator</h1>
                    <input type="text" placeholder="Search In The Spectator" className="p-2 border border-gray-600 rounded-md w-full mt-3 mb-5 " />
                    <li className="flex flex-col gap-3 nav-font text-xl ">
                      <Link to='/' className=' border-b-2 border-gray-400 border-dotted pb-2'>Home</Link>            
                                  
                       <Link to='/all-articles' className='border-b-2 border-gray-400 border-dotted pb-2'>All Articles</Link>                        
                                              
                       <Link to='/my-article' className='border-b-2 border-gray-400 border-dotted pb-2'>My Articles</Link>
                       <Link to='/add-articles' className='border-b-2 border-gray-400 border-dotted pb-2'>Add Articles</Link>             
                       <Link to='/premium-article' className='border-b-2 border-gray-400 border-dotted pb-2'>Premium Articles</Link>
                        {
                             role === 'admin' ? 
                             <Link to='/dashboard/statistics' className='border-b-2 border-gray-400 border-dotted pb-2'>Dashboard</Link>
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