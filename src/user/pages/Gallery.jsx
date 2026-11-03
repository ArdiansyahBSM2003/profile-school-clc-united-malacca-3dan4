import { usePageTitle } from '../../shared/hooks/usePageTitle';

const groups = [
  ['Kegiatan belajar', ['[FOTO BELAJAR 1]', '[FOTO BELAJAR 2]', '[FOTO BELAJAR 3]']],
  ['Upacara & perlombaan', ['[FOTO UPACARA]', '[FOTO LOMBA 1]', '[FOTO LOMBA 2]']],
  ['Kegiatan OSIS', ['[FOTO OSIS 1]', '[FOTO OSIS 2]', '[FOTO OSIS 3]']],
];

function Gallery() {
  usePageTitle('Galeri');
  return (
    <>
      <section className="page-hero"><div className="container"><span className="pill">Galeri</span><h1>Galeri kegiatan sekolah</h1><p>Momen belajar, upacara, perlombaan, dan kebersamaan siswa di ladang United Malacca.</p></div></section>
      <section className="content-section"><div className="container">{groups.map(([title, items]) => <section key={title} style={{ marginBottom: 52 }}><h2>{title}</h2><div className="gallery-grid">{items.map((item) => <div className="gallery-tile" key={item}><span>{item}</span></div>)}</div></section>)}</div></section>
    </>
  );
}

export default Gallery;
