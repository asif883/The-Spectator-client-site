import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";


import { HiMiniUsers } from "react-icons/hi2";
import { IoStatsChart } from "react-icons/io5";


import '../Pages/Css/dash.css'

const Dashboard = () => {
    return (
        <div className=" flex gap-5">
            <div className="w-64 min-h-screen bg-blue-400 p-4 ">
                <div className="">
                     <Link to='/' className="text-white text-3xl font-bold border-b pb-4">The Spectator</Link>     
                    <NavLink to='/dashboard/home'><h3 className="flex gap-1 text-white items-center text-xl font-semibold mt-8"><FaHome className="border-2 border-white p-1 rounded-xl text-2xl"></FaHome> Home</h3>
                    </NavLink>
                    <NavLink to='/dashboard/user' ><h3 className="mt-2 flex gap-1 text-white items-center text-xl font-semibold"><HiMiniUsers className="border-2 border-white p-1 rounded-xl text-2xl"></HiMiniUsers> User</h3>
                    </NavLink>
                    <NavLink to='/dashboard/statistics' ><h3 className="mt-2 flex gap-1 text-white items-center text-xl font-semibold "><IoStatsChart className="border-2 border-white p-1 rounded-xl text-2xl"></IoStatsChart> Statistics</h3>
                    </NavLink>
                </div>
            </div>
            {/* content */}

            <div className="flex-1 mt-16">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;