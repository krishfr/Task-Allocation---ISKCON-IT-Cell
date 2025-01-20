'use client'

import React, { useState } from 'react';
import './Calendar.css';
import Sidebar from '../Component/Sidebar/Sidebar.jsx'
import Dheader from '../Component/Dheader/Dheader.jsx'

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const events = [
  { date: '2025-01-01', time: '10 AM', title: '24 Hours Kirtan Dept.' },
  { date: '2025-01-04', time: '3 PM', title: 'Deity Worship' },
  { date: '2025-01-10', time: '2 PM', title: 'Serving Meals' },
  { date: '2025-01-16', time: '11 AM', title: 'Food Distribution' },
  { date: '2025-01-26', time: '4 PM', title: 'Book Distribution' },
  { date: '2025-01-31', time: '2 PM', title: 'Pilgrimage Coordinator' }
];

const CalendarDashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 22)); // January 22, 2025
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 22));

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = [];
    
    // Add days from previous month
    for (let i = 0; i < firstDay.getDay(); i++) {
      const prevDate = new Date(year, month, -i);
      daysInMonth.unshift(prevDate);
    }
    
    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysInMonth.push(new Date(year, month, i));
    }
    
    // Add days from next month
    const remainingDays = 42 - daysInMonth.length;
    for (let i = 1; i <= remainingDays; i++) {
      daysInMonth.push(new Date(year, month + 1, i));
    }
    
    return daysInMonth;
  };

  const getEventsForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateStr);
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  return (
    <>
    <Sidebar/>
    <div className="calendar-dashboard">
    <Dheader/>
      <div className="calendar-container">
        <div className="main-calendar">
          <div className="calendar-header">
            <button onClick={() => navigateMonth(-1)}>&lt;</button>
            <h2>{MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            <button onClick={() => navigateMonth(1)}>&gt;</button>
          </div>
          
          <div className="calendar-grid">
            {DAYS_OF_WEEK.map(day => (
              <div key={day} className="calendar-day-header">{day}</div>
            ))}
            
            {getDaysInMonth(currentDate).map((date, index) => (
              <div 
                key={index}
                className={`calendar-day ${date.getMonth() !== currentDate.getMonth() ? 'other-month' : ''} 
                           ${date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
                onClick={() => setSelectedDate(date)}
              >
                <span className="day-number">{date.getDate()}</span>
                <div className="day-events">
                  {getEventsForDate(date).map((event, i) => (
                    <div key={i} className="event">
                      {event.time} {event.title}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="calendar-sidebar">
          <MiniCalendar 
            currentDate={currentDate}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            onMonthChange={setCurrentDate}
          />
          <DayDetails 
            selectedDate={selectedDate}
            events={getEventsForDate(selectedDate)}
          />
        </div>
      </div>
    </div>
    </>
  );
};

const MiniCalendar = ({ currentDate, selectedDate, onDateSelect, onMonthChange }) => {
  const getDaysArray = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    
    // Add empty cells for days before first of month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    
    // Add days of month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  return (
    <div className="mini-calendar">
      <div className="mini-calendar-header">
        <h3>{MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
      </div>
      <div className="mini-calendar-grid">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
          <div key={day} className="mini-calendar-day-header">{day}</div>
        ))}
        {getDaysArray().map((date, index) => (
          <div 
            key={index}
            className={`mini-calendar-day ${!date ? 'empty' : ''} 
                       ${date && date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
            onClick={() => date && onDateSelect(date)}
          >
            {date ? date.getDate() : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

const DayDetails = ({ selectedDate, events }) => {
  return (
    <div className="day-details">
      <h3>
        {selectedDate.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        })}
      </h3>
      {events.length === 0 ? (
        <div className="no-events">
          <p>Nothing planned for the day</p>
          <div className="lotus-icon">
            {/* SVG Lotus icon */}
            <svg viewBox="0 0 100 100" className="lotus">
              <path d="M50 90c-20-20-20-40-20-60 0-20 40-20 40 0 0 20-20 60-20 60z" />
              <path d="M50 90c20-20 20-40 20-60 0-20-40-20-40 0 0 20 20 60 20 60z" />
            </svg>
          </div>
          <button className="assign-service">Assign a Service</button>
        </div>
      ) : (
        <div className="events-list">
          {events.map((event, index) => (
            <div key={index} className="event-item">
              <span className="event-time">{event.time}</span>
              <span className="event-title">{event.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarDashboard;