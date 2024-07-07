import { IoIosDoneAll } from "react-icons/io";
import { Link } from "react-router-dom";

const Subscription = () => {
    return (
        <div className="max-w-7xl mx-auto  my-10">
            <div className="text-center">
                 <h1 className="text-4xl font-bold mb-2">Choose Your Right Plan!</h1>
                 <p>Select from the best plans, ensuring a perfect match. Need more or less?
                     <br /> Customize your subscription for seamless fit!
                 </p>
            </div>



           <div className="flex gap-8 justify-around  mt-8">
           <div className="border border-gray-300 p-10 shadow-xl">


              <div className="text-center mb-8">
                 <h1 className="text-3xl font-bold">Free for 1 Week</h1>
                 <p className="text-2xl font-bold mt-2"><span className="text-3xl">$</span>0</p>
              </div>
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Access to latest news</p>
                <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Access to mobile app</p>
                <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Free festival magazine</p>
                <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Early access to podcast</p>
                <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Breaking news notification</p>
              </div>
              <div className="mt-8">
                 <button className="w-full bg-[#3A8CFB] text-white p-2 rounded-xl font-semibold uppercase hover:bg-white hover:border-[#3A8CFB] hover:border-2 hover:text-[#3A8CFB]">Start Free Trail</button>
              </div>
            
            {/* <div className="flex justify-between">
               <h3 className="text-2xl font-bold">Premium <br /> individual</h3>
               <p className="text-xl font-bold">Free <br />for 1 month</p>
             </div>
            <li>Cancel anytime</li>
            <li>1 premium account</li>
            <li>15hour/month of listening time from any audio book</li>
            <div className="mt-8">
                <button className="btn btn-primary w-full">Try free for 1 month</button>
            </div> */}
        </div>


        <div className="border border-gray-300 p-10 shadow-xl">


            <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Monthly</h1>
            <p className="text-2xl font-bold mt-2"><span className="text-3xl">$</span>10</p>
            </div>
            <div className="space-y-3">
            <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Access to latest news</p>
            <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Access to mobile app</p>
            <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Free festival magazine</p>
            <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Early access to podcast</p>
            <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Breaking news notification</p>
            </div>
            <div className="mt-8">
            <Link to='/subscription'><button className="w-full bg-[#3A8CFB] text-white p-2 rounded-xl font-semibold uppercase hover:bg-white hover:border-[#3A8CFB] hover:border-2 hover:text-[#3A8CFB]">subscribe</button>
            </Link>
            </div>

            {/* <div className="flex justify-between">
            <h3 className="text-2xl font-bold">Premium <br /> individual</h3>
            <p className="text-xl font-bold">Free <br />for 1 month</p>
            </div>
            <li>Cancel anytime</li>
            <li>1 premium account</li>
            <li>15hour/month of listening time from any audio book</li>
            <div className="mt-8">
            <button className="btn btn-primary w-full">Try free for 1 month</button>
            </div> */}
         </div>



         <div className="border border-gray-300 p-10 shadow-xl">


            <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Annually</h1>
            <p className="text-2xl font-bold mt-2"><span className="text-3xl">$</span>49</p>
            </div>
            <div className="space-y-3">
            <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Access to latest news</p>
            <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Access to mobile app</p>
            <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Free festival magazine</p>
            <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Early access to podcast</p>
            <p className="flex items-center gap-2 text-xl font-medium"><IoIosDoneAll></IoIosDoneAll>Breaking news notification</p>
            </div>
            <div className="mt-8">
            <Link to='/subscription'><button className="w-full bg-[#3A8CFB] text-white p-2 rounded-xl font-semibold uppercase hover:bg-white hover:border-[#3A8CFB] hover:border-2 hover:text-[#3A8CFB]">subscribe</button>
            </Link>
            </div>

            {/* <div className="flex justify-between">
            <h3 className="text-2xl font-bold">Premium <br /> individual</h3>
            <p className="text-xl font-bold">Free <br />for 1 month</p>
            </div>
            <li>Cancel anytime</li>
            <li>1 premium account</li>
            <li>15hour/month of listening time from any audio book</li>
            <div className="mt-8">
            <button className="btn btn-primary w-full">Try free for 1 month</button>
            </div> */}
         </div>
           </div>
        </div>
    );
};

export default Subscription;