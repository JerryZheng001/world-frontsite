import React from 'react'
import styled from 'styled-components'
import Close from 'assets/images/close_stake.png'

const CloseIcon = styled.div<{ right ?:boolean}>`
  position: absolute;
  right: ${({ right }) => (right ? '40px' : 0)};
  top: ${({ right }) => (right ? '40px' : '10px')};
  transform : translateY(-50%);
  ${({ theme }) => theme.mediaWidth.upToSmall`
    top: 50%;
  `}
`

const CloseColor = styled.div<{ strokeColor?: string }>`
  width: 24px;
  height: 24px;
  background: url(${Close}) no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  path {
    stroke: ${({ theme, strokeColor }) => (strokeColor ? strokeColor : 'theme.text4')};
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 20px;
    height: 20px;
  `}
`

export default function Closed({ onEvent, strokeColor, right }: { strokeColor?: string; onEvent: () => void, right?:boolean }) {
  return (
    <CloseIcon right={right} onClick={onEvent}>
      <CloseColor strokeColor={strokeColor} />
    </CloseIcon>
  )
}
