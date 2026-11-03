import AdminHeader from '../components/AdminHeader';
import { usePageTitle } from '../../shared/hooks/usePageTitle';

function Field({ label, placeholder, type = 'text' }) { return <label className="admin-field">{label}<input placeholder={placeholder} type={type} /></label>; }

function AdminSettings() {
  usePageTitle('Pengaturan Website');
  return <><AdminHeader title="Pengaturan Website" description="Ubah informasi yang tampil di halaman publik dan footer." /><div className="settings-stack"><section className="admin-card"><h2>Profil sekolah</h2><div className="form-two"><Field label="Nama sekolah" placeholder="CLC United Malacca" /><Field label="Jenjang" placeholder="Kelas 0 – SMP" /></div><label className="admin-field">Deskripsi singkat<textarea placeholder="[Tulis sejarah, visi, dan misi sekolah]" /></label></section><section className="admin-card"><h2>Kontak sekolah</h2><div className="form-three"><Field label="Alamat" placeholder="[ALAMAT SEKOLAH]" /><Field label="WhatsApp" placeholder="[NOMOR]" /><Field label="Email" placeholder="[EMAIL SEKOLAH]" /><Field label="Jam layanan" placeholder="[HARI & JAM]" /></div></section><section className="admin-card"><h2>Media sosial</h2><div className="form-three"><Field label="YouTube" placeholder="[LINK ATAU NAMA AKUN]" /><Field label="Instagram" placeholder="[LINK ATAU NAMA AKUN]" /><Field label="Facebook" placeholder="[LINK ATAU NAMA AKUN]" /></div></section><section className="admin-card"><h2>Pendaftaran siswa baru</h2><div className="form-three"><Field label="Tanggal dibuka" placeholder="" type="date" /><Field label="Tanggal ditutup" placeholder="" type="date" /><Field label="Tahun ajaran" placeholder="[TAHUN AJARAN]" /></div><Field label="Status pendaftaran" placeholder="Dibuka" /></section><button className="admin-primary" type="button">Simpan perubahan</button> <button className="admin-secondary" type="button">Batal</button></div></>;
}

export default AdminSettings;
