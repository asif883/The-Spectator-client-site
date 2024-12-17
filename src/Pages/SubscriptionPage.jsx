

const SubscriptionPage = () => {
    return (
       <>
          <div className=" bg-gradient-to-r from-[#89bcfe] to-[#0868E9] mt-8 p-10">

            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white">Become a subscriber <br />
                Cancel anytime. No hidden fees.</h1>
            </div>

            <section className="mt-10 flex flex-col md:flex-row gap-12 md:gap-6 justify-center items-center">

                <div className=" bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10 flex flex-col text-center">
                    <h1 className="text-3xl font-bold">Monthly</h1>
                    
                    <p className="text-5xl font-bold mt-4">$10</p>
                    </figure>
                    <div className=" space-y-6 p-6 items-center text-center">
                        <h2 className="mt-4 font-semibold text-xl">Renews at $12.95/month</h2>
                        <div className=" my-4">
                        <button className="w-full py-2 rounded-2xl border border-gray-300 uppercase ">Start my Trail</button>
                        </div>
                        <p>Cancel anytime</p>
                    </div>
                </div>

                <div className="relative bg-base-100 w-96 shadow-xl">
                    <div className="bg-black px-4 py-2 absolute -top-6 right-36">
                        <h1 className="text-xl text-white">65% OFF</h1>
                    </div>
                    <figure className="px-10 pt-10 flex-col text-center">
                    <h1 className="text-3xl font-bold">Annual</h1>
                    
                    <p className="text-5xl font-bold mt-4">$49</p>
                    </figure>
                    <div className="space-y-6 p-6 items-center text-center">
                        <h2 className="mt-4 font-semibold text-xl">Save $100</h2>
                        <div className=" my-4">
                        <button className="w-full py-2 rounded-2xl border border-blue-300 uppercase bg-black text-white font-bold">Subscribe</button>
                        </div>
                        <p> Renews at $149/yr <br />Cancel anytime</p>
                    </div>
                </div>
            </section>   
         </div>
        


        <div className="text-center mt-10">
                <h1 className="text-3xl md:text-4xl font-bold ">Subscribers get unlimited access to:</h1>

                <div className="flex flex-col md:flex-row gap-10 justify-center items-center my-8">
                    <div className="text-start">
                        <ul className="list-disc font-semibold text-xl space-y-3">
                            <li>Deep-dive stories on top companies</li>
                            <li>Recruiter and salary databases</li>
                            <li>Pitch decks that raised millions</li>
                        </ul>
                    </div>
                    <div className="text-start">
                        <ul className="list-disc font-semibold text-xl space-y-3">
                            <li>Stories to get you ahead in your career</li>
                            <li>Executive level org-charts</li>
                            <li>Summary mode on the app</li>
                        </ul>
                    </div>
                </div>
        </div>
       </>
    );
};

export default SubscriptionPage;