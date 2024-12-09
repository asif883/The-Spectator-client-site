import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay,  Navigation } from 'swiper/modules';
import { IoMdEye } from "react-icons/io";
import { useEffect, useRef, useState } from "react";



const Banner = () => {

  const [trendingArticles , setTrendingArticles] = useState()
  //  console.log(trendingArticles);
  useEffect( () =>{
    fetch(`http://localhost:5000/articles/trending`)
    .then( res => res.json())
    .then(data => setTrendingArticles(data))
  },[])
  
  
  ;
  const progressContent = useRef();
  const onAutoplayTimeLeft = (time) => {
   
    progressContent.current = `${Math.ceil(time / 1000)}s`;
  };

  return (

    <div>

    <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[350px] lg:h-[550px]"
      >

{
        trendingArticles?.map((article)=>
          <SwiperSlide  key={article?._id}> 
            <div  className="">
         <div className="flex items-center justify-between px-4 md:px-8">
            <h1 className="text-sm md:text-xl font-bold mb-2">-- {article?.title}</h1>
            <p className="text-lg font-semibold mb-2 flex gap-1 items-center"> <IoMdEye className="text-xl"></IoMdEye>{article?.views}</p>
         </div>
          <img className="object-cover w-full h-[350px] lg:h-[550px] min-h-fit" src={article?.image} alt={article?.title} />
         </div>
          </SwiperSlide>
        )
      }
         
      </Swiper>

      
      
     
     
  </div>
  )
};
export default Banner;