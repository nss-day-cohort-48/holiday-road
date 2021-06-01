import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Settings from "../Settings.js"
import "./Auth.css"


export const Register = () => {
    const [account, setAccount] = useState({
        name: "",
        email: ""
    })

    const history = useHistory()

    const userModifiedFormField = (event) => {
        const propertyOfAccountToChange = event.target.id
        const accountObjectCopy = { ...account }
        accountObjectCopy[propertyOfAccountToChange] = event.target.value
        setAccount(accountObjectCopy)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        const newUser = {
            "email": account.email,
            "name": account.name
        }

        return fetch(`${Settings.apiHost}/customers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(user => {
                localStorage.setItem("holidayroad_user", user.id)
                history.push("/")
            })
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
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
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                {/* Already registered? <Link to="/login">Login</Link> */}
            </section>
        </main>
    )
}