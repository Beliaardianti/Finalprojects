import { Link } from "react-router-dom";
import {
  FiPackage,
  FiBarChart2,
  FiUsers,
  FiShoppingCart,
  FiUserCheck,
  FiHome,
  FiLogOut,
} from "react-icons/fi"; // Importing specific icons from react-icons

const Sidebar = () => {
  return (
    <div className="min-h-screen white w-1/5  flex flex-col items-start px-8 ">
      {/* Logo */}
      <div className="py-4 font-poppins flex items-center">
        <img
          src="./img/logo.jpg"
          className="w-12 h-12 rounded-full object-cover mr-5 border-2 border-pink-300"
          alt="Lady Coders Logo"
        />
        <span className="font-medium text-md text-pink-400 uppercase">
          Lady Coders
        </span>
      </div>
      {/* Sidebar Links */}
      <div className="flex flex-col items-start mt-2 justify-start ">
        <Link
          to="/dashboard"
          className="my-2 p-2 hover:text-pink-400 rounded flex items-center"
        >
          <FiHome className="mr-5" /> {/* Icon */}
          Dashboard
        </Link>
        <Link
          to="/inventory"
          className="my-2 p-2  hover:text-pink-400 rounded flex items-center"
        >
          <FiPackage className="mr-5" /> {/* Icon */}
          Inventory
        </Link>
        <Link
          to="/reports"
          className="my-2 p-2  hover:text-pink-400 rounded flex items-center"
        >
          <FiBarChart2 className="mr-5" /> {/* Icon */}
          Reports
        </Link>
        <Link
          to="/suppliers"
          className="my-2 p-2  hover:text-pink-400 rounded flex items-center"
        >
          <FiUsers className="mr-5" /> {/* Icon */}
          Suppliers
        </Link>
        <Link
          to="/orders"
          className="my-2 p-2  hover:text-pink-400 rounded flex items-center"
        >
          <FiShoppingCart className="mr-5" /> {/* Icon */}
          Customers
        </Link>
        <Link
          to="/admin"
          className="my-2 p-2  hover:text-pink-400 rounded flex items-center"
        >
          <FiUserCheck className="mr-5" /> {/* Icon */}
          Admin
        </Link>
        <div>
          <Link
            to="/register"
            className="my-2 p-2  hover:text-pink-400 rounded flex items-center"
          >
            <FiLogOut className="mr-5" /> {/* Icon */}
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
