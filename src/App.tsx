import React from "react"
import { Route, Switch } from "react-router-dom"

import IndexPage from "./pages/index"
import VolunteerPage from "./pages/volunteer"
import VolunteerSuccessPage from "./pages/volunteer-success"
import LoginPage from "./pages/login"
import RequestHelpPage from "./pages/contact"

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/volunteer" component={VolunteerPage} />
            <Route path="/volunteer-success" component={VolunteerSuccessPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/contact" component={RequestHelpPage} />
        </Switch>
    )
}

export default App
