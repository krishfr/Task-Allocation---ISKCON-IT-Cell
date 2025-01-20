import './Dheader.css'
import Logo from './logo.jpg'
import Profile from './profile.png'
const Dheader = () => (
    <header className="dashboard-header">
      <div className="logo-section">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Admin Dashboard</h1>
      </div>
      <div className="user-section">
        <div className="notification-icons">
          <span className="notification" >16</span>
          <span className="notification">28</span>
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