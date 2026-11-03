import AdminHeader from '../components/AdminHeader';
import { usePageTitle } from '../../shared/hooks/usePageTitle';

const roles = ['Pembina OSIS', 'Penasehat OSIS', 'Ketua OSIS', 'Sekretaris', 'Bendahara', 'Anggota 1', 'Anggota 2', 'Anggota 3', 'Anggota 4', 'Anggota 5', 'Anggota 6', 'Anggota 7', 'Anggota 8'];

function AdminOsis() {
  usePageTitle('Pengurus OSIS');
  return <><AdminHeader title="Pengurus OSIS" description="Atur nama, foto, dan jabatan pengurus OSIS." action={<button className="admin-gold" type="button">+ Tambah pengurus</button>} /><div className="admin-card notice"><strong>Struktur saat ini:</strong> 1 Pembina, 1 Penasehat, 1 Ketua, 1 Sekretaris, 1 Bendahara, dan 8 Anggota. Urutan ini tampil di halaman OSIS website.</div><div className="osis-admin-grid">{roles.map((role) => <article className="osis-admin-card" key={role}><div className="avatar">[FOTO]</div><div><strong>[NAMA LENGKAP]</strong><small>{role}</small></div><button className="text-green" type="button">Ubah</button></article>)}</div></>;
}

export default AdminOsis;
