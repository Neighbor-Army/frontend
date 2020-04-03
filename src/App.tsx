import React from "react"
import { Route, Switch } from "react-router-dom"

import IndexPage from "./pages/index"

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={IndexPage} />
        </Switch>
    )
}

export default App
