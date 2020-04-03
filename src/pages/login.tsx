import React, { useState, useEffect } from "react"
import { useForm, OnSubmit } from "react-hook-form"
import { RouteComponentProps } from "react-router-dom"
import { css } from "@emotion/core"
import { Helmet } from "react-helmet"

import CtaButton from "../components/cta-button"
import FormField from "../components/form-field"
import Layout from "../components/layout"
import { firebaseApp, useSession } from "../hooks/firebase-auth"

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
    const currentUser = useSession()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [serverError, setServerError] = useState("")
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })

    useEffect(() => {
        if (currentUser) {
            history.push("/dashboard")
        }
    }, [currentUser, history])

    const onSubmit: OnSubmit<Record<string, any>> = async ({
        email,
        password
    }) => {
        setIsSubmitting(true)
        setServerError("")
        try {
            await firebaseApp.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            setServerError("Invalid email and/or password. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Layout>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <main
                css={css`
                    header {
                        margin-bottom: 2.4rem;
                    }

                    .server-error {
                        color: #e33451;
                        margin-bottom: 1.6rem;
                    }
                `}
            >
                <header>
                    <h1>Welcome back!</h1>
                    <p>We have requests in the queue ready for you. Thanks!</p>
                </header>
                {serverError && (
                    <section className="server-error">
                        <h2>{serverError}</h2>
                    </section>
                )}
                <form
                    className="offer-help__form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FormField
                        labelText="Email Address"
                        errorMsg={errors.email && "Please enter your email"}
                        name="email"
                        type="email"
                        ref={register({
                            required: true,
                            pattern: /^\S+@\S+\.\S+$/
                        })}
                    />
                    <FormField
                        labelText="Password"
                        errorMsg={
                            errors.password && "Please enter your password"
                        }
                        name="password"
                        type="password"
                        ref={register({
                            required: true
                        })}
                    />

                    <CtaButton
                        type="submit"
                        disabled={
                            isSubmitting || Object.keys(errors).length > 0
                        }
                    >
                        {isSubmitting ? "One sec..." : "Sign In"}
                    </CtaButton>
                </form>
            </main>
        </Layout>
    )
}

export default LoginPage
