import './Dheader.css';
import Logo from './logo.jpg';
import Profile from './profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Dheader = () => (
  <header className="dashboard-header">
    <div className="logo-section">
      <img src={Logo} alt="Logo" className="logo" />
      <h1>Admin Dashboard</h1>
    </div>
    <div className="user-section">
      <div className="notification-icons">
        {/* Bell Notification */}
        <motion.div 
          className="notification"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FontAwesomeIcon icon={faBell} />
          <motion.span
            className="notification-count"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            16
          </motion.span>
        </motion.div>

        {/* Message Notification */}
        <motion.div 
          className="notification"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <motion.span
            className="notification-count"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            28
          </motion.span>
        </motion.div>
      </div>
      <div className="user-profile">
        <img src={Profile} alt="User" className="user-avatar" />
        <div className="user-info">
          <h3>KISHAN</h3>
          <p>kishan@admin</p>
        </div>
      </div>
    </div>
  </header>
);

export default Dheader;
