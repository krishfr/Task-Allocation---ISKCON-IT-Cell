import './Sidebar.css'
const Sidebar = () => (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className="active">
            <i className="icon-dashboard"></i>
            Dashboard
          </li>
          <li>
            <i className="icon-volunteers"></i>
            Volunteers
          </li>
          <li>
            <i className="icon-messages"></i>
            Messages
          </li>
          <li>
            <i className="icon-calendar"></i>
            Calendar
          </li>
        </ul>
      </nav>
    </aside>
  );
export default Sidebar;

   