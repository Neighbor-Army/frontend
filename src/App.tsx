import React from "react"
import { Helmet } from "react-helmet"

import logo from "./logo.svg"

import Layout from "./components/layout"

function App() {
    return (
        <Layout>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </Layout>
    )
}

export default App
