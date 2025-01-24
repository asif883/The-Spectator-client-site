import { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import '../Css/text.css'
import { Link } from "react-router-dom";


const TopArticles = () => {
     const [articles , setArticles] = useState([])
     console.log(articles);

     useEffect(()=>{
        fetch('https://newspaper-server-silk.vercel.app/articles')
        .then(res => res.json())
        .then(data => setArticles(data?.articles))
     },[])

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto p-3 my-16">
            {/* right */}

                <div className="col-span-3 space-y-8 text-font ">
                   <div>
                      <h1 className="text-3xl border-b-2 pb-1 uppercase">Latest In <span className="text-pink-500">Today</span></h1>
                   </div>
                    {
                        articles?.slice(3 ,9).map((article) => 
                            article.status === 'approve' &&
                            <div className="border-b-2 pb-8" key={article?._id}>
                                    <div className="flex flex-col md:flex-row px-2 gap-5 ">
                                        <img className="w-[320px] h-[200px] object-cover" src={article?.image} alt={article?.title} />
                                        <div>
                                            <p className="text-pink-500 uppercase mb-3 text-lg md:text-xl">{article?.tags}</p>
                                            <Link to={`details/${article._id}`} className="text-2xl md:text-3xl   hover:text-pink-600 ">{article?.title}</Link>
                                            <div>
                                             <p className="mt-3 text-gray-500 font-medium flex items-center  text-sm md:text-lg">By <span className=" mx-2 ">{article?.user_name}</span> - {article?.date} <span className="ml-4 flex gap-1 items-center"><FaRegComment/>3</span></p>
                                            </div>
                                        </div>
                                        
                                    </div>
                            </div>
                        )
                    }
                </div>

            {/* left */}

                <div>
                    <div>
                        <h1 className="text-3xl text-pink-600 text-font uppercase mb-5">Trending Articles</h1>
                    </div>
                    <div className="space-y-5 ">
                        {
                            articles?.slice(11 ,14).map((article) => 
                             article.status === 'approve' &&
                              <div key={article?._id} className="w-[300px] ">
                                  <img className="object-cover w-[300px] h-[180px]" src={article?.image} alt="" />
                                 <Link to={`details/${article._id}`} className=" text-font text-2xl hover:text-pink-600">{article?.title}</Link>  
                              </div>
                            )
                        }
                    </div>
                </div>
        </div>
    );
};

export default TopArticles;