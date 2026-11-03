import { NavLink, Outlet, Link } from 'react-router-dom';

const links = [
  ['/', 'Dashboard'],
  ['/admin/pendaftar', 'Pendaftar'],
  ['/admin/galeri', 'Galeri'],
  ['/admin/osis', 'Pengurus OSIS'],
  ['/admin/pengaturan', 'Pengaturan'],
  ['/admin/super/pengguna', 'Pengguna sistem'],
  ['/admin/super/log-aktivitas', 'Log aktivitas'],
];

function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" to="/admin"><span className="brand-mark">CLC</span><span><strong>CLC United<br />Malacca</strong><small>Panel Admin</small></span></Link>
        <div className="admin-menu-label">Menu</div>
        <nav className="admin-nav">{links.map(([to, label]) => <NavLink end={to === '/'} key={label} to={to}>{label}</NavLink>)}</nav>
        <div className="admin-sidebar-bottom"><Link to="/">Lihat website →</Link><Link to="/admin/login">Keluar</Link></div>
      </aside>
      <main className="admin-main"><Outlet /></main>
    </div>
  );
}

export default AdminLayout;
