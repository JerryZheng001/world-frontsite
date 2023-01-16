import React from 'react'
import { ColumnCenter } from '../Column'
import { Dots } from '../styleds'
import styled, { keyframes } from 'styled-components'
import { TYPE } from '../../theme'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledSVG = styled.svg<{ size: string; stroke?: string; padding?: string }>`
  animation: 2s ${rotate} linear infinite;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  padding: ${({ padding }) => padding};
  path {
    stroke: ${({ stroke, theme }) => stroke ?? theme.primary1};
  }
`
const StyledLoading = styled(ColumnCenter)`
  text-align: center;
  align-items: center;
  margin: 350px auto;
`

/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */
export default function Loader({
  size = '84px',
  padding = '20px',
  stroke,
  ...rest
}: {
  size?: string
  stroke?: string
  padding?: string
  [k: string]: any
}) {
  return (
    <StyledLoading>
      <StyledSVG
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        size={size}
        padding={padding}
        stroke={stroke}
        {...rest}
      >
        <path d="M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1" />
        <circle opacity="0.2" cx="9" cy="9" r="7.5" stroke="white" />
      </StyledSVG>
      <TYPE.body>
        Loading
        <Dots />
      </TYPE.body>
    </StyledLoading>
  )
}
