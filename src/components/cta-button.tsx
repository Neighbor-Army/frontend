import React from "react"
import { css } from "@emotion/core"

interface CtaButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    onClick?: () => void
    isSecondaryBtn?: boolean
}

const CtaButton: React.FC<CtaButtonProps> = ({
    onClick,
    children,
    isSecondaryBtn = false,
    ...rest
}) => (
    <div
        css={css`
            .btn {
                padding: 1.6rem;
                font-size: 1.4rem;
                font-weight: 700;
                border-radius: 0.4rem;
                width: 100%;
                margin: auto;
                transition: all 100ms ease-in-out;
            }

            .btn-primary {
                background: #18164e;
                color: #f2f2fa;
            }

            .btn-primary:hover {
                background: #3631cf;
                transform: scale(1.1);
            }

            .btn-primary:active {
                background: #6c6c99;
                transform: scale(1);
            }

            .btn-primary:disabled {
                background: #6c6c99;
            }

            .btn-secondary {
                background: transparent;
                border: 2px solid #18164e;
                color: #18164e;
                padding: 1.4rem;
            }

            .btn-secondary:hover {
                border-color: #3631cf;
                color: #3631cf;
                transform: scale(1.1);
            }

            .btn-secondary:active {
                border-color: #6c6c99;
                color: #6c6c99;
                transform: scale(1);
            }

            .btn-secondary:disabled {
                border-color: #6c6c99;
                color: #6c6c99;
            }

            @media screen and (min-width: 480px) {
                min-width: 48%;
            }
        `}
    >
        <button
            onClick={onClick}
            {...rest}
            className={`btn btn-${isSecondaryBtn ? "secondary" : "primary"}`}
        >
            {children}
        </button>
    </div>
)

export default CtaButton
