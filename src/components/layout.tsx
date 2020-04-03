import React from "react"
import { css } from "@emotion/core"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

const Layout: React.FC = ({ children }) => {
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                min-height: 100vh;
            `}
        >
            <Helmet
                defaultTitle="Neighbor Army"
                titleTemplate="%s 🚁 Neighbor Army"
            />
            <Header />
            <div
                css={css`
                    display: flex;
                    padding: 3.2rem 0;
                    max-width: calc(100vw - 3.2rem);
                    margin: auto;
                    flex-grow: 1;

                    @media screen and (min-width: 480px) {
                        padding: 3.2rem 0;
                        max-width: calc(100vw - 7.2rem);
                    }

                    @media screen and (min-width: 768px) {
                        max-width: 70%;
                    }
                `}
            >
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
