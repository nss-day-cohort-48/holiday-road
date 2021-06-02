import React from "react"
import { Route } from "react-router-dom"
import { RequestForm } from "./requests/RequestForm";
import { RequestHistory } from "./requests/RequestHistory";
import { RequestProvider } from "./requests/RequestProvider";

export const ApplicationViews = () => {
    return (
        <>
            <RequestProvider>
                <Route exact path="/requests">
                    <RequestHistory />
                </Route>

                <Route path="/request/create">
                    <RequestForm />
                </Route>
            </RequestProvider>
        </>
    )
}
