import React from "react"
import { css } from "@emotion/core"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Helmet
                defaultTitle="Neighbor Army"
                titleTemplate="%s 🚁 Neighbor Army"
            />
            <Header />
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                `}
            >
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout
