import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h3<titleObj>`
  color:${({ color }) => color || '#fff'};
  text-align:${({ align }) => align || 'center'};
  font-size:${props => (props.size || '21') + 'px'}
`
interface titleObj {
    children: string,
    size?: string,
    className?: string,
    color?: string,
    align?:string
}
export default function Title({ children, size, className, color,align }:titleObj) {
    return (
        <StyledTitle className={className} size={size} color={color} align={align}>
            {children}
        </StyledTitle>
    )
}