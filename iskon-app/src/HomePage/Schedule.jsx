import React from 'react';
import './Sch.css';

const scheduleItems = [
  { time: "04:30 AM - 05:30 AM", activity: "Mangala Aarti" },
  { time: "07:30 AM - 08:00 AM", activity: "Sringara Aarti & Guru Puja" },
  { time: "08:00 AM - 09:00 AM", activity: "Srimad Bhagavatam discourse in English" },
  { time: "08:30 AM - 11:55 AM", activity: "Live Darshan" },
  { time: "12:30 PM - 01:10 PM", activity: "Raj-bhog Offering" },
  { time: "01:10 PM - 04:30 PM", activity: "Darshan Closes" },
  { time: "04:30 PM - 06:30 PM", activity: "Darshan Remain Open" },
  { time: "07:00 PM - 08:00 PM", activity: "Gaura Sandhya Arati & Darshan Remain Open" },
  { time: "08:30 PM - 8:45 PM", activity: "Last Darshan for the Day" },
  { time: "09:45 PM - 04:30 AM", activity: "Deities Rest. Darshan Closed" },
];

function ScheduleContainer() {
  return (
    <div className="schedule-page">
      <div className="schedule-container">
        <div className="schedule-content">
          <div className="schedule-header">
            <h2 className="greeting">Hare Krishna!</h2>
            <h1 className="title">Daily Schedule</h1>
          </div>
          
          <div className="schedule-list">
            {scheduleItems.map((item, index) => (
              <div 
                key={index}
                className={`schedule-item ${index <= 9 ? 'highlight' : ''}`}
              >
                <span className="time">{item.time}</span>
                <span className="activity">{item.activity}</span>
              </div>
            ))}
          </div>

          <div className="button-container">
            <button className="learn-more-button">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="image-container">
          <img
            src="https://content3.jdmagicbox.com/comp/pune/u9/020pxx20.xx20.220211062531.x6u9/catalogue/iskcon-venktesh-mandir-kondhwa-budruk-pune-temples-pc23p6qafl.jpg"
            alt="Temple View"
            className="temple-image"
          />
        </div>
      </div>
    </div>
  );
}

export default ScheduleContainer;

