import React from "react"
import { Helmet } from "react-helmet"
import { RouteComponentProps } from "react-router-dom"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import CtaButton from "../components/cta-button"

const IndexPage: React.FC<RouteComponentProps> = ({ history }) => {
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
                        max-width: 88%;
                        margin: auto;
                    }
                `}
            >
                <h1>Calling All Neighborhood Warriors</h1>
                <p>
                    Let’s flatten the curve by fighting together to help those
                    in need within our community.
                </p>
                <footer
                    css={css`
                        max-width: 75%;
                        margin: 1.6rem auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 12rem;

                        @media screen and (min-width: 480px) {
                            flex-direction: row;
                            height: auto;
                            margin-top: 3.2rem;
                        }
                    `}
                >
                    <CtaButton onClick={() => history.push("/contact")}>
                        Request Help
                    </CtaButton>
                    <CtaButton
                        isSecondaryBtn={true}
                        onClick={() => history.push("/volunteer")}
                    >
                        Offer Help
                    </CtaButton>
                </footer>
            </main>
        </Layout>
    )
}

export default IndexPage
