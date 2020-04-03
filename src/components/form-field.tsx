import React from "react"
import MaskedInput from "react-text-mask"
import { css } from "@emotion/core"

interface FormFieldProps extends React.HTMLProps<HTMLInputElement> {
    labelText: string
    errorMsg?: string
    mask?: Array<string | RegExp>
}

const FormField = React.forwardRef(
    (
        { labelText, errorMsg, mask, ...rest }: FormFieldProps,
        ref?: React.Ref<any>
    ) => {
        return (
            <label
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-bottom: 1.6rem;
                    cursor: pointer;

                    span {
                        display: block;
                        font-size: 1.2rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.4px;
                    }

                    input {
                        border: 1px solid #18164e;
                        border-radius: 0.2rem;
                        padding: 1.6rem;
                        font-size: 1.6rem;
                        color: #18164e;
                    }

                    small {
                        display: block;
                        color: #e33451;
                    }
                `}
            >
                <span>{labelText}</span>
                {mask ? (
                    <MaskedInput
                        style={{
                            border: "1px solid #18164e",
                            borderRadius: "0.2rem",
                            padding: "1.6rem",
                            fontSize: "1.6rem",
                            color: "#18164e"
                        }}
                        type="text"
                        mask={mask}
                        {...rest}
                        ref={ref}
                    />
                ) : (
                    <input type="text" {...rest} ref={ref} />
                )}
                {errorMsg && <small>{errorMsg}</small>}
            </label>
        )
    }
)

FormField.displayName = "FormField"

export default FormField
