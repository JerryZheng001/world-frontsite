import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Close } from '../../assets/images/x.svg'

const CloseIcon = styled.div<{ right ?:boolean}>`
  position: absolute;
  right: ${({ right }) => right ? '40px' : '40px'};
  top: ${({ right }) => right ? '35px' : '20px'};
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  &:hover {
    cursor: pointer;
    opacity: 0.6; 
  }
`

const CloseColor = styled(Close)<{ strokeColor?: string }>`
  path {
    stroke: ${({ theme, strokeColor }) => (strokeColor ? strokeColor : theme.text4)};
  }
`

export default function IconClose({ onEvent, strokeColor, right }: { strokeColor?: string; onEvent: () => void, right? :boolean}) {
  return (
    <CloseIcon right={right} onClick={onEvent}>
      <CloseColor strokeColor={strokeColor} />
    </CloseIcon>
  )
}

