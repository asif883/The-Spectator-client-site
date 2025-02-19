import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Premium = () => {
    const [articles , setArticles] = useState()
    const [ loading , setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://newspaper-server-silk.vercel.app/articles')
        .then(res => res.json())
        .then( data =>{
          setArticles(data.articles)
          setLoading(false)
        } )
    },[])

    return (
        <div className="max-w-7xl mx-auto min-h-screen p-5">
            <div>
              {
                loading ?
                <><Loading/></>
                :
                <>
                <div className="text-center">
                <h1 className="text-4xl font-bold font mb-10">Premium Articles</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {articles?.map((article) =>
              article?.isPremium ==='yes' &&
              (
             <div
              key={article.id}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col font"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex-grow">
                <h2 className="text-2xl text-gray-200 font-semibold text-gold mb-4 text-font">
                  {article.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  Published by: <span className="text-white">{article.publisher}</span>
                </p>
                <p className="text-gray-300 mb-6"></p>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="bg-pink-500 text-gray-200 rounded-full px-4 py-1 text-sm font-medium"
                    > {article?.tags} 
                    </span>
                  
                </div>
               
              </div>
              <div className="mt-auto">
                    <Link to='/subscription'>
                        <button className="w-full text-gray-400 rounded-lg py-2 font-medium hover:bg-pink-400 hover:text-white">
                         Subscribe to Read More
                        </button>
                    </Link>
            </div>
            </div>
            ))}
            </div>
                </>
              }
            </div>
        </div>
    );
};

export default Premium;