import { Outlet } from 'react-router-dom';
import TopAppBar from './TopAppBar';
import BottomNavBar from './BottomNavBar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-white relative">
      <TopAppBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <BottomNavBar />
      <Footer />
    </div>
  );
}
