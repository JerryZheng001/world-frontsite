import { AutoRow } from '../Row'
import styled from 'styled-components'
import React from 'react'
// import { TYPE } from 'theme'

// export const TabsItemRadius = styled.div<{ selected?: boolean; marginRight?: string }>`
//   text-align: center;
//   border-radius: 16px;
//   white-space: nowrap;
//   border: 1px solid ${({ theme, selected }) => (selected ? theme.text3 + ' !important' : 'rgba(255,255,255, 0.3)')};
//   cursor: pointer;
//   color: ${({ theme, selected }) => (selected ? theme.text3 + ' !important' : 'rgba(255,255,255,.7)')};
//   position: relative;
//   padding: 5px 20px;
//   font-size: 14px;
//   margin-right: ${({ marginRight }) => (marginRight ? marginRight : '')};
//   &:hover {
//     color: ${({ theme }) => theme.white};
//     border-color: ${({ theme }) => theme.white};
//   }
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     display: inline-block;
//     margin-bottom: 0 !important;
//     margin-top: 0 !important;
//   `}
// `

export const TabsItem = styled.div<{ selected?: boolean; marginRight?: string }>`
  cursor: pointer;
  color: ${({ theme, selected }) => (selected ? theme.text3 : 'rgba(255,255,255,.7)')};
  position: relative;
  padding: 8px 0;
  font-size: inherit;
  margin: 0 35px !important;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 25px;
    height: 2px;
    background-color: ${({ theme, selected }) => (selected ? theme.text3 : 'transparent')};
    transform: translateX(-50%);
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: inline-block;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  `}
`

export const TabSmallItem = styled.div<{ selected?: boolean }>`
  cursor: pointer;
  color: ${({ theme, selected }) => (selected ? theme.text3 : 'rgba(255,255,255,.7)')};
  position: relative;
  padding-bottom: 10px;
  font-size: inherit;
  ${({ theme }) => theme.fw500}
  &:hover {
    color: ${({ theme }) => theme.white};
  }
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 24px;
    height: 2px;
    background-color: ${({ theme, selected }) => (selected ? theme.text3 : 'transparent')};
    transform: translateX(-50%);
  }
`
const MediumHeader = styled.div`
  font-weight: 500;
  font-size: 22px;
  >span{
    position: absolute;
    font-size: 12px;
    color: #3DFFF1;
    padding: 1px 11px;
    border: 1px solid #3DFFF1;
    border-radius: 12px;
    background: rgba(61, 255, 241, 0.2);
    margin-left: 6px;
  }
`

export default function SimpleTabs({
  tabs,
  value,
  width,
  gap,
  setSelect,
  style,
  pages
}: {
  tabs: string[]
  width?: string
  value?: string | number
  gap?: string
  fontSize?: string
  style?: any
  setSelect: (e?: any) => void
  pages: Object
  }) {
  let Length = Object.values(pages);
  return (
    <AutoRow width={width} gap={gap || '22px'} style={style}>
      {tabs.map((v, index) => (
        <TabsItem
          selected={index === value}
          key={v}
          onClick={() => {
            setSelect(index)
          }}
        >
          <MediumHeader>
            {v}
            <span>{Length[index] > 0 && Length[index] < 10 ? '0' + Length[index] : Length[index]}</span>
          </MediumHeader>
        </TabsItem>
      ))}
    </AutoRow>
  )
}

