import React from "react"
import { Route, Switch } from "react-router-dom"

import IndexPage from "./pages/index"
import VolunteerPage from "./pages/volunteer"
import VolunteerSuccessPage from "./pages/volunteer-success"
import LoginPage from "./pages/login"

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/volunteer" component={VolunteerPage} />
            <Route path="/volunteer-success" component={VolunteerSuccessPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

export default App
