import "./../css/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-link" href="">
            Todo List
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Habit Tracker
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Calendar
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Pomodoro Timer
          </a>
        </li>
      </ul>
    </nav>
  );
}
