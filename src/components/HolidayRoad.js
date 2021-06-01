import React, { useEffect, useState } from "react"
import "./HolidayRoad.css"
import { Login } from "./auth/Login"
import { Route } from "react-router-dom"
import { AuthProvider } from "./auth/AuthProvider"
import { RequestProvider } from "./requests/RequestProvider"
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";


const isUserAuthenticated = () => {
    if (localStorage.getItem("holidayroad_user") !== null) {
        return true
    }

    return false
}

export const HolidayRoad = () => {
    const [isLoggedIn, setLoggedIn] = useState(isUserAuthenticated())

    return (
        <>
            {
                isLoggedIn
                    ? (
                        <>
                            <NavBar setLoggedIn={setLoggedIn} />
                            <ApplicationViews />
                        </>
                    )
                    : (<Route>
                        <AuthProvider>
                            <Login setLoggedIn={setLoggedIn} />
                        </AuthProvider>
                    </Route>)
            }



        </>
    )
}