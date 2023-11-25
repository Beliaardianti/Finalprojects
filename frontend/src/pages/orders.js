import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';


const Orders = () => {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-pink-400">
      <div className="bg-white p-8 rounded shadow-md w-9/12">
        <h2 className="text-2xl font-bold mb-4 text-center">Orders</h2>
        {/* Isi dengan konten yang sesuai untuk halaman order */}
        <div>
          <Link to="/dashboard" className="block mt-4 bg-pink-400 text-white py-2 rounded text-center">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;