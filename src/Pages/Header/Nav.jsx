import { NavLink } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";
import '../../Css/nav.css'


const Nav = () => {
    const {role} = useUserData()
    // console.log(role);
    return (
        <div className="mt-3 mb-8 hidden lg:block">
               <nav className="flex items-center justify-center nav-font text-xl text-gray-700b border-y py-2">
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
              </nav>
        </div>
    );
};

export default Nav;