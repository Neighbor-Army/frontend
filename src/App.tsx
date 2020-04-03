import React from "react"
import { Helmet } from "react-helmet"

import Layout from "./components/layout"

function App() {
    return (
        <Layout>
            <Helmet>
                <title>Home</title>
            </Helmet>
        </Layout>
    )
}

export default App
