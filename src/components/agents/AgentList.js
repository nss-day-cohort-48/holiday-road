import React, { useContext, useEffect } from "react"
import { AgentContext } from "./AgentProvider"
import "./Agent.css"

export const AgentList = () => {
    const { agents, getAgents } = useContext(AgentContext)

    useEffect(
        () => {
            getAgents()
        },
        []
    )

    return (
        <article className="agents">
            {
                agents.map(agentObject => {
                    return (
                        <section className="agent" key={agentObject.id}>
                            <h3 className="agent__name">{agentObject.name}</h3>
                        </section>
                    )
                })
            }
        </article>
    )
}
