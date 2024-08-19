import { useLoaderData } from "react-router-dom";

const AllArticles = () => {
    const allArticles = useLoaderData()

    console.log(allArticles)
    return (
        <div>
            {
                allArticles.map((article, idx) =>
                 <div className="border p-6 m-4" key={idx}>
                    <h1 className="text-2xl font-semibold">{article.title}</h1>
                </div>)
            }
        </div>
    );
};

export default AllArticles;