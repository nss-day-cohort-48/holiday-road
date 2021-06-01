import React from "react"
import { Route } from "react-router-dom"
import { RequestForm } from "./requests/RequestForm";
import { RequestList } from "./requests/RequestList";
import { RequestProvider } from "./requests/RequestProvider";

export const ApplicationViews = () => {
    return (
        <>
            <RequestProvider>
                <Route exact path="/requests/create">
                    <RequestForm />
                </Route>
                <Route exact path="/requests">
                    <RequestList />
                </Route>
            </RequestProvider>
        </>
    )
}