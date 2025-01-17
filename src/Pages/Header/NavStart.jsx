import { useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";


const NavStart = () => {
        const [tags, setTags] = useState([])
        const navigate = useNavigate()

        useEffect(()=>{    
            const fetch = async()=>{
               const res = await  axios.get(`https://newspaper-server-silk.vercel.app/articles`)             
               setTags(res.data.tag)
           }
            fetch()    
       },[])

       const handleTagClick = (tag) => {
        navigate(`/all-articles?tag=${tag}`); 
    };

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                
                    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                            <RiMenu2Fill size={24}/>
                    </label>
                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="bg-base-100 text-base-content min-h-full w-80 p-6">
                    <h1 className="text-2xl font-bold pb-5">The Spectator</h1>
                    <input type="text" placeholder="Search In The Spectator" className="p-2 border border-gray-700 rounded-md w-full mt-3 mb-5 " />
                    <li className="space-y-3">
                    {
                        tags?.map((tag, idx)=>
                            <button to='' onClick={()=> handleTagClick(tag)}
                             key={idx} className='border-b border-dashed border-gray-700 px-4 py-2 text-center font-bold  flex gap-2 items-center justify-between w-full'>
                                <>{tag}</>
                                <><FaArrowRight/></>
                            </button>   
                        )
                    }
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavStart;