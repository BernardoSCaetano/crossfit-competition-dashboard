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
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
        isActive 
          ? 'bg-cf-red text-white shadow-lg shadow-cf-red/30' 
          : 'text-white/80 hover:text-white hover:bg-white/10 hover:shadow-md'
      }`} 
      to={to}
    >
      {children}
    </Link>
  );
}
