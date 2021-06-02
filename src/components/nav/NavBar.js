import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/requests">View My Requests</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/request/create">Create Request</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link"
                    onClick={
                        (event) => {
                            localStorage.removeItem("holidayroad_customer")
                        }
                    }
                >Logout</Link>
            </li>
        </ul>
    )
}