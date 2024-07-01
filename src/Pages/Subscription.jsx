

const Subscription = () => {
    return (
        <div className="max-w-7xl mx-auto  my-10">
            <div className="text-center">
                 <h1 className="text-4xl font-bold">Choose Your Right Plan!</h1>
                 <p>Select from the best plans, ensuring a perfect match. Need more or less?
                     <br /> Customize your subscription for seamless fit!
                 </p>
            </div>



           <div>
           <div className="border border-orange-300 rounded-xl p-6">
            
            <div className="flex justify-between">
               <h3 className="text-2xl font-bold">Premium <br /> individual</h3>
               <p className="text-xl font-bold">Free <br />for 1 month</p>
             </div>
            <li>Cancel anytime</li>
            <li>1 premium account</li>
            <li>15hour/month of listening time from any audio book</li>
            <div className="mt-8">
                <button className="btn btn-primary w-full">Try free for 1 month</button>
            </div>
        </div>


        <div className="border border-orange-300 rounded-xl p-6">
            <div className="flex justify-between">
               <h3 className="text-2xl font-bold">Premium Duo</h3>
               <p className="text-xl font-bold">$14 <br />per month</p>
             </div>
         
            <li>Cancel anytime</li>
            <li>2 premium account</li>
            <li>15hour/month of listening time from any audio book</li>
            <div className="mt-8">
                <button className="btn btn-primary w-full">Get Premium Duo</button>
            </div>
        </div>



        <div className="border border-orange-300 rounded-xl p-6">
        <div className="flex justify-between">
               <h3 className="text-2xl font-bold">Premium Family</h3>
               <p className="text-xl font-bold">$17 <br />per month</p>
             </div>
             <li>Up to 6 premium account</li>
            <li>Cancel anytime</li>
            <li>1 premium account</li>
            <li>15hour/month of listening time from any audio book</li>
            <div className="mt-8">
                <button className="btn btn-primary w-full">Get premium Family</button>
            </div>
        </div>
           </div>
        </div>
    );
};

export default Subscription;