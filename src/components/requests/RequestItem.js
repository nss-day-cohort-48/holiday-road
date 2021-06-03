import React, { useContext, useEffect, useState } from "react"
import { RequestContext } from "./RequestProvider"

export const RequestItem = ({ request }) => {
    const { getParkByCode } = useContext(RequestContext)
    const [park, setPark] = useState({})

    useEffect(
        () => {
            getParkByCode(request.parkId)
                .then(
                    parkObject => setPark(parkObject.data[0])
                )
        }, []
    )

    return (
        <>
            <div className="request">
                <h2>{park.fullName}</h2>
                <div>Start: {request.start}</div>
                <div>End: {request.end}</div>
                <div>Adults: {request.adultCount}</div>
                <div>Kids: {request.kidCount}</div>
            </div>
        </>
    )
}
