import React, {ChangeEvent, FormEventHandler} from "react";
import {Tabs as MuiTabs, TabsProps as MuiTabsProps} from '@material-ui/core';
import styled from "@emotion/styled";


interface TabsProps extends Omit<MuiTabsProps, 'onChange'> {
    children: React.ReactNode
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void | FormEventHandler<HTMLButtonElement>
}

const Tabs = ({children, onChange, ...props}: TabsProps) => {
    return (
        <CustomTabs {...props} onChange={onChange}>
            {children}
        </CustomTabs>
    )
}

const CustomTabs = styled(MuiTabs)`
  .PrivateTabIndicator-colorSecondary-7 {
    background-color: #000;
  }
`

export default Tabs