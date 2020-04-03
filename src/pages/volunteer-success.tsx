import React from "react"
import { isAndroid, isIOS } from "react-device-detect"
import { css } from "@emotion/core"
import Helmet from "react-helmet"

import ExternalLink from "../components/external-link"
import Layout from "../components/layout"

const OnFleetLinks = {
    ANDROID:
        "https://play.google.com/store/apps/details?id=com.onfleet.driver.app",
    IOS: "https://apps.apple.com/us/app/onfleet-driver/id1084013403",
    DESKTOP: "https://onfleet.com/"
}

const VolunteerSuccessPage = () => {
    const onFleetLink = isIOS
        ? OnFleetLinks.IOS
        : isAndroid
        ? OnFleetLinks.ANDROID
        : OnFleetLinks.DESKTOP

    return (
        <Layout>
            <Helmet>
                <title>Thanks!</title>
            </Helmet>
            <main
                css={css`
                    text-align: center;
                    align-self: center;
                `}
            >
                <h1>Thank you for volunteering!</h1>
                <p>You will receive a text message shortly.</p> <br />
                <p>
                    Please download{" "}
                    <ExternalLink to={onFleetLink}>OnFleet</ExternalLink>.
                </p>
            </main>
        </Layout>
    )
}

export default VolunteerSuccessPage
