/** @jsxImportSource @emotion/react */
import React from 'react';
import {Button as MuiButton, ButtonProps as MuiButtonProps, Theme} from '@material-ui/core';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'


interface buttonProps extends MuiButtonProps {
    children: React.ReactNode
    buttonType?: 'primary' | 'secondary'
}

const Button = ({children, buttonType = 'primary', ...props}: buttonProps) => {
    return (
        <MuiButton css={() => buttonTypeStyle[buttonType]()} {...props}>
            {children}
        </MuiButton>
    )
}

const buttonTypeStyle = {
    primary: () => css`
      &.MuiButtonBase-root {
        background: #e16259;
      }
    `,
    secondary: () => css`
      &.MuiButtonBase-root {
        background: #fdf5f2;
      }
    `
}



export default Button