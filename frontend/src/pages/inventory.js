  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import Sidebar from './sidebar';
  import  SearchBox from './dashboard';

  
  const Inventory = () => {
    // State untuk menyimpan data produk
    const [products, setProducts] = useState([
      { id: 1, name: 'Product A', stock: 10, category: 'Category 1', expiredDate: '2023-12-31' },
      { id: 2, name: 'Product B', stock: 5, category: 'Category 2', expiredDate: '2023-11-30' },
      // ...Tambahkan data produk lainnya 
    ]);
  
    const totalProducts = products.length;
  
    const [newProduct, setNewProduct] = useState({
      id: '',
      name: '',
      stock: 0,
      category: '',
      expiredDate: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    };
  
    const addProduct = (e) => {
      e.preventDefault();
      if (
        newProduct.id &&
        newProduct.name &&
        newProduct.stock &&
        newProduct.category &&
        newProduct.expiredDate
      ) {
        setProducts([...products, newProduct]);
        setNewProduct({
          id: '',
          name: '',
          stock: 0,
          category: '',
          expiredDate: '',
        });
      } else {
        alert('Please fill in all fields');
      }
    };
  
    return (
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className=" flex flex-col items-center justify-center bg-pink-300 w-full">
          <div className="bg-pink-300 p-8 rounded shadow-md w-9/12">
            <h2 className="text-2xl font-bold mb-4 text-center">Inventory</h2>
            <div className="mb-4">
              <h3 className="font-bold">Categories:</h3>
              {/* Tampilkan kategori produk */}
              <ul>
                {Array.from(new Set(products.map((product) => product.category))).map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Total Products: {totalProducts}</h3>
              {/* Tampilkan total produk */}
            </div>
            <div className="mb-4">
              {/* Form untuk menambah produk */}
              <h3 className="font-bold mb-2">Add Product:</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    placeholder="Stock"
                    name="stock"
                    value={newProduct.stock}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="date"
                    name="expiredDate"
                    value={newProduct.expiredDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <button onClick={addProduct} className="bg-pink-600 text-white py-2 px-4 rounded">
                  Add New Product
                </button>
              </form>
            </div>
            <div className='mb-4 overflow-x-auto'>
              {/* Tampilkan daftar produk */}
              <h3 className="font-bold">Products:</h3>
              <table className="border-collapse border border-gray-400 w-full">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-4 py-2">ID</th>
                    <th className="border border-gray-400 px-4 py-2">Product</th>
                    <th className="border border-gray-400 px-4 py-2">Stock</th>
                    <th className="border border-gray-400 px-4 py-2">Category</th>
                    <th className="border border-gray-400 px-4 py-2">Expired Date</th>
                    <th className="border border-gray-400 px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="border border-gray-400 px-4 py-2">{product.id}</td>
                      <td className="border border-gray-400 px-4 py-2">{product.name}</td>
                      <td className="border border-gray-400 px-4 py-2">{product.stock}</td>
                      <td className="border border-gray-400 px-4 py-2">{product.category}</td>
                      <td className="border border-gray-400 px-4 py-2">{product.expiredDate}</td>
                      <td className="border border-gray-400 px-4 py-2" >
                        <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mr-2">
                          Delete
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Inventory;
  