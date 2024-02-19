import { NavLink } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

// styles & images
import "./Sidebar.css"
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/noteadd_icon.svg'

export default function Sidebar() {
  const{ user }= useAuthContext()

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {user && <p>Hey {user.displayName},Welcome to EduBespoke</p> }           
        </div> 
        <nav className="links">
          <ul>
            <li>
              <NavLink exact="true" to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Documents</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}