import React from "react";
import { Home, Users, MessageSquare, Calendar } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="nav">
        <a href="/admin" className="nav-link active">
          <Home className="nav-icon" />
          <span>Dashboard</span>
        </a>
        <a href="/admin/volunteer" className="nav-link">
          <Users className="nav-icon" />
          <span>Volunteers</span>
        </a>
        <a href="/admin" className="nav-link">
          <MessageSquare className="nav-icon" />
          <span>Messages</span>
        </a>
        <a href="/admin/calendar" className="nav-link">
          <Calendar className="nav-icon" />
          <span>Calendar</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
