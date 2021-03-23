import React from "react";
import {Tab as MuiTab, TabProps as MuiTabProps} from '@material-ui/core';

interface TabProps extends MuiTabProps{
    index: number,
    label: string
}

const Tab = ({index = 0, label, ...props}: TabProps) => {
    return  (
        <MuiTab label={label} {...index} {...props}/>
    )
}

export default Tab