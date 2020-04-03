import React from "react"

const ExternalLink: React.FC<{ to: string }> = ({ to, children }) => {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}
export default ExternalLink
