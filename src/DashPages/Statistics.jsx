import { useEffect, useState } from "react";
import useUserData from "../Hooks/useUserData";

const Statistics = () => {
    const userData = useUserData()
    // console.log(userData);
    const {email, role, name} = userData

    const [articles , setArticles] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/articles')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="p-6 bg-blue-200 rounded shadow">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl font-bold">10,000</p>
        </div>
        <div className="p-6 bg-green-200 rounded shadow">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-2xl font-bold">$45,000</p>
        </div>
        <div className="p-6 bg-red-200 rounded shadow">
          <h3 className="text-lg font-semibold">Total Articles</h3>
          <p className="text-2xl font-bold">350+</p>
        </div>
      </div>

      {/* Sales Trend Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">User Info</h2>
        <div className="bg-white p-6 rounded shadow">
          <p className=" text-xl font-semibold">User Name: {name}</p>
          <p className="text-gray-700 text-lg">User Email: {email}</p>
          <p></p>
          <p className="text-gray-700 text-lg">Role : {role}</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-pink-200 rounded shadow">
            <h3 className="text-lg font-semibold">Recent Added Articles</h3>
            <ul className="mt-2 space-y-2">
                {
                    articles?.slice(0, 6)?.map((p, idx) =><li key={idx}>- {p.title}</li>)
                }
              
            </ul>
          </div>
          <div className="p-6 bg-gray-200 rounded shadow">
            <h3 className="text-lg font-semibold">Publishers</h3>
            <p className="text-2xl font-bold">12+</p>
          </div>
        </div>
      </div>
    </div>    
    );
};

export default Statistics;