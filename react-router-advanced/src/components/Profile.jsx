import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import ProfileDetails from './profile/ProfileDetails';
import ProfileSettings from './profile/ProfileSettings';

export default function Profile(){
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <Link to="details" style={{marginRight:10}}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* nested route outlet */}
      <Routes>
        <Route index element={<p>Select a sub-section</p>} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
