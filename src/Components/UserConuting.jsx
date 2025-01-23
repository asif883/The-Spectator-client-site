import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import '../Css/nav.css'
import '../Css/text.css'

const UserCounting = () => {
    const [count , setCount] = useState(false);
    
    return (
        <div className=" inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-200 text-gray-800 font my-10 py-20 md:py-28">
            <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                <div className="flex justify-around text-center">
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold">All User</h1>
                        {count && (
                            <CountUp
                                className="text-xl md:text-3xl font-semibold text-font"
                                start={0}
                                end={17000}
                                duration={1}
                                useEasing={true}
                                separator=","
                            />
                        )}
                    </div>
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold">Normal User</h1>
                        {count && (
                            <CountUp
                                className="text-font text-xl md:text-3xl font-semibold"
                                start={0}
                                end={9000}
                                duration={1}
                                useEasing={true}
                                separator=","
                            />
                        )}
                    </div>
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold">Premium User</h1>
                        {count && (
                            <CountUp
                                className="text-font text-xl md:text-3xl font-semibold"
                                start={0}
                                end={8000}
                                duration={1}
                                useEasing={true}
                                separator=","
                            />
                        )}
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default UserCounting;
