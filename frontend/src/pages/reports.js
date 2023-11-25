import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar"

const Reports = () => {
  return (
    <div className="min-h-screen flex"> 
    <Sidebar/>
    <div className="flex flex-col items-center justify-center bg-pink-400 w-full">
      <div className="bg-white p-8 rounded shadow-md w-80">
        {/* Overview Report */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-blue-500">
            Overview Report
          </h2>
          <table className="w-full">
            <tbody>
              <tr>
                <td>$1000</td>
                <td>Total Profit</td>
              </tr>
              <tr>
                <td>$2000</td>
                <td className="text-orange-500">Revenue</td>
              </tr>
              <tr>
                <td>100 units</td>
                <td className="text-purple-500">Sales</td>
              </tr>
              <tr>
                <td>$5000</td>
                <td>Net Purchase Value</td>
              </tr>
              <tr>
                <td>$1000</td>
                <td>Net Sales Value</td>
              </tr>
              <tr>
                <td>5%</td>
                <td>MoM Profit</td>
              </tr>
              <tr>
                <td>10%</td>
                <td>YoY Profit</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Best Selling Category Report */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-blue-500">
            Best Selling Category Report
          </h2>

          {/*  Belum dideklarasikan untuk link See All */}
          {/* <Link to="#" className="text-blue-500" onClick={handleSeeAllClick}>
            {showAllColumns ? "Hide" : "See All"}
          </Link> */}
          <table className="w-full">
            <thead>
              <tr>
                <th>Category</th>
                <th>Turn Over</th>
                <th>Increase By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Skincare</td>
                <td>$800,000</td>
                <td>2.3%</td>
              </tr>
              <tr>
                <td>Makeup</td>
                <td>$800,000</td>
                <td>2.3%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Profit & Revenue Chart */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-blue-500">
            Profit & Revenue
          </h2>
          {/* Tambahkan elemen chart atau grafik di sini  */}
          {/* Misalnya, Anda dapat menggunakan library seperti Chart.js atau recharts */}
          {/* Contoh: <BarChart data={chartData} /> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reports;
