import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Close } from '../../assets/images/x.svg'

const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    top: 50%;
  `}
`

const CloseColor = styled(Close)<{ strokeColor?: string }>`
  width: 30px;
  height: 30px;
  stroke-width: 1;
  color: rgba(225,225,225,.5);
  &:hover {
    color: #fff;
  }
  path {
    stroke: ${({ theme, strokeColor }) => (strokeColor ? strokeColor : 'theme.text4')};
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 20px;
    height: 20px;
  `}
`

export default function Closed({ onEvent, strokeColor }: { strokeColor?: string; onEvent: () => void }) {
  return (
    <CloseIcon onClick={onEvent}>
      <CloseColor strokeColor={strokeColor} />
    </CloseIcon>
  )
}
