/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FiFilter } from "react-icons/fi";

const Filter = ({publishers,tags,setPublishers,setAllTags}) => {

    return (
        <div>
            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className=""><p  className='p-3 border-2 w-48 rounded-md border-blue-300  text-blue-600 mb-6 flex gap-2 items-center justify-center'><FiFilter/> Filter </p></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-6 shadow">
                <div className='flex flex-col gap-2 items-center'>
            <select className="select w-40 border-2 border-blue-300" onChange={(e) => setPublishers(e.target.value)}>   

                 <option selected disabled>Publisher</option>

                 {
                    publishers?.map((Publisher) =>
                        <option
                         key={Publisher} 
                         value={Publisher}
                         >
                            {Publisher}
                         </option>  
                        
                    )
                 }
           </select>
            <select className="select w-40 border-2 border-blue-300" onChange={(e)=> setAllTags(e.target.value)}>  
            <option selected disabled>Tags</option>
                 {
                       tags?.map((brand , idx) =>
                        <option key={idx} value={brand}>{brand}</option>  
                    )
                 }
           </select>
            </div>
                </ul>
            </div>
        </div>
    );
}

export default Filter;