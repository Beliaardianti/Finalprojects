import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Inventory from './pages/inventory';
import Reports from './pages/reports';
import Suppliers from './pages/suppliers';
import Orders from './pages/orders';
import Admin from './pages/admin';
import Register from './pages/register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
