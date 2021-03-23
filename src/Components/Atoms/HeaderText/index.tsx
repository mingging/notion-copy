/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from '@emotion/core'

interface HeaderTextProps {
    text: string
    size?: 'xxl' | 'l'
}

const HeaderText = ({text, size = 'l'}: HeaderTextProps) => {
    return (
        <div css={() => TextSize[size]()}>
            {text}
        </div>
    )
}

const TextSize = {
    xxl: () => css`
      font-size: 74px;
      line-height: 1.1;
      letter-spacing: -0.025em;
      color: #111111;
      font-weight: 700;
    `,
    l: () => css`
      font-size: 38px;
      line-height: 1.2;
      letter-spacing: -0.005em;
      color: #111111;
      font-weight: 700;
    `
}

export default HeaderText