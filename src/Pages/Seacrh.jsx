/* eslint-disable react/prop-types */

import { FaSearch } from 'react-icons/fa';

const SearchBar = ({handleSearch}) => {
    return (
        <form onSubmit={handleSearch}>
            <label className='flex items-center '>
                <input type="text" name='search' className="p-3 border border-pink-500 rounded-l-md" placeholder="Search" />
                <button className='p-4 rounded-r-md bg-[#E82D85] border border-[#E82D85] text-white'><FaSearch></FaSearch></button>
            </label>
        </form>
    );
};

export default SearchBar;