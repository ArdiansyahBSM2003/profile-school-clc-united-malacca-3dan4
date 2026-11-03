import { usePageTitle } from '../../shared/hooks/usePageTitle';
import schoolImage from '../../shared/assets/images/bg01.jpg';

function About() {
  usePageTitle('Tentang Kami');
  return <><section className="page-hero"><div className="container"><span className="pill">Tentang kami</span><h1>Sekolah di tengah hijaunya ladang</h1><p>Ruang belajar yang dekat dengan keluarga, budaya, dan masa depan anak-anak Indonesia.</p></div></section><section className="content-section"><div className="container split-grid about-profile-grid"><div><span className="eyebrow">Profil sekolah</span><h2>Belajar dengan semangat dan kepedulian.</h2><p>CLC United Malacca mendampingi siswa kelas 0 sampai SMP dengan pendidikan yang berkarakter, berprestasi, dan tetap dekat dengan lingkungan masyarakat ladang.</p><p>Sekolah menjadi ruang tumbuh bagi anak-anak Indonesia untuk belajar, membangun kepercayaan diri, dan menjaga nilai kebersamaan.</p></div><div className="school-photo about-photo"><img src={schoolImage} alt="Siswa dan pendidik CLC United Malacca di depan sekolah" /></div></div></section></>;
}

export default About;
