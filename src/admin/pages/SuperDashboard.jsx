import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import { usePageTitle } from '../../shared/hooks/usePageTitle';

function SuperDashboard() {
  usePageTitle('Super Admin');
  return (
    <>
      <AdminHeader title="Super Admin" description="Pantau pengguna, akses, dan aktivitas sistem sekolah." />
      <div className="admin-stat-grid">
        <div className="admin-stat orange"><strong>3</strong><span>Pengguna aktif</span></div>
        <div className="admin-stat gold"><strong>2</strong><span>Admin & operator</span></div>
        <div className="admin-stat green"><strong>1</strong><span>Guru terdaftar</span></div>
        <div className="admin-stat dark"><strong>24</strong><span>Aktivitas minggu ini</span></div>
      </div>
      <div className="dashboard-grid">
        <section className="admin-card">
          <div className="card-title-row"><h2>Ringkasan akses</h2><Link to="/admin/super/pengguna">Kelola pengguna →</Link></div>
          <div className="role-summary"><div><strong>Super Admin</strong><span>1 pengguna · Akses penuh</span></div><b>1</b></div>
          <div className="role-summary"><div><strong>Admin / Operator</strong><span>2 pengguna · Kelola operasional</span></div><b>2</b></div>
          <div className="role-summary"><div><strong>Guru</strong><span>1 pengguna · Akses terbatas</span></div><b>1</b></div>
        </section>
        <section className="admin-card quick-actions"><h2>Aksi cepat</h2><Link className="admin-primary" to="/admin/super/pengguna">+ Tambah pengguna</Link><Link className="admin-secondary" to="/admin/super/log-aktivitas">Lihat log aktivitas</Link><Link className="admin-secondary" to="/admin/pengaturan">Pengaturan website</Link></section>
      </div>
      <section className="admin-card super-notice"><strong>Catatan keamanan</strong><p>Role dan izin harus tetap diverifikasi di backend. Menu frontend hanya mengatur tampilan dan bukan pengganti autentikasi server.</p></section>
    </>
  );
}

export default SuperDashboard;
