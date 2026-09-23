import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import ProtectedRoute from './components/ProtectedRoute';
import Splash from './components/Splash';

import Home from './pages/Home';
import Browse from './pages/Browse';
import BookingFlow from './pages/BookingFlow';
import OrderTracking from './pages/OrderTracking';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Workers from './pages/Workers';
import Jobs from './pages/Jobs';
import RealEstate from './pages/RealEstate';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLayout from './pages/admin/AdminLayout';
import AdminWorkers from './pages/admin/AdminWorkers';
import AdminCustomers from './pages/admin/AdminCustomers';
import AdminJobs from './pages/admin/AdminJobs';
import AdminSubscriptions from './pages/admin/AdminSubscriptions';
import AdminSubscriptionReports from './pages/admin/AdminSubscriptionReports';

import WorkerDashboard from './pages/worker/WorkerDashboard';
import WorkerLayout from './pages/worker/WorkerLayout';
import WorkerHome from './pages/worker/WorkerHome';
import WorkerServices from './pages/worker/WorkerServices';
import WorkerSubscription from './pages/worker/WorkerSubscription';
import WorkerProfile from './pages/worker/WorkerProfile';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  const isAdminOrWorker = pathname.startsWith('/admin') || pathname.startsWith('/worker');

  return (
    <>
      <Splash />
      {!isAdminOrWorker && <Navbar />}
      <main className={`app-main ${isAdminOrWorker ? 'admin-worker' : ''}`}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/realestate" element={<RealEstate />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Customer */}
          <Route path="/book/:id" element={<BookingFlow />} />
          <Route path="/track/:id" element={<OrderTracking />} />
          <Route path="/orders" element={
            <ProtectedRoute roles={['customer', 'admin']}>
              <Orders />
            </ProtectedRoute>
          } />

          {/* Admin */}
          <Route path="/admin" element={<ProtectedRoute roles={['admin']}><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="customers"               element={<AdminCustomers />} />
            <Route path="workers"                 element={<AdminWorkers />} />
            <Route path="jobs"                    element={<AdminJobs />} />
            <Route path="subscriptions"           element={<AdminSubscriptions />} />
            <Route path="subscription-reports"    element={<AdminSubscriptionReports />} />
          </Route>

          {/* Worker */}
          <Route path="/worker" element={<ProtectedRoute roles={['worker']}><WorkerLayout /></ProtectedRoute>}>
            <Route index element={<WorkerHome />} />
            <Route path="services"        element={<WorkerServices />} />
            <Route path="subscription"    element={<WorkerSubscription />} />
            <Route path="profile"         element={<WorkerProfile />} />
          </Route>
        </Routes>
      </main>
      {!isAdminOrWorker && <BottomNav />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
