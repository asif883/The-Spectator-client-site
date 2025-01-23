import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Css/nav.css'

const Publishers = () => {
    const [publishers, setPublisher] = useState([])
        // console.log(publishers);
        useEffect(()=>{
            fetch('https://newspaper-server-silk.vercel.app/all-publisher')
            .then( res => res.json())
            .then( data => setPublisher(data))
        },[])

    return (
        <div>
             <div className="text-center mb-8 max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold  text-gray-900 mt-12 font mb-2">
                    Meet Our Publishers
                </h2>
                <p className="text-gray-600 text-lg">Meet our dedicated publishers—visionary storytellers and industry experts committed to delivering insightful, credible, and engaging content for our readers.</p>
             </div>
            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 p-5">
                {publishers?.slice(0,6).map((publisher) => (       
                         <Link to='/all-articles'
                         key={publisher.id}
                        className="group relative bg-white shadow-xl rounded-xl overflow-hidden transform hover:-translate-y-2 transition duration-300 flex flex-col"
                      >
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 transition duration-300"></div>
                
                        {/* Logo Section */}
                        <img
                          src={publisher.logo}
                          alt={`${publisher.name} Logo`}
                          className="w-20 h-20 mx-auto mt-6 rounded-full border-4 border-white shadow-lg object-contain bg-gray-100 p-2"
                        />
                
                        {/* Content */}
                        <div className="p-6 text-center flex-grow">
                          <h3 className="text-xl font-semibold font text-gray-800  transition duration-300 uppercase">
                            {publisher.name}
                          </h3>
                          <p className="text-gray-600 mt-3 text-sm ">
                            {publisher.description}
                          </p>
                        </div>
                
                        
                        <div className="p-4 bg-gray-50 text-right mt-auto">
                            <Link >
                                <button className="text-pink-500 font-semibold hover:text-pink-700 hover:underline font ">
                                View Articles
                                </button>
                          </Link>
                        </div>
                      </Link>
                      
                    ))}
            </div>
        </div>
    );
};

export default Publishers;