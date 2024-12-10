import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Premium = () => {
    const [articles , setArticles] = useState()

    useEffect(()=>{
        fetch('https://newspaper-server-silk.vercel.app/articles')
        .then(res => res.json())
        .then( data => setArticles(data.articles))
    },[])

    return (
        <div className="max-w-7xl mx-auto min-h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 mt-10 mb-16">Premium Articles</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {articles?.map((article) =>
              article?.isPremium ==='yes' &&
              (
             <div
              key={article.id}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex-grow">
                <h2 className="text-2xl text-gray-200 font-semibold text-gold mb-4">
                  {article.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  Published by: <span className="text-white">{article.publisher}</span>
                </p>
                <p className="text-gray-300 mb-6"></p>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="bg-blue-500 text-gray-200 rounded-full px-4 py-1 text-sm font-medium"
                    > {article?.tags} 
                    </span>
                  
                </div>
               
              </div>
              <div className="mt-auto">
                    <Link to='/subscription'>
                        <button className="w-full text-gray-400 rounded-lg py-2 font-medium hover:bg-blue-400 hover:text-white">
                         Subscribe to Read More
                        </button>
                    </Link>
            </div>
            </div>
            ))}
            </div>
        </div>
    );
};

export default Premium;