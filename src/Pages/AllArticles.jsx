import { Link, useLoaderData } from "react-router-dom";

const AllArticles = () => {
    const allArticles = useLoaderData()

    console.log(allArticles)
    return (
        <div className="max-w-7xl mx-auto ">
            <div className="my-10 ">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
               All Articles
            </h2>
            </div>
            {/* Search and Sort Options */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Sort Dropdown */}
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            // value={sortOption}
            // onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="title">Sort by Title</option>
            <option value="publisher">Sort by Publisher</option>
          </select>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                allArticles.map((article) =>
                    article.status === 'approve' &&
            
            <div
              key={article.id}
              className="relative group bg-white shadow-md rounded-xl overflow-hidden transform hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col"
            >
              
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />

              
              <div className="p-6 flex-grow">
               
                <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {article.tags}
                </span>

                
                <h3 className="text-xl font-bold text-gray-800 mt-4 group-hover:text-indigo-600 transition duration-300">
                  {article.title}
                </h3>

                
                <p className="text-gray-600 text-sm mt-2 ">
                  {article.description.slice(0, 100)}...
                </p>
              </div>

              
              <div className="w-full mt-auto bg-gray-100 p-4 text-right">
                <p className="text-sm text-gray-500">
                  Published by:{" "}
                  <span className="text-gray-800 font-semibold">
                    {article.publisher}
                  </span>
                </p>
                <Link to={`/details/${article._id}`}><button className="text-indigo-500 font-semibold hover:text-indigo-700 hover:underline">
                  Details
                </button>
                </Link>
              </div>
            </div>
              )
            }
        </div>
        </div>
    );
};

export default AllArticles;