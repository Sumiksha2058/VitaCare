import React from 'react';
import './App.css'; // Example CSS import
import HomePage from './Components/HomePage';
import Head from './Components/Head';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/SignUp';
import DonorDashboard from './Components/Dashboard/DonorDashboard/Dashboard';
import RecipientDashboard from './Components/Dashboard/ReciverDashboard/Dashboard';
import MyAccount from './Components/Dashboard/DonorDashboard/MyAccount';
import Appointment from './Components/Dashboard/DonorDashboard/Appointment';
import ActiveStatus from './Components/Dashboard/DonorDashboard/ActiveStatus';
import DonationHistory from './Components/Dashboard/DonorDashboard/DonorHistory';
import Setting from './Components/Dashboard/DonorDashboard/Setting';
import Profile from './Components/Dashboard/DonorDashboard/Profile';
import Membership from './Components/Membership';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="" element={<Head />} />
        <Route path="/donor" element={<DonorDashboard />} />
        <Route path="/recipient" element={<RecipientDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/membership' element={<Membership />} />
        <Route path="" element={<Footer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/donationhistory" element={<DonationHistory />} />
        <Route path="/activestatus" element={<ActiveStatus />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
