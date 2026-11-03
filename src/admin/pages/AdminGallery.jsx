import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import { usePageTitle } from '../../shared/hooks/usePageTitle';

const photos = ['Foto bersama siswa dan guru', 'Gedung sekolah', '[JUDUL FOTO 0]', '[JUDUL FOTO 1]', '[JUDUL FOTO 2]', '[JUDUL FOTO 3]', '[JUDUL FOTO 4]', '[JUDUL FOTO 5]'];

function AdminGallery() {
  usePageTitle('Kelola Galeri');
  return <><AdminHeader title="Kelola Galeri" description="Tambah, ubah, atau hapus foto kegiatan sekolah." action={<Link className="admin-gold" to="/admin/galeri/tambah">+ Tambah foto</Link>} /><div className="admin-tabs"><button className="active">Semua</button><button>Kegiatan belajar</button><button>Upacara & perlombaan</button><button>Kegiatan OSIS</button></div><div className="admin-photo-grid">{photos.map((photo, index) => <article className="admin-photo-card" key={photo}><div className={`admin-photo-placeholder tone-${index % 3}`}>{index < 2 ? <span>[FOTO]</span> : <span>[FOTO]</span>}</div><div><strong>{photo}</strong><small>{index % 3 === 0 ? 'Kegiatan belajar' : index % 3 === 1 ? 'Upacara & perlombaan' : 'Kegiatan OSIS'}</small><div><button className="text-green">Ubah</button><button className="text-red">Hapus</button></div></div></article>)}</div></>;
}

export default AdminGallery;
