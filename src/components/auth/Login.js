import React, { useContext, useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { AuthContext } from "./AuthProvider"
import "./Auth.css"
import Settings from "../Settings"

export const Login = ({ setLoggedIn }) => {
    const invalidDialog = useRef()
    const [account, setAccount] = useState({ email: "me@me.com", name: "me" })
    const history = useHistory()
    const { getCustomer } = useContext(AuthContext)

    const userModifiedFormField = (event) => {
        const propertyOfAccountToChange = event.target.id
        const accountObjectCopy = { ...account }
        accountObjectCopy[propertyOfAccountToChange] = event.target.value
        setAccount(accountObjectCopy)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        // Verify that a customer exists with name and email
        fetch(`${Settings.apiHost}/customers?name=${account.name}&email=${account.email}`)
            .then(response => response.json())
            .then(
                (response) => {
                    if (response.length) {
                        const user = response[0]
                        localStorage.setItem("holidayroad_user", user.id)
                        setLoggedIn(true)
                    }
                    else {
                        invalidDialog.current.showModal()
                    }
                }
            )
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>


            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="h3 mb-3 font-weight-normal">Log in to Holiday Road</h1>
                    <fieldset>
                        <label htmlFor="name"> Name </label>
                        <input onChange={userModifiedFormField} type="text" id="name" className="form-control" placeholder="Your full name" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email"> Email address </label>
                        <input onChange={userModifiedFormField} type="email" id="email" className="form-control" placeholder="Email address" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit">Login</button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}