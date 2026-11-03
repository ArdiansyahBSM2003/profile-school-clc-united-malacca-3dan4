import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import { usePageTitle } from '../../shared/hooks/usePageTitle';

const rows = [['[NAMA SISWA]', 'Kelas 0', '[TANGGAL]', 'Baru'], ['[NAMA SISWA]', 'SD', '[TANGGAL]', 'Baru'], ['[NAMA SISWA]', 'SMP', '[TANGGAL]', 'Diverifikasi'], ['[NAMA SISWA]', 'SD', '[TANGGAL]', 'Diverifikasi'], ['[NAMA SISWA]', 'Kelas 0', '[TANGGAL]', 'Ditolak']];

function AdminDashboard() {
  usePageTitle('Dashboard Admin');
  return <><AdminHeader title="Dashboard" description="Ringkasan aktivitas website sekolah." /><div className="admin-stat-grid"><div className="admin-stat orange"><strong>[JML]</strong><span>Pendaftar baru</span></div><div className="admin-stat gold"><strong>[JML]</strong><span>Menunggu verifikasi</span></div><div className="admin-stat green"><strong>[JML]</strong><span>Foto di galeri</span></div><div className="admin-stat dark"><strong>13</strong><span>Pengurus OSIS</span></div></div><div className="dashboard-grid"><section className="admin-card"><div className="card-title-row"><h2>Pendaftar terbaru</h2><Link to="/admin/pendaftar">Lihat semua →</Link></div><div className="admin-table"><div className="table-row table-head"><span>Nama</span><span>Jenjang</span><span>Tanggal</span><span>Status</span></div>{rows.map(([name, level, date, status]) => <div className="table-row" key={`${name}-${level}-${status}`}><span>{name}</span><span>{level}</span><span>{date}</span><span><em className={`status ${status === 'Ditolak' ? 'rejected' : status === 'Baru' ? 'new' : 'verified'}`}>{status}</em></span></div>)}</div></section><section className="admin-card quick-actions"><h2>Aksi cepat</h2><Link className="admin-primary" to="/admin/galeri/tambah">+ Tambah foto galeri</Link><Link className="admin-secondary" to="/admin/osis">Ubah pengurus OSIS</Link><Link className="admin-secondary" to="/admin/pengaturan">Edit kontak sekolah</Link></section></div></>;
}

export default AdminDashboard;
