import '../../Css/nav.css'
import Nav from '../../Pages/Header/Nav';
import NavStart from '../../Pages/Header/NavStart';

const NavSection = () => {
  
    return (
       <div className="p-5 ">
           <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className='block md:hidden'>
                    <NavStart/>
                </div>
                <div className='w-4/5'>
                    <div className='flex items-center justify-between '>
                        <h1 className='font text-2xl md:text-2xl lg:text-5xl'>The <span className='text-[#E82D85]'>Spectator</span></h1>
                        <div className='hidden md:block'>
                            <ul className="flex gap-3 items-center  nav-font uppercase md:text-sm">
                                <Nav/>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div>
                    <button>login</button>
                </div>
            </div>
       </div>
    );
};

export default NavSection;