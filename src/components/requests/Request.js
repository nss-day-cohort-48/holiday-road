import React, { useContext, useEffect, useState } from "react"
import { RequestContext } from "./RequestProvider"

export const Request = ({ requestObject }) => {
    const { getParkByCode } = useContext(RequestContext)
    const [park, setPark] = useState({ entranceFees: [] })

    useEffect(
        () => {
            getParkByCode(requestObject.parkId)
                .then(park => setPark(park.data[0]))
        },
        []
    )

    return (
        <section className="request">
            <h3 className="request__name">{requestObject.customer.name}</h3>
            <div>Wants to go to {park.fullName}</div>
            <h4>It has the following entrance fees</h4>
            {
                park.entranceFees.map(fee => <div>{fee.title} costs ${fee.cost}</div>)
            }
        </section>
    )
}
