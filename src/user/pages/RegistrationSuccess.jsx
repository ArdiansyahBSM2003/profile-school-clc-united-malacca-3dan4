import { Link } from 'react-router-dom';
import { usePageTitle } from '../../shared/hooks/usePageTitle';

function RegistrationSuccess() {
  usePageTitle('Pendaftaran Berhasil');
  return <section className="success-page"><div className="success-card"><div className="success-icon">✓</div><h1>Pendaftaran Berhasil Dikirim</h1><p>Terima kasih sudah mendaftar di CLC United Malacca.</p><div className="registration-number"><small>Nomor pendaftaran</small><strong>[NO. PENDAFTARAN]</strong></div><h3>Langkah berikutnya</h3><ol><li>Simpan nomor pendaftaran di atas.</li><li>Sekolah akan memeriksa data dan menghubungi Anda lewat WhatsApp.</li><li>Bawa dokumen asli saat diminta untuk verifikasi dan daftar ulang.</li></ol><div className="success-actions"><Link className="button" to="/">Kembali ke Beranda</Link><button className="button outline-dark" type="button">Cetak bukti pendaftaran</button></div></div></section>;
}

export default RegistrationSuccess;
