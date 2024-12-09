

const Profile = () => {
  const isPremium = false; // Change to `true` for premium user simulation
  const articles = [
    "Tech Trends 2024",
    "Understanding AI",
    "Future of Blockchain",
    "React Tips & Tricks",
    "Introduction to Quantum Computing",
  ];

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* User Profile Section */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
          U
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">John Doe</h1>
          <p className="text-gray-600">
            Articles Published: <span className="font-bold">{articles.length}</span>
          </p>
        </div>
      </div>

      {/* Dropdown to Show Articles */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Your Articles</h2>
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="btn btn-block btn-outline text-gray-700 bg-gray-100 hover:bg-gray-200"
          >
            View Article Titles
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-lg w-full mt-2"
          >
            {/* {articles.map((article, index) => (
              <li key={index} className="py-1 px-4 hover:bg-gray-100 rounded">
                {index + 1}: {article}
              </li>
            ))} */}
          </ul>
        </div>
      </div>

      {/* Premium Subscription Section */}
      {!isPremium && (
        <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
          <p className="text-gray-700">
            <strong>Not a premium user?</strong> Unlock exclusive content and features by subscribing!
          </p>
          <button className="mt-3 w-full bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600">
            Subscribe Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
