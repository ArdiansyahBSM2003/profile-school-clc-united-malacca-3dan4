import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import { usePageTitle } from '../../shared/hooks/usePageTitle';

const activities = [
  ['[NAMA OPERATOR]', 'Menambahkan foto ke galeri', 'Kegiatan belajar · [WAKTU]'],
  ['[NAMA ADMIN 2]', 'Mengubah status pendaftar', 'Menjadi Diverifikasi · [WAKTU]'],
  ['[NAMA GURU]', 'Memperbarui profil pengguna', 'Role Guru · [WAKTU]'],
  ['[NAMA SUPER ADMIN]', 'Mengubah pengaturan website', 'Kontak sekolah · [WAKTU]'],
  ['[NAMA OPERATOR]', 'Masuk ke panel admin', 'IP [ALAMAT IP] · [WAKTU]'],
];

function ActivityLog() {
  usePageTitle('Log Aktivitas');
  return (
    <>
      <AdminHeader title="Log Aktivitas" description="Riwayat perubahan dan aktivitas pengguna di panel admin." action={<button className="admin-secondary" type="button">Unduh log</button>} />
      <div className="admin-card filter-card log-filter"><label className="admin-field">Cari aktivitas<input placeholder="Cari nama atau aktivitas" /></label><label className="admin-field">Role<select defaultValue="all"><option value="all">Semua role</option><option>Super Admin</option><option>Admin / Operator</option><option>Guru</option></select></label><label className="admin-field">Periode<select defaultValue="7"><option value="7">7 hari terakhir</option><option value="30">30 hari terakhir</option></select></label></div>
      <section className="admin-card activity-card"><div className="activity-head"><span>Pengguna</span><span>Aktivitas</span><span>Detail</span></div>{activities.map(([name, action, detail]) => <div className="activity-row" key={`${name}-${action}`}><div className="user-identity"><span>{name.slice(0, 2)}</span><strong>{name}<small>Admin / Operator</small></strong></div><strong>{action}</strong><span>{detail}</span></div>)}</section>
      <Link className="admin-secondary" to="/admin/super">← Kembali ke Super Admin</Link>
    </>
  );
}

export default ActivityLog;
