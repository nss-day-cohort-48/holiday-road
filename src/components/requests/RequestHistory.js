import React, { useContext, useEffect } from "react"
import { RequestContext } from "./RequestProvider"
import { RequestItem } from "./RequestItem"
import "./Requests.css"

export const RequestHistory = () => {
    const { requests, getRequests } = useContext(RequestContext)

    useEffect(() => {
        getRequests()
    }, []
    )

    return (
        <>
            <h1>Request History</h1>
            {
                requests.map(
                    request => {
                        return <article className="requests">
                            <RequestItem key={request.id} request={request} />
                        </article>
                    }
                )
            }
        </>
    )
}
