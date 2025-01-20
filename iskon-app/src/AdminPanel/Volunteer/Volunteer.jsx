import React from 'react';
import './Volunteer.css';
import Sidebar from '../Component/Sidebar/Sidebar.jsx'
import Dheader from '../Component/Dheader/Dheader.jsx'
import User from "../../Assets/user.png"

const volunteers = [
  {
    id: 1,
    name: 'Krishna',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'mohan@gmail.com',
    location: 'Location',
    status: 'active'
  },
  {
    id: 2,
    name: 'Keshav',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'keshav@gmail.com',
    location: 'Location',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Govinda',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'govinda@gmail.com',
    location: 'Location',
    status: 'active'
  },
  {
    id: 4,
    name: 'Gopal',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'gopal@gmail.com',
    location: 'Location',
    status: 'active'
  },
  {
    id: 5,
    name: 'Shyam',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'shyam@gmail.com',
    location: 'Location',
    status: 'active'
  },
  {
    id: 6,
    name: 'Jagannath',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'jagannath@gmail.com',
    location: 'Location',
    status: 'active'
  },
  {
    id: 7,
    name: 'Vasudev',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'vasudev@gmail.com',
    location: 'Location',
    status: 'inactive'
  },
  {
    id: 8,
    name: 'Madhav',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'madhav@gmail.com',
    location: 'Location',
    status: 'active'
  },
  {
    id: 9,
    name: 'Hari',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'sxyz@email',
    location: 'Location',
    status: 'inactive'
  },
  {
    id: 10,
    name: 'Vishnu',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'axyz@email',
    location: 'Location',
    status: 'active'
  },
  {
    id: 11,
    name: 'Krish',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'cxyz@email',
    location: 'Location',
    status: 'active'
  },
  {
    id: 12,
    name: 'Mohan',
    department: 'Deity Worship',
    phone: '+1-0123456789',
    email: 'kxyz@email',
    location: 'Location',
    status: 'inactive'
  }
];

const VolunteerDashboard = () => {
  return (
    
    <div className='main'>
    <Sidebar/>
    <div className="volunteer-dashboard">
        <Dheader/>
        <div className="volunteer-content">
          <div className="search-section">
            <div className="search-container">
              <input 
                type="search" 
                placeholder="Search volunteer here"
                className="search-input"
              />
            </div>
            <button className="new-volunteer-btn">
              + New Volunteer
            </button>
          </div>
          
          <div className="volunteers-grid">
            {volunteers.map(volunteer => (
              <VolunteerCard key={volunteer.id} {...volunteer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const VolunteerCard = ({ name, department, phone, email, location, status }) => {
  return (<>
   <div className="volunteer-card">
      <div className="volunteer-header">
        <div className="volunteer-avatar">
          <img src={User ||'/placeholder.svg'} alt={name} />
          <span className={`status-indicator ${status}`}></span>
        </div>
        <div className="volunteer-info">
          <h3>{name}</h3>
          <p>Department Name : {department}</p>
        </div>
      </div>
      <div className="volunteer-details">
        <div className="detail-item">
          <i className="phone-icon"></i>
          <span>{phone}</span>
        </div>
        <div className="detail-item">
          <i className="email-icon"></i>
          <span>{email}</span>
        </div>
        <div className="detail-item">
          <i className="location-icon"></i>
          <span>{location}</span>
        </div>
      </div>
    </div>
  </>)
};

export default VolunteerDashboard;