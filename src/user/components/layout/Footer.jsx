import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><div className="brand"><span className="brand-mark">CLC</span><strong>CLC United Malacca</strong></div><p>Sekolah anak-anak Indonesia dari kelas 0 sampai SMP, tumbuh bersama masyarakat Ladang United Malacca.</p></div>
        <div><div className="footer-heading">Menu</div><div className="footer-links"><Link to="/">Beranda</Link><Link to="/osis">OSIS</Link><Link to="/galeri">Galeri</Link><Link to="/kontak">Kontak</Link><Link to="/pendaftaran">Daftar Siswa Baru</Link></div></div>
        <div><div className="footer-heading">Kontak</div><p>[ALAMAT SEKOLAH]<br />Ladang United Malacca, Johor, Malaysia<br />WhatsApp: [NOMOR]<br />Email: [EMAIL SEKOLAH]</p></div>
        <div className="footer-social"><div className="footer-heading">Ikuti kami</div><p><strong>YouTube</strong><br />[NAMA AKUN]</p><p><strong>Instagram</strong><br />[NAMA AKUN]</p><p><strong>Facebook</strong><br />[NAMA AKUN]</p></div>
      </div>
      <div className="copyright">© 2026 CLC United Malacca · Community Learning Centre. Semua hak dilindungi.</div>
    </footer>
  );
}

export default Footer;
