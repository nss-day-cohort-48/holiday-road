import React, { useContext, useEffect } from "react"
import { RequestContext } from "./RequestProvider"
import { Request } from "./Request"

export const RequestList = () => {
    const { requests, getRequests } = useContext(RequestContext)

    useEffect(
        () => {
            getRequests()
        },
        []
    )

    return (
        <article className="requests">
            {
                requests
                .map(requestObject => {
                    return <Request requestObject={requestObject} />
                })
                .reverse()
            }
        </article>
    )
}
