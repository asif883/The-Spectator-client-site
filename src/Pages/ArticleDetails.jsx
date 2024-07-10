import { useLoaderData } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";


const ArticleDetails = () => {
    const details = useLoaderData()
    const {title, image, tags, date, user_name, publisher, description} = details;
    return (
        <div className="max-w-7xl mx-auto mb-16">
             <div className="mt-16 mb-8 text-center">
                 <p className="text-2xl font-semibold">#{tags}</p>
                 <p className="text-xl font-semibold underline"><span className="text-2xl ">Publisher:</span>  {publisher}</p>
             </div>
                 <Parallax speed={10}>
                    <img className="w-9/12 mx-auto h-[550px]" src={image} alt="" />
                 </Parallax>
              <div className="text-center my-8">
                  <img className="w-16 h-16 mx-auto" src="https://i.ibb.co/yqX9tgR/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg" alt="" />
                  
              
                  <p className="text-xl font-semibold">{user_name}</p>
                  <p>{date}</p>
              </div>
            <h1 className="text-4xl font-bold my-8 underline">{title}</h1>
            <p className="text-lg font-medium">{description}</p>

        </div>
    );
};

export default ArticleDetails;