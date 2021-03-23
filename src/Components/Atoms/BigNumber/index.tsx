import React from "react";
import styled from "@emotion/styled";

interface BigNumberProps {
    number: number
}

const BigNumber = ({number}: BigNumberProps) => {
    return (
        <Number>{number}</Number>
    )
}

const Number = styled.span`
  font-size: 110px;
  font-weight: 700;
  line-height: 1;
  margin-right: 20px;
`

export default BigNumber