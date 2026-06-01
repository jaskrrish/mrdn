import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen font-sans selection:bg-[#C45E1A] selection:text-[#000000]">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
