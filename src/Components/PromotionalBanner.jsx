import { Link } from 'react-router-dom';


const PromotionalBanner = () => {
    return (
        <div className=''>
             <div className='text-[#C61947] text-center '>
                <div className='relative'>
                     <img src='https://cdn.gyftr.com/blog/wp-content/uploads/2024/11/14081129/BlackFriday-1.png' alt="" className='w-full' />
                     <div className='absolute right-3 md:right-10 lg:right-20 top-3 md:top-10 lg:top-20'>
                         <h1 className="text-[#EC2025] text-xl md:text-7xl text-font  font-semibold mb-1 md:mb-4">
                            UP TO <br /> 40% OFF
                         </h1>
                         <Link to="/subscription" className='bg-[#EC2025] text-white p-1 md:p-3 uppercase text-font text-sm md:text-xl '>
                              Get the offer
                         </Link>
                    </div>
               </div>
                
             </div>
        </div>
    );
};

export default PromotionalBanner;