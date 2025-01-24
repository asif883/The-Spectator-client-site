import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const EditorsChoice = () => {
         const [articles , setArticles] = useState([])
         console.log(articles);
    
         useEffect(()=>{
            fetch('https://newspaper-server-silk.vercel.app/articles')
            .then(res => res.json())
            .then(data => setArticles(data?.articles))
         },[])

    return (
            <div className="max-w-7xl mx-auto my-16
            p-3">
                  <div>
                    <h1 className="text-3xl text-font uppercase mb-5 pl-8 md:pl-14 lg:pl-0">Editors <span className="text-pink-500">Choice</span></h1>
                  </div>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                        {
                            articles?.slice(15 ,19).map((article) => 
                             article.status === 'approve' &&
                              <div key={article?._id} className="w-[300px] mx-auto">
                                  <img className="object-cover w-[320px] h-[180px]" src={article?.image} alt="" />
                                 <Link to={`details/${article._id}`} className="nav-font text-xl hover:text-pink-600">{article?.title}</Link>
                                 <p className="text-sm text-gray-600 text-font">{article?.date}</p>  
                              </div>
                            )
                        }
                    </div>
         </div>
    );
};

export default EditorsChoice;