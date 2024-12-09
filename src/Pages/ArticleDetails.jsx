import { useLoaderData, useParams } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";



const ArticleDetails = () => {
    const {id} = useParams()
    const [count, setCount] = useState(null);

     useEffect(() => {
           fetch(`http://localhost:5000/article/${id}`)
           .then(res => res.json())
           .then( data => setCount(data))
        }, [id]);


    const details = useLoaderData()
    const {title, image, tags, date, user_name, publisher, description} = details;
    return (
        <div className="max-w-7xl mx-auto mb-16">
             <div className="mt-16 mb-8 text-center">
                 <p className="text-xl font-semibold underline"><span className="text-2xl ">Publisher:</span>  {publisher}</p>
                 <p className="text-xl font-semibold"><span className="text-2xl ">Total Viewers:</span> {count?.views}</p>
                 
             </div>
                 
                    <img className="w-9/12 mx-auto h-[550px]" src={image} alt="" />
              <Parallax speed={10}>
                 
                <div className="text-center my-8">
                    <img className="w-16 h-16 mx-auto" src="https://i.ibb.co/yqX9tgR/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg" alt="" />
                    
                
                    <p className="text-xl font-semibold">{user_name}</p>
                    <p>{date}</p>
                </div>
                <h1 className="text-4xl font-bold mt-8 underline">{title}</h1>
                <p className="text-2xl font-semibold mb-8">#{tags}</p>
                <p className="text-lg font-medium">{description}</p>
              </Parallax>
        </div>
    );
};

export default ArticleDetails;