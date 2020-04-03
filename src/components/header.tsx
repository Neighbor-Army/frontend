import React from "react"
import { css } from "@emotion/core"
import { Link } from "react-router-dom"

import Logo from "./logo"

const Header = () => (
    <header
        css={css`
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 3.2rem 0;
            width: 100%;
            max-width: calc(100vw - 3.2rem);
            margin: auto;

            a:first-of-type {
                max-width: 70%;
            }

            @media screen and (min-width: 480px) {
                padding: 3.2rem 0;
                max-width: calc(100vw - 7.2rem);
                align-items: center;

                a:first-of-type {
                    max-width: 50%;
                }
            }

            @media screen and (min-width: 768px) {
                max-width: 70%;

                a:first-of-type {
                    max-width: 33%;
                }
            }
        `}
    >
        <Link to="/">
            <Logo />
        </Link>
        <nav
            css={css`
                font-size: 1.3rem;
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                a:not(:first-child) {
                    display: block;
                    margin-top: 0.8rem;
                }

                @media screen and (min-width: 480px) {
                    flex-direction: row;

                    a:not(:first-child) {
                        margin-top: 0;
                        margin-left: 0.8rem;
                    }
                }

                @media screen and (min-width: 768px) {
                    a:not(:first-child) {
                        margin-top: 0;
                        margin-left: 1.6rem;
                    }
                }
            `}
        >
            <Link to="/login">Login</Link>
        </nav>
    </header>
)

export default Header
