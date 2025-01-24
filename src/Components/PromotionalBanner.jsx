import { Link } from 'react-router-dom';
import banner from '../assets/Friday_Special_Offer_Banner_1080x400.png'
import '../Css/font.css'

const PromotionalBanner = () => {
    // style={{backgroundImage : `url(${banner})`, backgroundSize: 'cover'}} className='h-[400px] object-cover relative'
    return (
        <div >
             <div className='text-[#C61947] text-center '>
                <img src={banner} alt="" className='w-full' />
                  <h3 className="text-6xl uppercase text-font font-semibold mb-3">Friday Special</h3>
                  <h1 className="text-7xl text-font  font-semibold mb-4">
                     20 % OFF
                  </h1>
                  <Link to="/subscription" className='bg-[#C61947] text-white p-3 uppercase text-font text-xl '>
                       Get the offer
                  </Link>
             </div>
        </div>
    );
};

export default PromotionalBanner;