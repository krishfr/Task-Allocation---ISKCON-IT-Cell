import React from 'react';
import './Dashboard.css';
import Dheader from '../Component/Dheader/Dheader';
import Sidebar from '../Component/Sidebar/Sidebar';

const AdminDashboard = () => {
  const servicesAllocated = [
    {
      id: 1,
      dateRange: "January 10, 2024 - July 30, 2024",
      name: "24 Hours Kirtan Dept.",
      location: "Main Hall",
      status: "Denied"
    },
    {
      id: 2,
      dateRange: "January 10, 2024 - July 30, 2024",
      name: "Pilgrimage Coordinator",
      location: "Verandah",
      status: "Pending"
    },
    {
      id: 3,
      dateRange: "March 20, 2023 - August 20, 2024",
      name: "Deity Worship",
      location: "Garbhagriha",
      status: "Ongoing"
    },
    {
      id: 4,
      dateRange: "March 20, 2023 - August 20, 2024",
      name: "Cleaning & Maintenance",
      location: "Hall Way",
      status: "Accepted"
    }
  ];

  const remainingServices = [
    {
      id: 5,
      dateRange: "January 10, 2024 - July 30, 2024",
      name: "Serving Meals",
      location: "Kitchen",
      status: "Accepted"
    },
    {
      id: 6,
      dateRange: "January 10, 2024 - July 30, 2024",
      name: "Book Distribution",
      location: "Verandah",
      status: "Ongoing"
    },
    {
      id: 7,
      dateRange: "March 20, 2023 - August 20, 2024",
      name: "Fundraising Campaigns",
      location: "Verandah",
      status: "Pending"
    },
    {
      id: 8,
      dateRange: "March 20, 2023 - August 20, 2024",
      name: "Food Distribution",
      location: "In an location",
      status: "Denied"
    }
  ];

  return (
    <>
    
    <div className="dashboard-container">
    <Sidebar />
      <div className="main-content">
        <Dheader />
        <div className="dashboard-content">
          <div className="services-overview">
            <div className="services-header">
              <h2>Services</h2>
              <span className="date">20 Jan 2025</span>
            </div>
            <div className="services-stats">
              <div className="stat-item">
                <h3>6</h3>
                <p>In Progress</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3>8</h3>
                <p>Upcoming</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3>2</h3>
                <p>On Hold</p>
              </div>
            </div>
            <div className="service-actions">
              <button className="btn-add">Add Service</button>
              <button className="btn-remove">Remove Service</button>
            </div>
          </div>

          <section className="services-section">
            <h2>Services Allocated</h2>
            <div className="services-grid">
              {servicesAllocated.map(service => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </section>

          <section className="services-section">
            <h2>Remaining Services</h2>
            <div className="services-grid">
              {remainingServices.map(service => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};





const ServiceCard = ({ dateRange, name, location, status }) => (
  <div className="service-card">
    <p className="date-range">{dateRange}</p>
    <h3 className="service-name">{name}</h3>
    <p className="location">{location}</p>
    <div className="status-section">
      <span className="status-label">Status</span>
      <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
    </div>
  </div>
);

export default AdminDashboard;