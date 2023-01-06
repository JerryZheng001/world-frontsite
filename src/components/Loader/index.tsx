// @ts-nocheck
import React  from 'react';
import { ColumnCenter } from '../Column'
import styled from 'styled-components'

const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`
const StyledLoading = styled(ColumnCenter)`
  text-align: center;
  align-items: center;
  width: auto;
`

/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */
export default function Loader({
  size = '60px',
  padding = '20px',
  stroke,
  showText = true,
}: {
  size?: string
  stroke?: string
  padding?: string
  showText?: boolean
  [k: string]: any
}) {
  return (
    <StyledLoading>
      {showText && (
        <span>
          Loading
          <Dots />
        </span>
      )}
    </StyledLoading>
  )
}
