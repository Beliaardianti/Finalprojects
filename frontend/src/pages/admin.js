import React from 'react';
import Sidebar from './sidebar';

const AdminAccounts = () => {
  // Data dummy untuk tabel admin
  const adminData = [
    { id: 1, username: 'admin1', gender: 'Male', email: 'admin1@example.com', phone: '1234567890' },
    { id: 2, username: 'admin2', gender: 'Female', email: 'admin2@example.com', phone: '9876543210' },
    // ...Tambahkan data admin lainnya jika diperlukan
  ];

  return (
    <div className='min-h-screen flex'> 
    <Sidebar />
    <div className="flex flex-col items-center justify-center bg-pink-400 w-full">
    
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Accounts</h2>
        <table className="w-full table-auto rounded">
          <thead className='bg-pink-300'>
            <tr>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone Number</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {adminData.map(admin => (
              <tr key={admin.id}>
                <td className="border px-4 py-2">{admin.username}</td>
                <td className="border px-4 py-2">{admin.gender}</td>
                <td className="border px-4 py-2">{admin.email}</td>
                <td className="border px-4 py-2">{admin.phone}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
                    Edit
                  </button>
                  
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
    </div>
  );
};

export default AdminAccounts;
