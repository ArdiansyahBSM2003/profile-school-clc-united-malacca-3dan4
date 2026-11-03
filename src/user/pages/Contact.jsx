import { usePageTitle } from '../../shared/hooks/usePageTitle';

function Contact() {
  usePageTitle('Kontak');
  return <><section className="page-hero"><div className="container"><span className="pill">Kontak</span><h1>Hubungi kami</h1><p>Informasi pendaftaran siswa baru dan pertanyaan seputar sekolah.</p></div></section><section className="content-section"><div className="container contact-grid"><div><div className="contact-info"><strong>Alamat</strong><p>[ALAMAT SEKOLAH], Ladang United Malacca, Johor, Malaysia</p></div><div className="contact-info"><strong>Telepon / WhatsApp</strong><p>[NOMOR]</p></div><div className="contact-info"><strong>Email</strong><p>[EMAIL SEKOLAH]</p></div><div className="contact-info"><strong>Jam layanan</strong><p>[HARI & JAM]</p></div></div><form className="form-card"><h2>Kirim pesan</h2><label className="form-field">Nama<input type="text" /></label><label className="form-field">Nomor WhatsApp<input type="tel" /></label><label className="form-field">Pesan<textarea /></label><button className="button" type="submit">Kirim</button></form></div></section></>;
}

export default Contact;
