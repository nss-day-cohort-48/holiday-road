import React, { useState } from "react"
import Settings from "../Settings.js"

export const AuthContext = React.createContext()

export const AuthProvider = (props) => {
    const [customer, setCustomer] = useState({ })

    const getCustomer = (name, email) => {
        return fetch(`${Settings.apiHost}/customers?name=${name}&email=${email}`)
            .then(response => response.json())
    }

    return (
        <AuthContext.Provider value={{
            customer, getCustomer
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}