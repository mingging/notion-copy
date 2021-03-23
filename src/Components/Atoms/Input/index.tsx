import React from 'react'
import {TextField as MuiTextField, BaseTextFieldProps} from '@material-ui/core';
import styled from "@emotion/styled";


interface InputProps extends BaseTextFieldProps {

}

const Input = ({...props}: InputProps) => {
    return (
        <InputField {...props} variant="outlined" />
    )
}

const InputField = styled(MuiTextField)`
  .MuiInputBase-input {
    padding: 4px 10px;
    border: none;
    border-radius: 3px;
    box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px inset;
    font-size: 15px;
  }
`

export default Input