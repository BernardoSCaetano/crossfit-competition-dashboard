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
      className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group ${
        isActive
          ? "bg-cf-red text-white shadow-cf-red"
          : "text-cf-gray-300 hover:text-white hover:bg-cf-gray-800/50 hover:shadow-cf"
      }`}
      to={to}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-cf-red to-cf-red-light rounded-xl shadow-cf-red-lg"></div>
      )}
      {!isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-cf-gray-800/0 to-cf-gray-800/0 group-hover:from-cf-gray-800/20 group-hover:to-cf-gray-800/20 rounded-xl transition-all duration-300"></div>
      )}
    </Link>
  );
}
