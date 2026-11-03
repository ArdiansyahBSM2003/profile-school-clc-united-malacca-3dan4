import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import { usePageTitle } from '../../shared/hooks/usePageTitle';

const users = [
  { name: '[NAMA SUPER ADMIN]', email: '[EMAIL ADMIN]', role: 'Super Admin', status: 'Aktif' },
  { name: '[NAMA OPERATOR]', email: '[EMAIL OPERATOR]', role: 'Admin / Operator', status: 'Aktif' },
  { name: '[NAMA ADMIN 2]', email: '[EMAIL ADMIN 2]', role: 'Admin / Operator', status: 'Aktif' },
  { name: '[NAMA GURU]', email: '[EMAIL GURU]', role: 'Guru', status: 'Aktif' },
];

function UserManagement() {
  usePageTitle('Pengguna Sistem');
  return (
    <>
      <AdminHeader title="Pengguna Sistem" description="Kelola akun admin, operator, dan guru." action={<button className="admin-gold" type="button">+ Tambah pengguna</button>} />
      <div className="admin-card permission-banner"><strong>Hak akses berdasarkan role</strong><span>Super Admin dapat melihat dan mengubah seluruh data. Admin dan Guru hanya mendapatkan akses sesuai tugasnya.</span></div>
      <section className="admin-card user-management-card">
        <div className="card-title-row"><h2>Daftar pengguna</h2><select defaultValue="all"><option value="all">Semua role</option><option>Super Admin</option><option>Admin / Operator</option><option>Guru</option></select></div>
        <div className="user-table">
          <div className="user-row user-head"><span>Pengguna</span><span>Role</span><span>Status</span><span>Aksi</span></div>
          {users.map((user) => <div className="user-row" key={user.email}><div className="user-identity"><span>{user.name.slice(0, 2)}</span><strong>{user.name}<small>{user.email}</small></strong></div><span className="role-chip">{user.role}</span><span><em className="status verified">{user.status}</em></span><button className="text-green" type="button">Ubah</button></div>)}
        </div>
      </section>
      <Link className="admin-secondary" to="/admin/super">← Kembali ke Super Admin</Link>
    </>
  );
}

export default UserManagement;
