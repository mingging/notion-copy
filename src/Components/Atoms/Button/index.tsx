import React from 'react';
import {Button as MuiButton, ButtonProps as MuiButtonProps} from '@material-ui/core';

interface buttonProps extends MuiButtonProps {
    children: React.ReactNode
    buttonType?: 'primary' | 'secondary' | null
}

const Button = ({children, buttonType = 'primary', ...props}: buttonProps) => {
    return (
        <MuiButton {...props}>
            {children}
        </MuiButton>
    )
}

export default Button