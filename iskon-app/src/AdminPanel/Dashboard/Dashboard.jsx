import React from 'react';
import './Dashboard.css';
import Dheader from '../Component/Dheader/Dheader';
import Sidebar from '../Component/Sidebar/Sidebar';

export default function AdminDashboard() {
  const servicesAllocated = [
    {
      title: "24 Hours Kirtan Dept.",
      location: "Main Hall",
      status: "Denied",
      statusColor: "bg-red-600",
      date: "January 10, 2024 - July 30, 2024",
    },
    {
      title: "Pilgrimage Coordinator",
      location: "Verandah",
      status: "Pending",
      statusColor: "bg-orange-500",
      date: "January 10, 2024 - July 30, 2024",
    },
    {
      title: "Deity Worship",
      location: "Garbhagriha",
      status: "Ongoing",
      statusColor: "bg-teal-600",
      date: "March 20, 2023 - August 20, 2024",
    },
    {
      title: "Cleaning & Maintenance",
      location: "Hall Way",
      status: "Accepted",
      statusColor: "bg-green-500",
      date: "March 20, 2023 - August 20, 2024",
    },
  ]

  const remainingServices = [
    {
      title: "Serving Meals",
      location: "Kitchen",
      status: "Accepted",
      statusColor: "bg-green-500",
      date: "January 10, 2024 - July 30, 2024",
    },
    {
      title: "Book Distribution",
      location: "Verandah",
      status: "Ongoing",
      statusColor: "bg-teal-600",
      date: "January 10, 2024 - July 30, 2024",
    },
    {
      title: "Fundraising Campaigns",
      location: "Verandah",
      status: "Pending",
      statusColor: "bg-orange-500",
      date: "March 20, 2023 - August 20, 2024",
    },
    {
      title: "Food Distribution",
      location: "In an location",
      status: "Denied",
      statusColor: "bg-red-600",
      date: "March 20, 2023 - August 20, 2024",
    },
  ]

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <Dheader />
        <div className="services-section">
          <div className="services-header">
            <h2>Services</h2>
            <p>20 Jan 2025</p>
          </div>
          <div className="services-stats">
            <div>
              <span className="stat-value">6</span>
              <p className="stat-label">In Progress</p>
            </div>
            <div>
              <span className="stat-value">8</span>
              <p className="stat-label">Upcoming</p>
            </div>
            <div>
              <span className="stat-value">2</span>
              <p className="stat-label">On Hold</p>
            </div>
          </div>
          <div className="services-actions">
            <button className="button button-green">Add Service</button>
            <button className="button button-teal">Remove Service</button>
          </div>
        </div>
        <section className="services-allocated">
          <h2 className="section-title">Services Allocated</h2>
          <div className="services-grid">
            {servicesAllocated.map((service, index) => (
              <div key={index} className="service-card">
                <p className="service-date">{service.date}</p>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-location">{service.location}</p>
                <div className="service-status">
                  <span className="status-label">Status</span>
                  <span className={`status-badge ${service.statusColor}`}>{service.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="remaining-services">
          <h2 className="section-title">Remaining Services</h2>
          <div className="services-grid">
            {remainingServices.map((service, index) => (
              <div key={index} className="service-card">
                <p className="service-date">{service.date}</p>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-location">{service.location}</p>
                <div className="service-status">
                  <span className="status-label">Status</span>
                  <span className={`status-badge ${service.statusColor}`}>{service.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

