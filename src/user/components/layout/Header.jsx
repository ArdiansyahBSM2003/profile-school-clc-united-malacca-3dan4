import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function FlagText({ children }) {
  return (
    <span aria-hidden="true">
      {children.split('').map((character, index) => (
        <span className="flag-letter" key={`${character}-${index}`} style={{ '--letter-index': index }}>
          {character === ' ' ? '\u00a0' : character}
        </span>
      ))}
    </span>
  );
}

function DropdownMenu({ label, items, active, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`nav-dropdown${open ? ' open' : ''}${active ? ' active' : ''}`}>
      <button className="nav-dropdown-toggle" type="button" aria-label={label} aria-expanded={open} onClick={() => setOpen((isOpen) => !isOpen)}>
        <FlagText>{label}</FlagText><span className="dropdown-chevron" aria-hidden="true" />
      </button>
      <div className="nav-dropdown-menu">
        <div className="dropdown-menu-heading">Menu sekolah</div>
        {items.map(([to, itemLabel, description]) => (
          <NavLink key={to} aria-label={`${itemLabel}: ${description}`} to={to} onClick={onNavigate}>
            <span className="dropdown-item-icon" aria-hidden="true" />
            <span>
              <strong><FlagText>{itemLabel}</FlagText></strong>
              <small><FlagText>{description}</FlagText></small>
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topbar"><div className="container topbar-row"><span>Community Learning Centre · Ladang United Malacca, Johor, Malaysia</span><span>WhatsApp: [NOMOR] · [EMAIL SEKOLAH]</span></div></div>
      <header className="site-header">
        <div className="container nav">
          <NavLink className="brand" to="/" onClick={closeMenu}>
            <span className="brand-mark">CLC</span>
            <span className="brand-copy"><strong>CLC United Malacca</strong><small>Kelas 0 – SMP · Indonesia di Malaysia</small></span>
          </NavLink>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span />
            <span />
            <span />
            <span className="sr-only">Buka menu navigasi</span>
          </button>
          <nav id="primary-navigation" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Navigasi utama">
            <NavLink aria-label="Beranda" to="/" onClick={closeMenu}><FlagText>Beranda</FlagText></NavLink>
            <NavLink aria-label="Tentang Kami" to="/tentang-kami" onClick={closeMenu}><FlagText>Tentang Kami</FlagText></NavLink>
            <DropdownMenu
              label="Program & Informasi"
              items={[
                ['/osis', 'OSIS', 'Kepemimpinan siswa'],
                ['/galeri', 'Galeri Kegiatan', 'Momen dan aktivitas sekolah'],
                ['/pendaftaran', 'Pendaftaran Siswa Baru', 'Alur dan persyaratan masuk'],
                ['/pendaftaran/formulir', 'Formulir Pendaftaran', 'Isi formulir secara online'],
              ]}
              active={pathname === '/osis' || pathname === '/galeri' || pathname.startsWith('/pendaftaran')}
              onNavigate={closeMenu}
            />
            <NavLink aria-label="Kontak" to="/kontak" onClick={closeMenu}><FlagText>Kontak</FlagText></NavLink>
            <NavLink aria-label="Daftar Siswa Baru" className="nav-cta" to="/pendaftaran" onClick={closeMenu}><FlagText>Daftar Siswa Baru</FlagText></NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
