import React from "react"
import "./HolidayRoad.css"
import { AgentList } from "./agents/AgentList";
import { AgentProvider } from "./agents/AgentProvider";

export const HolidayRoad = () => (
    <>
        <h2>Holiday Road Travel Agency</h2>
        <small>We'll get you there.</small>
        <address>
            <div>Visit us at our location</div>
            <div>404 Unknown Drive</div>
        </address>

        <AgentProvider>
            <AgentList />
        </AgentProvider>
    </>
)