import React, { useContext, useState, useEffect } from "react"
import firebase, { User } from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "",
    apiKey: process.env.REACT_APP_FIREBASE_PUBLIC_API_KEY || "",
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL || "",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || ""
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)

interface AuthData {
    currentUser: User | null
}

export const AuthContext = React.createContext<AuthData>({
    currentUser: null
})

export const useSession = () => {
    const { currentUser } = useContext<AuthData>(AuthContext)
    return currentUser
}

export const useAuth = () => {
    const [authData, setAuthData] = useState(() => {
        const { currentUser } = firebase.auth()
        return { isLoading: !currentUser, currentUser }
    })
    function onChange(currentUser: User | null) {
        setAuthData({ isLoading: false, currentUser })
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
        return () => unsubscribe()
    }, [])

    return authData
}
