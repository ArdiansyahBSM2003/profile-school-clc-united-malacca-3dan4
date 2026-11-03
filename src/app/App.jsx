import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../user/components/layout/Header';
import Footer from '../user/components/layout/Footer';
import Home from '../user/pages/Home';
import About from '../user/pages/About';
import Contact from '../user/pages/Contact';
import Gallery from '../user/pages/Gallery';
import Osis from '../user/pages/Osis';
import Registration from '../user/pages/Registration';
import RegistrationForm from '../user/pages/RegistrationForm';
import RegistrationSuccess from '../user/pages/RegistrationSuccess';
import AdminLogin from '../admin/pages/AdminLogin';
import AdminLayout from '../admin/components/AdminLayout';
import AdminDashboard from '../admin/pages/AdminDashboard';
import AdminGallery from '../admin/pages/AdminGallery';
import AdminAddPhoto from '../admin/pages/AdminAddPhoto';
import AdminApplicants from '../admin/pages/AdminApplicants';
import AdminOsis from '../admin/pages/AdminOsis';
import AdminSettings from '../admin/pages/AdminSettings';
import SuperDashboard from '../admin/pages/SuperDashboard';
import UserManagement from '../admin/pages/UserManagement';
import ActivityLog from '../admin/pages/ActivityLog';

function App() { 
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <div className={`app-shell${isAdminRoute ? ' admin-route-shell' : ''}`}>
      {!isAdminRoute && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/osis" element={<Osis />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/pendaftaran" element={<Registration />} />
          <Route path="/pendaftaran/formulir" element={<RegistrationForm />} />
          <Route path="/pendaftaran/berhasil" element={<RegistrationSuccess />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="galeri" element={<AdminGallery />} />
            <Route path="galeri/tambah" element={<AdminAddPhoto />} />
            <Route path="pendaftar" element={<AdminApplicants />} />
            <Route path="osis" element={<AdminOsis />} />
            <Route path="pengaturan" element={<AdminSettings />} />
            <Route path="super" element={<SuperDashboard />} />
            <Route path="super/pengguna" element={<UserManagement />} />
            <Route path="super/log-aktivitas" element={<ActivityLog />} />
          </Route>
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
