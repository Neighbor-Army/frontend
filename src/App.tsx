import React from "react"
import { Route, Switch } from "react-router-dom"

import { AuthContext, useAuth } from "./hooks/firebase-auth"
import PrivateRoute from "./components/private-route"

import IndexPage from "./pages/index"
import VolunteerPage from "./pages/volunteer"
import VolunteerSuccessPage from "./pages/volunteer-success"
import LoginPage from "./pages/login"
import RequestHelpPage from "./pages/contact"

const App = () => {
    const { isLoading, currentUser } = useAuth()

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <AuthContext.Provider value={{ currentUser }}>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/volunteer" component={VolunteerPage} />
                <Route
                    path="/volunteer-success"
                    component={VolunteerSuccessPage}
                />
                <Route path="/login" component={LoginPage} />
                <Route path="/contact" component={RequestHelpPage} />
                <PrivateRoute path="/dashboard" component={RequestHelpPage} />
            </Switch>
        </AuthContext.Provider>
    )
}

export default App
