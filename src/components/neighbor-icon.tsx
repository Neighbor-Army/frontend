import React from "react"
import { css } from "@emotion/core"

const NeighborIcon: React.FC = ({ children }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="16"
        height="16"
        css={css`
            fill: currentColor;
            transition: all 200ms ease-in-out;

            :hover {
                transform: scale(1.2);
                fill: #0245f2;
            }

            :active {
                transform: scale(1);
            }
        `}
    >
        {children}
    </svg>
)

export default NeighborIcon
