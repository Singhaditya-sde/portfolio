import { Route, Routes } from 'react-router-dom';

import MainLayout from '@/layout/MainLayout';
import LandingPage from '@/modules/landing/LandingPage';

export default function Routing() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
}
