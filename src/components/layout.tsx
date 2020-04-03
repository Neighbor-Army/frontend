import React from "react"
import { css } from "@emotion/core"
import { Helmet } from "react-helmet"

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Helmet
                defaultTitle="Neighbor Army"
                titleTemplate="%s 🚁 Neighbor Army"
            />
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                `}
            >
                {children}
            </div>
        </>
    )
}

export default Layout
