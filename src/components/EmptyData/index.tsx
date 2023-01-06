import { ColumnCenter } from '../Column'
import React from 'react'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import EmptyDataImg from '../../assets/img/empty_data.png'

const StyledListLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`
const StyledWrapper = styled(ColumnCenter)`
  text-align: center;
  align-items: center;
`

export default function EmptyData({
  style,
  text = 'No data yet~',
  size = '84px'
}: {
  size?: string
  style?: React.CSSProperties
  text?: string
}) {
  return (
    <StyledWrapper>
      <StyledListLogo src={EmptyDataImg} size={size} style={style} />
      <TYPE.body>{text}</TYPE.body>
    </StyledWrapper>
  )
}
