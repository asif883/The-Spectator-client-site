import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Articles = () => {
        const [articles, setArticles] = useState([]);

        useEffect(()=>{
            fetch('https://newspaper-server-silk.vercel.app/articles')
            .then(res => res.json())
            .then(data=> setArticles(data.articles))
        },[])


        
    return (
        <div className="my-16 max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-4 p-4">
            {/* right */}

            <div className="space-y-6 lg:block hidden">

                {
                   articles?.slice(0, 8)?.map((article )  =>

                    article.status === 'approve' &&
                    <div key={article.id}>
                          <p className="text-blue-600 uppercase mb-1 font-semibold text-sm">{article.tags}</p>
                          <Link to={`details/${article._id}`} className="text-lg text-gray-600 font-medium hover:underline hover:text-blue-400">{article.title}</Link>
                     </div>    
                    
                )
                }
                
            </div>

            {/* middle  */}

           <div className="col-span-2 space-y-6">
               {
                    articles?.slice(0, 2)?.map((article ,idx) => 

                        article.status === 'approve' &&
                        
                        <Link to={`details/${article._id}`} key={idx} className="text-center ">
                            <img className="w-[700px] h-[400px]" src={article.image} alt={article.tags} />
                            <h1 className="text-2xl font-bold hover:underline hover:text-blue-400 mb-6">{article.title}</h1>
                       </Link>

                    )
                }

           </div>

           

            {/* left  */}

            <div className="space-y-4 lg:block hidden">
                
                    <div className="text-center">
                        <img className="h-[550px] w-full" src='https://i.ibb.co/92d4tqN/14207149-SL-122419-26390-23.jpg' alt="" />
                        <h3 className="text-lg font-bold mt-2 hover:underline hover:text-blue-400"></h3>

                        <Link to='/subscription'>
                            <button className="mt-8 font-semibold text-[#3A8CFB] border-2 border-blue-400 px-4 py-2  rounded-xl">Subscribe Now</button>
                        </Link>
                   </div>
            
            </div>
           
        </div>
    );
};

export default Articles;