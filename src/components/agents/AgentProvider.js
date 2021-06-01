import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AgentContext = createContext()

// This component establishes what data can be used.
export const AgentProvider = (props) => {
    const [agents, setAgents] = useState([])

    const getAgents = () => {
        return fetch("http://localhost:8088/agents")
        .then(res => res.json())
        .then((data) => setAgents(data))
    }

    const addAgent = agentObj => {
        return fetch("http://localhost:8088/agents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(agentObj)
        })
        .then(() => getAgents())
    }

    /*
        You return a context provider which has the
        `Agents` state, `getAgents` function,
        and the `addAgent` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AgentContext.Provider value={
            {
                agents, getAgents, addAgent
            }
        }>
            {props.children}
        </AgentContext.Provider>
    )
}