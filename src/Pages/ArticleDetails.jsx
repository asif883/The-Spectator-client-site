import { useLoaderData } from "react-router-dom";


const ArticleDetails = () => {
    const details = useLoaderData()
    const {title, image, tags, date,user, publisher, description} = details;
    return (
        <div className="max-w-7xl mx-auto">
             <div className="mt-16 mb-8 text-center">
                 <p className="text-2xl font-semibold">{tags}</p>
                 <p className="text-xl font-semibold"><span className="text-2xl">Publisher:</span>  {publisher}</p>
             </div>
            <img className="w-9/12 mx-auto h-[550px]" src={image} alt="" />
            <h1 className="text-4xl font-bold">{title}</h1>
            <p>{description}</p>

        </div>
    );
};

export default ArticleDetails;