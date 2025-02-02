
import { NavLink } from "react-router-dom";
import { Home, Users, MessageSquare, Calendar } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="nav">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          <Home className="nav-icon" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/volunteer"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          <Users className="nav-icon" />
          <span>Volunteers</span>
        </NavLink>
        <NavLink
          to="/admin/messages"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          <MessageSquare className="nav-icon" />
          <span>Messages</span>
        </NavLink>
        <NavLink
          to="/admin/calendar"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          <Calendar className="nav-icon" />
          <span>Calendar</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
