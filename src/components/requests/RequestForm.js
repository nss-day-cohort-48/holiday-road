import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { RequestContext } from "./RequestProvider";

export const RequestForm = () => {
    const history = useHistory()
    const { parks, getParks, addRequest } = useContext(RequestContext)
    const [userInput, setUserInput] = useState({
        customerId: 0,
        start: "",
        end: "",
        parkId: 0,
        adultCount: 0,
        kidCount: 0
    })

    useEffect(
        () => {
            getParks()
        },
        []
    )

    const userProvidedInput = (event) => {
        const targetInputField = event.target.id
        const copyOfState = { ...userInput }
        copyOfState[targetInputField] = event.target.value
        setUserInput(copyOfState)
    }

    const saveRequest = (e) => {
        e.preventDefault()

        const stateToMakePermanent = {
            parkId: userInput.parkId,
            start: userInput.start,
            end: userInput.end,
            kidCount: parseInt(userInput.kidCount),
            adultCount: parseInt(userInput.adultCount),
            customerId: parseInt(localStorage.getItem("holidayroad_customer"))
        }

        addRequest(stateToMakePermanent)
            .then(() => {
                history.push("/requests")
            })
    }

    return (
        <>
            <h1>Create Request</h1>
            <form onSubmit={(e) => saveRequest(e)}>
                <fieldset>
                    <label htmlFor="inputEmail"> Destination </label>
                    <select id="parkId" onChange={(event) => userProvidedInput(event)}>
                        {
                            parks.map(
                                park => {
                                    return <option key={park.parkCode} value={park.parkCode}>{park.name}</option>
                                }
                            )
                        }
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="start"> Start date </label>
                    <input type="date"
                        onChange={(event) => userProvidedInput(event)}
                        id="start"
                        className="form-control"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="end"> End date </label>
                    <input type="date"
                        onChange={(event) => userProvidedInput(event)}
                        id="end"
                        className="form-control"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="adultCount"> Number of adults </label>
                    <input type="number"
                        onChange={(event) => userProvidedInput(event)}
                        id="adultCount"
                        className="form-control"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="kidCount"> Number of children </label>
                    <input type="number"
                        onChange={(event) => userProvidedInput(event)}
                        id="kidCount"
                        className="form-control"
                        required />
                </fieldset>

                <button type="submit">Send Request</button>
            </form>
        </>
    )
}
