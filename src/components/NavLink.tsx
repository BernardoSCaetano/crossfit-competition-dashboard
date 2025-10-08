import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      className={`nav-link ${isActive ? 'active' : ''}`} 
      to={to}
    >
      {children}
    </Link>
  );
}
