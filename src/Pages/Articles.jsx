import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";


const Articles = () => {
        const [articles, setArticles] = useState([]);

        useEffect(()=>{
            fetch('http://localhost:5000/articles')
            .then(res => res.json())
            .then(data=> setArticles(data))
        },[])


        const [showAll, setShowAll] = useState(false);

        const handleClick = () => {
            setShowAll(!showAll);
          };

    return (
        <div className="my-16 max-w-7xl mx-auto grid gap-6 grid-cols-4">
            {/* right */}

            <div className="space-y-6">

                {
                   articles.map((article , idx) => 
                    <div key={idx}>
                          <p className="text-blue-400 uppercase mb-1">{article.tags}</p>
                          <Link to={`details/${article._id}`} className="text-xl font-bold hover:underline hover:text-blue-400">{article.title}</Link>
                     </div>
                )
                }
                
            </div>

            {/* middle  */}

           <div className="col-span-2 space-y-6">
               {
                    articles?.slice(0, showAll ? articles.length :2 )?.map((article ,idx) => 
                        <Link to={`details/${article._id}`} key={idx} className="text-center ">
                            <img className="w-[700px] h-[400px]" src={article.image} alt={article.tags} />
                            <h1 className="text-2xl font-bold hover:underline hover:text-blue-400 mb-6">{article.title}</h1>
                       </Link>

                    )
                }

            <div className="text-center mt-8">
                {
                    articles?.length > 2 && (
                        <button onClick={handleClick} className="border px-8 py-2 rounded-lg font-semibold text-lg">{
                            showAll ? <FaAnglesUp></FaAnglesUp> :<FaAnglesDown></FaAnglesDown>
                        }</button>
                    )
                }
            </div>
           </div>

           

            {/* left  */}

            <div className="space-y-4">
                {
                    articles?.slice(0, showAll ? articles.length :3 )?.map((article, idx) => 
                    <div key={idx} className="text-center">
                        <img className="h-64 w-full" src={article.image} alt="" />
                        <h3 className="text-lg font-bold mt-2 hover:underline hover:text-blue-400">{article.title}</h3>
                   </div>
                )
                }

              <div className="text-center mt-6">
                {
                    articles?.length > 3 && (
                        <button onClick={handleClick} className="bg-[#5BBC2E] px-8 py-2 rounded-lg font-semibold text-lg text-white">{
                            showAll ? <FaAnglesUp></FaAnglesUp> :<FaAnglesDown></FaAnglesDown>
                        }</button>
                    )
                }
               </div>
            </div>
           
        </div>
    );
};

export default Articles;