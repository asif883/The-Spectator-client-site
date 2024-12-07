import { NavLink } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";


const Nav = () => {
    const {role} = useUserData()
    console.log(role);
    return (
        <div className="mb-8">
               <nav className="flex justify-center border-y py-3">
                <NavLink to='/' className='mr-3 font-medium hover:text-[#3A8CFB]'>Home</NavLink>            
                <NavLink to='/add-articles' className='mr-3 font-medium hover:text-[#3A8CFB]'>Add Articles</NavLink>            
                <NavLink to='/all-articles' className='mr-3 font-medium hover:text-[#3A8CFB]'>All Articles</NavLink>                        
                           
                <NavLink to='' className='mr-3 font-medium hover:text-[#3A8CFB]'>My Articles</NavLink>            
                <NavLink to='' className='mr-3 font-medium hover:text-[#3A8CFB]'>Premium Articles</NavLink>
                {
                    role === 'admin' ? 
                    <NavLink to='/dashboard/statistics' className='mr-3 font-medium hover:text-[#3A8CFB]'>Dashboard</NavLink>
                    :
                    <></>
                } 
              </nav>
        </div>
    );
};

export default Nav;