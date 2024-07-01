import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const UserCount = () => {

    const [count , setCount] =useState(false)
    
    return (
        <div className="bg-gradient-to-r from-[#89bcfe] to-[#0868E9] my-10 py-28">

         <ScrollTrigger onEnter={()=> setCount(true)} onExit={()=> setCount(false)}>
         <div className="flex justify-around text-center">
                <div>
                    <h1 className="text-3xl text-white font-bold">All User</h1>
                    {
                        count && <CountUp
                        className="text-3xl text-white font-semibold"
                        start={0}
                        end={11000}
                        duration={1}
                        useEasing={true}
                        separator=","
                        />
                    }
                </div>
                <div>
                    <h1 className="text-3xl text-white font-bold">Normal User</h1>
                    {
                        count && <CountUp
                        className="text-3xl text-white font-semibold"
                        start={0}
                        end={9000}
                        duration={1}
                        useEasing={true}
                        separator=","
                        />
                    }
                </div>
                <div>
                    <h1 className="text-3xl text-white font-bold">Premium User</h1>
                    {
                        count && <CountUp
                        className="text-3xl text-white font-semibold"
                        start={0}
                        end={8000}
                        duration={1}
                        useEasing={true}
                        separator=","
                        />
                    }
                </div>
          </div>
         </ScrollTrigger>
          
        </div>
    );
};

export default UserCount;