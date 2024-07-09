import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import MyAccount from './MyAccount';
import Appointment from './Appointment';
import DonationHistory from './DonationHistory';
import ActiveStatus from './ActiveStatus';
import Setting from './Setting';

export default function MainContent() {
  return (
    <Routes>
      <Route path="/recipient/profile" element={<Profile />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/donationhistory" element={<DonationHistory />} />
      <Route path="/activestatus" element={<ActiveStatus />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}
