import { Link } from 'react-router-dom';
import { usePageTitle } from '../../shared/hooks/usePageTitle';
import registrationBackground from '../../shared/assets/images/bg01.jpg';

const steps = [
  ['1', 'Isi formulir', 'Lengkapi data calon siswa dan orang tua atau wali.'],
  ['2', 'Siapkan dokumen', 'Serahkan berkas persyaratan ke sekolah.'],
  ['3', 'Verifikasi', 'Sekolah memeriksa data dan menghubungi orang tua.'],
  ['4', 'Daftar ulang', 'Terima pengumuman dan selesaikan daftar ulang.'],
];

function Registration() {
  usePageTitle('Pendaftaran Siswa Baru');
  return (
    <>
      <section className="page-hero registration-hero" style={{ '--registration-background': `url("${registrationBackground}")` }}><div className="container"><span className="pill">Penerimaan Siswa Baru</span><h1>Daftar Siswa Baru CLC United Malacca</h1><p>Terbuka untuk anak-anak dari kelas 0 sampai SMP. Baca alur dan persyaratannya, lalu isi formulir pendaftaran.</p><Link className="button gold" to="/pendaftaran/formulir">Isi Formulir Pendaftaran</Link></div></section>
      <section className="content-section registration-content"><div className="container"><span className="eyebrow">Alur pendaftaran</span><h2>Empat langkah mudah</h2><div className="registration-steps">{steps.map(([number, title, description]) => <article className="registration-step" key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>)}</div><div className="registration-info-grid"><section className="info-card registration-documents"><h3>Dokumen yang disiapkan</h3><ul><li>Fotokopi akta kelahiran calon siswa</li><li>Fotokopi kartu keluarga atau dokumen identitas orang tua</li><li>Pas foto terbaru calon siswa</li><li>Rapor atau surat keterangan dari sekolah sebelumnya (jika ada)</li></ul><small>[Sesuaikan daftar dokumen dengan ketentuan sekolah.]</small></section><section className="registration-cta"><h2>Siap mendaftar?</h2><p>Pastikan dokumen sudah siap, lalu isi formulir pendaftaran. Prosesnya hanya membutuhkan beberapa menit.</p><Link className="button gold" to="/pendaftaran/formulir">Isi Formulir Pendaftaran →</Link><small>Ada pertanyaan? Hubungi kami lewat <Link to="/kontak">halaman Kontak</Link>.</small></section><section className="registration-schedule"><h3>Jadwal pendaftaran</h3><p><strong>Dibuka:</strong> [TANGGAL BUKA]</p><p><strong>Ditutup:</strong> [TANGGAL TUTUP]</p><p><strong>Tahun ajaran:</strong> [TAHUN AJARAN]</p></section></div></div></section>
    </>
  );
}

export default Registration;
