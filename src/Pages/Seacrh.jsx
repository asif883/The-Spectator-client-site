/* eslint-disable react/prop-types */

import { FaSearch } from 'react-icons/fa';

const SearchBar = ({handleSearch}) => {
    return (
        <form onSubmit={handleSearch}>
            <label className='flex items-center '>
                <input type="text" name='search' className="p-3 border border-blue-300 rounded-l-md" placeholder="Search" />
                <button className='p-4 rounded-r-md bg-[#3A8CFB] text-white'><FaSearch></FaSearch></button>
            </label>
        </form>
    );
};

export default SearchBar;