import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import LandingPage from '../modules/landing/pages/LandingPage';

function PublicRoute() {
  return <Outlet />;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicRoute />}>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}