import { NavLink } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";
import '../../Css/nav.css'


const Nav = () => {
    const {role} = useUserData()
    // console.log(role);
    return (
        <div className="">
               <nav className="flex items-center">
                <NavLink to='/' className='mr-3  hover:text-[#E82D85]'>Home</NavLink>            
                <NavLink to='/add-articles' className='mr-3  hover:text-[#E82D85]'>Add Articles</NavLink>            
                <NavLink to='/all-articles' className='mr-3  hover:text-[#E82D85]'>All Articles</NavLink>                        
                           
                <NavLink to='/my-article' className='mr-3  hover:text-[#E82D85]'>My Articles</NavLink>            
                <NavLink to='/premium-article' className='mr-3  hover:text-[#E82D85]'>Premium Articles</NavLink>
                {
                    role === 'admin' ? 
                    <NavLink to='/dashboard/statistics' className='mr-3  hover:text-[#E82D85]'>Dashboard</NavLink>
                    :
                    <></>
                } 
              </nav>
        </div>
    );
};

export default Nav;