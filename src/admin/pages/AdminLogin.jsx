import { Link } from 'react-router-dom';
import { usePageTitle } from '../../shared/hooks/usePageTitle';

function AdminLogin() {
  usePageTitle('Masuk Admin');
  return <div className="admin-login"><div className="admin-login-brand"><span className="brand-mark">CLC</span><strong>CLC United Malacca<small>Panel Admin</small></strong></div><form className="admin-login-card"><h1>Masuk Admin</h1><p>Kelola website CLC United Malacca.</p><label className="admin-field">Email atau nama pengguna<input placeholder="[EMAIL ADMIN]" type="text" /></label><label className="admin-field">Kata sandi<input type="password" /></label><button className="admin-primary" type="submit">Masuk</button><a href="#lupa">Lupa kata sandi?</a></form><Link className="login-back" to="/">← Kembali ke website</Link></div>;
}

export default AdminLogin;
