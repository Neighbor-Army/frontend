import React from "react"
import { RouteProps, Redirect, Route } from "react-router-dom"

import { useSession } from "../hooks/firebase-auth"

const PrivateRoute: React.FC<RouteProps> = ({
    component: Component,
    ...props
}) => {
    const currentUser = useSession()

    if (!currentUser) {
        return <Redirect to="/login" />
    }

    return <Route {...props} component={Component} />
}

export default PrivateRoute
