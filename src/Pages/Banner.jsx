

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const animation = { duration: 50000, easing: (t) => t }

const Banner = () => {
  
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <div ref={sliderRef} className="keen-slider h-[450px]">
      <div className="keen-slider__slide number-slide1">
          <h1 className="text-xl font-bold mb-2">-- No, you can not buy Berkshire stock at a 99% discount — the stock exchange glitched</h1>
        <img className="w-full h-fit" src="https://i.ibb.co/qgYSbXM/658c0dd4ec62ab5daf7eda41.webp" alt="" />
      </div>
      {/* 2nd slider */}
      <div className="keen-slider__slide number-slide2">
       <h1 className="text-xl font-bold mb-2">-- Microsoft is laying off hundreds in its Azure cloud business, sources say</h1>
        <img className="w-full h-fit" src="https://i.ibb.co/dKPc2R3/NKRZSNOPANMWXLLGRM3-CV52-T2-U.jpg" alt="" />
      </div>
      {/* 3rd slider */}
      <div className="keen-slider__slide number-slide3">
          <h1 className="text-xl font-bold mb-2">--Gen Z is hot new status symbol: an AmEx card</h1>
          <img className="w-full h-fit" src="https://i.ibb.co/Czgg5Nw/665a11781cd3b17790422e34.webp" alt="" />
      </div>
      {/* 4th slider */}
      <div className="keen-slider__slide number-slide4">
          <h1 className="text-xl font-bold mb-2">-- 6 of the most beautiful places in the world, according to someone who is been to 107 countries</h1>
          <img className="w-full h-fit" src="https://i.ibb.co/Q9ymSMC/6650af2da961b37edf39b243.webp" alt="" />
      </div>
      
      {/* <div className="keen-slider__slide number-slide5">

      </div>
     
      <div className="keen-slider__slide number-slide6">

      </div> */}
    </div>
  )
};
export default Banner;