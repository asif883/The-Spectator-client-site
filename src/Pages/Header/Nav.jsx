import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="mb-8">
               <nav className="flex justify-center border-y py-3">
                <NavLink to='/' className='mr-3 font-medium hover:text-[#3A8CFB]'>Home</NavLink>            
                <NavLink to='/add-articles' className='mr-3 font-medium hover:text-[#3A8CFB]'>Add Articles</NavLink>            
                <NavLink to='/all-articles' className='mr-3 font-medium hover:text-[#3A8CFB]'>All Articles</NavLink>                        
                <NavLink to='/dashboard' className='mr-3 font-medium hover:text-[#3A8CFB]'>Dashboard</NavLink>            
                <NavLink to='/my-articles' className='mr-3 font-medium hover:text-[#3A8CFB]'>My Articles</NavLink>            
                <NavLink to='/premium-articles' className='mr-3 font-medium hover:text-[#3A8CFB]'>Premium Articles</NavLink> 
              </nav>
        </div>
    );
};

export default Nav;