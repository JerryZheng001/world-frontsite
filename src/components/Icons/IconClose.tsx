import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Close } from '../../assets/images/x.svg'


const CloseIcon = styled.div<{ right ?:boolean}>`
  position: absolute;
  right: ${({ right }) => (right ?  '50px': '0')};
  top: ${({ right }) => (right ? '50px' : '20px ')};
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  font-weight: bold;
  color:rgba(255,255,255,0.5);
  &:hover {
    cursor: pointer;
    color: rgba(255,255,255);
  }
`

const CloseColor = styled(Close)<{ strokeColor?: string }>`
  path {
    stroke: ${({ theme, strokeColor }) => (strokeColor ? strokeColor : theme.text4)};
  }
`

export default function IconClose({ onEvent, strokeColor, right }: { strokeColor?: string; onEvent: () => void, right?:boolean }) {
  return (
    <CloseIcon right={right} onClick={onEvent}>
      <CloseColor strokeColor={strokeColor} />
    </CloseIcon>
  )
}

