import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen font-sans selection:bg-[#C45E1A] selection:text-[#000000]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
