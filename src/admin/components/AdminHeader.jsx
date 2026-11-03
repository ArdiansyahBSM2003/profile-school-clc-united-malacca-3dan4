function AdminHeader({ title, description, action }) {
  return <header className="admin-page-header"><div><h1>{title}</h1><p>{description}</p></div><div className="admin-header-actions">{action}<div className="admin-user"><span>AD</span><strong>Admin<small>[NAMA ADMIN]</small></strong></div></div></header>;
}

export default AdminHeader;
