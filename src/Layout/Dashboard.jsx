import { Link, NavLink, Outlet } from "react-router-dom";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { MdPendingActions } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { IoStatsChart } from "react-icons/io5";




const Dashboard = () => {
    return (
        <div className=" flex gap-5">
            <div className="w-64 min-h-screen bg-blue-400 p-4 ">
                <div className="space-y-6">
                     <Link to='/' className="text-white text-3xl font-bold border-b pb-4">The Spectator</Link>     
                     <NavLink to='/dashboard/statistics' ><h3 className="mt-8 flex gap-1 text-white items-center text-xl font-semibold "><IoStatsChart className="border-2 border-white p-1 rounded-xl text-2xl"></IoStatsChart>Overview</h3>
                     </NavLink>
                    <NavLink to='/dashboard/user' ><h3 className="mt-2 flex gap-1 text-white items-center text-xl font-semibold"><HiMiniUsers className="border-2 border-white p-1 rounded-xl text-2xl"></HiMiniUsers>All Users</h3>
                    </NavLink>

                    <NavLink to='/dashboard/addPublisher' ><h3 className="mt-2 flex gap-1 text-white items-center text-xl font-semibold"><HiUserAdd className="border-2 border-white p-1 rounded-xl text-2xl"></HiUserAdd>Add Publisher</h3>
                    </NavLink>
                    
                    <NavLink to='/dashboard/premiumArticles' ><h3 className="mt-2 flex gap-1 text-white items-center text-xl font-semibold"><MdOutlineWorkspacePremium className="border-2 border-white p-1 rounded-xl text-2xl"></MdOutlineWorkspacePremium>Make Premium</h3>
                    </NavLink>
                    <NavLink to='/dashboard/pendingArticles' ><h3 className="mt-2 flex gap-1 text-white items-center text-xl font-semibold"><MdPendingActions className="border-2 border-white p-1 rounded-xl text-2xl"></MdPendingActions>Pending Articles</h3>
                    </NavLink>
                    
                </div>
            </div>
            {/* content */}

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;