import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllPublisher = () => {
    const [publishers, setPublisher] = useState()
    console.log(publishers);
    useEffect(()=>{
        fetch('http://localhost:5000/all-publisher')
        .then( res => res.json())
        .then( data => setPublisher(data))
    },[])
    return (
    <div className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Meet Our Publishers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {publishers?.map((publisher) => (
            <Link to='/all-articles'
              key={publisher.id}
              className="group relative bg-white shadow-xl rounded-xl overflow-hidden transform hover:-translate-y-2 transition duration-300 flex flex-col"
            >
              
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 group-hover:opacity-25 transition duration-300"></div>

              {/* Logo Section */}
              <img
                src={publisher.logo}
                alt={`${publisher.name} Logo`}
                className="w-20 h-20 mx-auto mt-6 rounded-full border-4 border-white shadow-lg object-contain bg-gray-100 p-2"
              />

              {/* Content */}
              <div className="p-6 text-center flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 transition duration-300">
                  {publisher.name}
                </h3>
                <p className="text-gray-600 mt-3 text-sm">
                  {publisher.description}
                </p>
              </div>

              
              <div className="p-4 bg-gray-50 text-right mt-auto">
                <Link ><button className="text-indigo-500 font-semibold hover:text-indigo-700 hover:underline">
                  View Articles
                </button>
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    );
};

export default AllPublisher;