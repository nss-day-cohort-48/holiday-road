import React from "react"
import { NavBar } from "./nav/NavBar"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login";
import "./HolidayRoad.css"

export const HolidayRoad = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("holidayroad_customer")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
    </>
)