import React from "react"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"

import Layout from "../components/layout"

const RequestHelpPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <main
                css={css`
                    text-align: center;
                    align-self: center;

                    @media screen and (min-width: 768px) {
                        max-width: 80%;
                        margin: auto;
                    }
                `}
            >
                <h1>
                    Text HELLO to <a href="tel:+19176344426">(917) 634-4426</a>
                </h1>
                <p>
                    Please call or text us. You will be prompted with a few
                    short questions and we will call you ASAP.
                </p>
            </main>
        </Layout>
    )
}

export default RequestHelpPage
