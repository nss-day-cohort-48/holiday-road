import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { RequestContext } from "./RequestProvider"

export const RequestForm = () => {
    const history = useHistory()
    const [request, setRequest] = useState({
        customerId: parseInt(localStorage.getItem("holidayroad_user")),
        start: "",
        end: "",
        parkId: 0,
        kidCount: 0,
        adultCount: 0
    })
    const { createRequestInAPI, getParks, parks } = useContext(RequestContext)

    const userModifiedFormField = (event) => {
        const propertyToChange = event.target.id
        const objectCopy = { ...request }
        objectCopy[propertyToChange] = event.target.value
        setRequest(objectCopy)
    }

    const createRequest = (formSubmitEvent) => {
        formSubmitEvent.preventDefault()
        createRequestInAPI({
            start: request.start,
            end: request.end,
            parkId: request.parkId,
            kidCount: parseInt(request.kidCount),
            adultCount: parseInt(request.adultCount),
            customerId: request.customerId
        })
            .then(() => {
                history.push("/requests")
            })
    }

    useEffect(
        () => {
            getParks()
        },
        []
    )

    return (
        <form className="form--login" onSubmit={createRequest}>
            <h1 className="h3 mb-3 font-weight-normal">Submit Request for Itinerary</h1>
            <fieldset>
                <label htmlFor="parkId"> Select park </label>
                <select id="parkId" onChange={userModifiedFormField}>
                    {
                        parks.map(park => <option value={park.parkCode}>{park.fullName}</option>)
                    }
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="start"> Start date </label>
                <input onChange={userModifiedFormField}
                        type="date" id="start"
                        className="form-control" required />
            </fieldset>
            <fieldset>
                <label htmlFor="end"> End date </label>
                <input onChange={userModifiedFormField}
                        type="date" id="end"
                        className="form-control" required />
            </fieldset>
            <fieldset>
                <label htmlFor="adultCount"> Number of adults </label>
                <input onChange={userModifiedFormField}
                        type="number"
                        id="adultCount"
                        className="form-control"
                        required />
            </fieldset>
            <fieldset>
                <label htmlFor="kidCount"> Number of children </label>
                <input onChange={userModifiedFormField}
                        type="number"
                        id="kidCount"
                        className="form-control"
                        required />
            </fieldset>
            <fieldset style={{
                textAlign: "center"
            }}>
                <button className="btn btn-1 btn-sep icon-send" type="submit">Submit Request</button>
            </fieldset>
        </form>
    )
}