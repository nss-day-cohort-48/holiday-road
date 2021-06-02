import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const RequestContext = createContext()

// This component establishes what data can be used.
export const RequestProvider = (props) => {
    const [requests, setRequests] = useState([])
    const [parks, setParks] = useState([])

    const getParks = () => {
        return fetch("https://developer.nps.gov/api/v1/parks?api_key=cYw6JZVFF0nCYMWzrMTDt1PSXeoknIHwVcjdWUZB&limit=500")
        .then(res => res.json())
        .then((response) => setParks(response.data))
    }

    const getRequests = () => {
        return fetch("http://localhost:8088/requests")
        .then(res => res.json())
        .then((data) => setRequests(data))
    }

    const addRequest = requestObj => {
        return fetch("http://localhost:8088/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestObj)
        })
        .then(() => getRequests())
    }

    return (
        <RequestContext.Provider value={
            {
                requests, getRequests, addRequest, parks, getParks
            }
        }>
            {props.children}
        </RequestContext.Provider>
    )
}