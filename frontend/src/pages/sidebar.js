
  import { Link } from 'react-router-dom';
  import { FiPackage, FiBarChart2, FiUsers, FiShoppingCart, FiUserCheck, FiHome, FiLogOut } from 'react-icons/fi'; // Importing specific icons from react-icons


  const Sidebar = () => {
    return (
      <div className="min-h-screen bg-pink-200 w-1/5  flex flex-col items-center ">
        {/* Logo */}
        <div className="py-4 font-poppins flex items-center">
          <img
            src="./img/logo.jpg"
            className="w-10 h-10 rounded-full object-cover mr-2 border-2 border-pink-300"
            alt="Lady Coders Logo"
          />
          <span>Lady Coders</span>
        </div>
        {/* Sidebar Links */}
        <div className="flex flex-col items-center mt-2 justify-start ">
          <Link to="/dashboard" className="my-2 p-2 hover:bg-pink-400 rounded flex items-center">
            <FiHome className="mr-2" /> {/* Icon */}
            Dashboard
          </Link>
          <Link to="/inventory" className="my-2 p-2 hover:bg-pink-400 rounded flex items-center">
            <FiPackage className="mr-2" /> {/* Icon */}
            Inventory
          </Link>
          <Link to="/reports" className="my-2 p-2 hover:bg-pink-400 rounded flex items-center">
            <FiBarChart2 className="mr-2" /> {/* Icon */}
            Reports
          </Link>
          <Link to="/suppliers" className="my-2 p-2 hover:bg-pink-400 rounded flex items-center">
            <FiUsers className="mr-2" /> {/* Icon */}
            Suppliers
          </Link>
          <Link to="/orders" className="my-2 p-2 hover:bg-pink-400 rounded flex items-center">
            <FiShoppingCart className="mr-2" /> {/* Icon */}
            Customers
          </Link>
          <Link to="/admin" className="my-2 p-2 hover:bg-pink-400 rounded flex items-center">
            <FiUserCheck className="mr-2" /> {/* Icon */}
            Admin 
          </Link>
          <Link to="/register" className="my-2 p-2 hover:bg-pink-400 rounded flex items-center">
            <FiLogOut className="mr-2" /> {/* Icon */}
            Log Out 
          </Link>
        </div>
      </div>
    );
  };
  

  export default Sidebar;
