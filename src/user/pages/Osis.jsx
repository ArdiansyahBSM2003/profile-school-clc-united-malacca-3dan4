import { usePageTitle } from '../../shared/hooks/usePageTitle';

const members = ['Anggota 1', 'Anggota 2', 'Anggota 3', 'Anggota 4', 'Anggota 5', 'Anggota 6', 'Anggota 7', 'Anggota 8'];

function Member({ role, leader = false }) {
  return <article className={`org-member${leader ? ' leader' : ''}`}><div className="avatar">[FOTO]</div><strong>[NAMA LENGKAP]</strong><small>{role}</small></article>;
}

function Osis() {
  usePageTitle('OSIS');
  return (
    <>
      <section className="page-hero"><div className="container"><span className="pill">Organisasi Siswa Intra Sekolah</span><h1>OSIS SMP CLC United Malacca 3 & 4</h1><p>Wadah siswa untuk belajar memimpin, bekerja sama, dan berkarya bagi sekolah serta lingkungan ladang.</p></div></section>
      <section className="content-section"><div className="container"><div className="info-grid"><div className="info-card"><h3>Visi</h3><p>[Tulis visi OSIS di sini.]</p></div><div className="info-card"><h3>Misi</h3><p>[Tulis misi OSIS di sini.]</p></div><div className="info-card"><h3>Dasar organisasi</h3><p>Berpedoman pada AD/ART OSIS SMP CLC United Malacca 3 & 4.</p></div></div><div style={{ textAlign: 'center' }}><span className="eyebrow">Struktur organisasi</span><h2>Pengurus OSIS</h2><div className="org-lines"><Member role="Pembina OSIS" leader /><Member role="Penasehat OSIS" leader /><br /><Member role="Ketua OSIS" leader /><br /><Member role="Sekretaris" /><Member role="Bendahara" /></div><div className="org-grid">{members.map((role) => <Member key={role} role={role} />)}</div></div><h2 style={{ marginTop: 74 }}>Kegiatan OSIS</h2><div className="gallery-grid"><div className="gallery-tile"><span>[FOTO KEGIATAN 1]</span></div><div className="gallery-tile"><span>[FOTO KEGIATAN 2]</span></div><div className="gallery-tile"><span>[FOTO KEGIATAN 3]</span></div></div></div></section>
    </>
  );
}

export default Osis;
