import React, { useState } from "react"
import Settings from "../Settings.js"

export const RequestContext = React.createContext()

export const RequestProvider = (props) => {
    const [requests, setRequests] = useState([])
    const [parks, setParks] = useState([])

    const getParks = () => {
        return fetch("https://developer.nps.gov/api/v1/parks?api_key=cYw6JZVFF0nCYMWzrMTDt1PSXeoknIHwVcjdWUZB&limit=500")
            .then(response => response.json())
            .then((parks) => {
                setParks(parks.data)
            })
    }

    const getParkByCode = (code) => {
        return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${code}&api_key=cYw6JZVFF0nCYMWzrMTDt1PSXeoknIHwVcjdWUZB&limit=1`)
            .then(response => response.json())
    }



    // https://developer.nps.gov/api/v1/parks?api_key=cYw6JZVFF0nCYMWzrMTDt1PSXeoknIHwVcjdWUZB

    const createRequestInAPI = (request) => {
        return fetch(`${Settings.apiHost}/requests`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(response => response.json())
            .then(getRequests)
    }

    const getRequests = () => {
        return fetch(`${Settings.apiHost}/requests?_expand=customer`)
            .then(response => response.json())
            .then((requests) => {
                setRequests(requests)
            })
    }

    return (
        <RequestContext.Provider value={{
            requests, getRequests, createRequestInAPI, parks, getParks, getParkByCode
        }}>
            {props.children}
        </RequestContext.Provider>
    )
}