import { ColumnCenter } from '../Column'
import { Dots } from '../styleds'
// import { Dots } from 'components/styleds'
import React from 'react'

import styled, { keyframes } from 'styled-components'
// import { TYPE } from 'theme'

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
    stroke: ${({ stroke, theme }) => stroke ?? '#fff'};
  }
`
const StyledLoading = styled(ColumnCenter)`
  text-align: center;
  align-items: center;
  width: auto;
  svg rect {
    fill: #ff6700;
  }
`

const LoadText = styled.div`
  font-size: 22px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #ffffff;
  line-height: 30px;
  margin-top: 5px;
`

/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */
export default function Loader({
  size = '60px',
  padding = '10px',
  stroke,
  showText = true,
  ...rest
}: {
  size?: string
  stroke?: string
  padding?: string
  showText?: boolean
  [k: string]: any
}) {
  return (
    <StyledLoading>
      <StyledSVG
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        size={size}
        padding={padding}
        stroke={stroke}
        {...rest}
      >
        {/* <path d="M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1" /> */}
        <path
          fill="#fff"
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
        {/* <circle opacity="0.2" cx="9" cy="9" r="7.5" stroke="white" /> */}
      </StyledSVG>
      {showText && (
        <LoadText>
          Loading
          <Dots />
        </LoadText>
      )}
    </StyledLoading>
  )
}
