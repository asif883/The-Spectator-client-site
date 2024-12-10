/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Card = ({article}) => {
    return (
        
      <div
      className="relative rounded-xl overflow-hidden transform hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col border"
    >
     
      {article.isPremium === 'yes' && (
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
          Premium
        </span>
      )}
    
      
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-56 object-cover"
      />
    
      
      <div className="p-6 flex-grow">
       
        <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
          {article.tags}
        </span>
    
        
        <h3 className="text-xl font-bold text-gray-800 mt-4 group-hover:text-indigo-600 transition duration-300">
          {article.title}
        </h3>
    
        
        <p className="text-gray-600 text-sm mt-2">
          {article.description.slice(0, 100)}...
        </p>
      </div>
    
      
      <div className="w-full mt-auto bg-gray-100 p-4 text-right">
        <p className="text-sm text-gray-500">
          Published by:{" "}
          <span className="text-gray-800 font-semibold">{article.publisher}</span>
        </p>
        <Link to={`/details/${article._id}`}>
          <button className="text-indigo-500 font-semibold hover:text-indigo-700 hover:underline">
            Details
          </button>
        </Link>
      </div>
    </div>
    
    
        
    );
};

export default Card;