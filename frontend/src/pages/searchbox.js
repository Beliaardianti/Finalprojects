import { FiSearch } from 'react-icons/fi';
// import { useState } from 'react';
import MiniProfile from './miniprofile';

const SearchBox = () => {
    // const [searchTerm, setSearchTerm] = useState('');
  
    // const handleSearchChange = (e) => {
    //   setSearchTerm(e.target.value);
    //   // Lakukan sesuatu dengan nilai search (misalnya: kirim ke API pencarian)
    // };
  
    return (
        <div className="w-full bg-gray-200  h-20 p-4 flex  justify-between fixed top-0 left-1/5 bottom-0  items-center overflow-x-auto">
          {/* SearchBox */}
          <div className="flex-grow">
            <div className="relative w-full">
            <input
            type="text"
            placeholder="Search product, supplier, order"
            className="w-4/12 pl-10 pr-4 py-2 border rounded-xl"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <FiSearch className="text-pink-400" />
            </div>
      </div>
          </div>
          {/* MiniProfile */}
          <div className="ml-4">
            <MiniProfile />
          </div>
        </div>
      
    );
  };
  

  export default SearchBox;