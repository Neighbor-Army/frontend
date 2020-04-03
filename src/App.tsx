import React from "react"
import { Route, Switch } from "react-router-dom"

import IndexPage from "./pages/index"
import VolunteerPage from "./pages/volunteer"

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/volunteer" component={VolunteerPage} />
        </Switch>
    )
}

export default App
