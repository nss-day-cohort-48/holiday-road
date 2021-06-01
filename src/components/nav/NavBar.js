import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const NavBar = ({ setLoggedIn }) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/requests">View Requests</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/requests/create">Create Request</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" onClick={
                    () => {
                        localStorage.removeItem("holidayroad_user")
                        setLoggedIn(false)
                    }
                }>Logout</Link>
            </li>
        </ul>
    )
}