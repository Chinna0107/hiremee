import { NavLink, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { HiHome, HiUser, HiBriefcase, HiCurrencyRupee } from 'react-icons/hi';
import logo from '../../assets/logo.png';
import './Worker.css';

const NAV = [
  { to: '/worker',                icon: HiHome,           label: 'Dashboard'  },
  { to: '/worker/services',       icon: HiBriefcase,      label: 'Services'   },
  { to: '/worker/subscription',   icon: HiCurrencyRupee,  label: 'Plan'       },
  { to: '/worker/profile',        icon: HiUser,           label: 'Profile'    },
];

export default function WorkerLayout() {
  const user = useAuthStore(s => s.user);
  if (!user) return null;

  return (
    <div className="worker-layout">
      <header className="worker-top-header">
        <div className="wth-brand">
          <img src={logo} alt="Mana Local" style={{ height: '32px', marginRight: '8px', objectFit: 'contain' }} />
          <span className="wth-badge">Worker</span>
        </div>
        <div className="wth-user">
          <div className="wth-avatar">{user.name.charAt(0)}</div>
          <div className="wth-info">
            <strong>{user.name.split(' ')[0]}</strong>
            <span className={`wth-status ${user.available ? 'online' : 'offline'}`}>
              {user.available ? '● Online' : '○ Offline'}
            </span>
          </div>
        </div>
      </header>
      <div className="worker-content">
        <Outlet />
      </div>
      <nav className="worker-bottom-nav">
        {NAV.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/worker'}
            className={({ isActive }) => `wbn-item ${isActive ? 'active' : ''}`}
          >
            <Icon className="wbn-icon" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
