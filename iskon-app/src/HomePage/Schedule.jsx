import React from 'react';
import './Sch.css';

export default function Schedule() {
  return (
    <div>

        <div className="section">
    
                </div>

                <div className="section-divider"></div>

                <div className="section">

        </div>



        <h1 className='titleTable'>Temple Schedule & Activities</h1>

        <div className="schedule">
            <h2>Temple Opening & Closing Schedule</h2>
            
            <br />
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Opening Time</th>
                        <th>Closing Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>6:00 AM</td>
                        <td>8:00 PM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>6:00 AM</td>
                        <td>8:00 PM</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>6:00 AM</td>
                        <td>8:00 PM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>6:00 AM</td>
                        <td>8:00 PM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>6:00 AM</td>
                        <td>8:00 PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>7:00 AM</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>7:00 AM</td>
                        <td>9:00 PM</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="activities">
            <h2>Upcoming Activities</h2>
            <ul>
                <li><strong>Morning Prayer:</strong> Every day at 6:30 AM</li>
                <li><strong>Evening Meditation:</strong> Every day at 7:30 PM</li>
                <li><strong>Weekly Feast:</strong> Every Saturday at 12:00 PM</li>
                <li><strong>Spiritual Lecture:</strong> Every Sunday at 10:00 AM</li>
                <li><strong>Volunteer Program:</strong> Every Tuesday at 5:00 PM</li>
            </ul>
        </div>
    </div>
  );
}
