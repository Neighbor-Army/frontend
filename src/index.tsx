import React from "react"
import ReactDOM from "react-dom"
import { Global, css } from "@emotion/core"

import App from "./App"

ReactDOM.render(
    <React.StrictMode>
        <Global
            styles={css`
                *,
                *:before,
                *:after {
                    box-sizing: border-box;
                }

                html,
                body,
                div,
                span,
                applet,
                object,
                iframe,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                blockquote,
                pre,
                a,
                abbr,
                acronym,
                address,
                big,
                cite,
                code,
                del,
                dfn,
                em,
                img,
                ins,
                kbd,
                q,
                s,
                samp,
                small,
                strike,
                strong,
                sub,
                sup,
                tt,
                var,
                b,
                u,
                i,
                center,
                dl,
                dt,
                dd,
                ol,
                ul,
                li,
                fieldset,
                form,
                label,
                legend,
                table,
                caption,
                tbody,
                tfoot,
                thead,
                tr,
                th,
                td,
                article,
                aside,
                canvas,
                details,
                embed,
                figure,
                figcaption,
                footer,
                header,
                hgroup,
                menu,
                nav,
                output,
                ruby,
                section,
                summary,
                time,
                mark,
                audio,
                video {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font-size: 100%;
                    font: inherit;
                    vertical-align: baseline;
                }
                // HTML5 display-role reset for older browsers
                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                hgroup,
                menu,
                nav,
                section {
                    display: block;
                }
                body {
                    line-height: 1;
                }
                ol,
                ul {
                    list-style: none;
                }
                blockquote,
                q {
                    quotes: none;
                }
                blockquote:before,
                blockquote:after,
                q:before,
                q:after {
                    content: "";
                    content: none;
                }
                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                }

                //added styles
                a {
                    text-decoration: none;
                    color: unset;
                }

                input,
                textarea {
                    border: none;
                }

                input:focus,
                textarea:focus,
                button:focus {
                    outline: none;
                }

                textarea {
                    resize: none;
                }

                html {
                    font-size: 62.5%;
                }

                body {
                    font-family: Inter, -apple-system, BlinkMacSystemFont,
                        Helvetica Neue, Helvetica, Arial, sans-serif;
                    font-size: 1.6rem;
                    font-weight: 400;
                    line-height: 1.5;
                    min-width: 32rem;
                    color: #18164e;
                    background: #f2f2fa;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-family: Inter, -apple-system, BlinkMacSystemFont,
                        Helvetica Neue, Helvetica, Arial, sans-serif;
                    font-weight: 700;
                }

                h1 {
                    font-size: 3.2rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 0.8rem;
                }

                button {
                    display: block;
                    border: none;
                    cursor: pointer;
                    border-radius: none;
                }

                input {
                    border: none;
                    background: transparent;
                    color: inherit;
                    display: block;
                }
            `}
        />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
