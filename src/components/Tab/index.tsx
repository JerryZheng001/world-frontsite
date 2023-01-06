import { AutoRow } from '../Row'
import styled from 'styled-components'
import React from 'react'
import { TYPE } from '../../theme'
import { isMobile } from 'react-device-detect'

export const TabsItemRadius = styled.div<{ selected?: boolean; marginRight?: string }>`
  text-align: center;
  border-radius: 16px;
  white-space: nowrap;
  border: 1px solid ${({ theme, selected }) => (selected ? theme.text3 + ' !important' : 'rgba(255,255,255, 0.3)')};
  cursor: pointer;
  color: ${({ theme, selected }) => (selected ? theme.text3 + ' !important' : 'rgba(255,255,255,.7)')};
  position: relative;
  padding: 5px 20px;
  font-size: 14px;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : '')};
  &:hover {
    color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.white};
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: inline-block;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  `}
`

export const TabsItem = styled.div<{ selected?: boolean; marginRight?: string }>`
  cursor: pointer;
  color: ${({ theme, selected }) => (selected ? theme.text3 : 'rgba(255,255,255,.7)')};
  position: relative;
  padding: 8px 0;
  font-size: inherit;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : '')};
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
  position: relative;
  cursor: pointer;
  color: ${({ theme, selected }) => (selected ? theme.text3 : 'rgba(255,255,255,.7)')};
  position: relative;
  padding-bottom: 10px;
  font-size: inherit;
  ${({ theme }) => theme.fw500}
  .counts {
    position: absolute;
    left: 100%;
    top: -2px;
    margin-left: 6px;
    text-align: center;
    display: inline-block;
    min-width: 36px;
    padding: 0 10px;
    height: 22px;
    background: rgba(61, 255, 241, 0.2);
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.text3};
    font-size: 12px;
    line-height: 20px;
    ${({ theme }) => theme.fw400}
  }
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

export const TabsRadiusItem = styled.div<{ selected?: boolean }>`
  height: 45px;
  background: ${({ theme, selected }) => (selected ? theme.text3 + ' !important' : 'transparent')};
  border-radius: 22px;
  padding: 0 28px;
  border: 1px solid ${({ selected }) => (selected ? 'transparent !important' : 'rgba(255, 255, 255, 0.3)')};
  font-size: 20px;
  color: ${({ theme, selected }) => (selected ? '#000 !important' : 'rgba(255,255,255,.7)')};
  line-height: 42px;
  cursor: pointer;
  ${({ selected, theme }) => (selected ? theme.fw500 : theme.fw400)}
  &:hover {
    color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.white};
  }
`

export function SimpleSmallTabs({
  tabs,
  value,
  width,
  gap,
  fontSize = '22px',
  setSelect,
  style,
  tabsCount = [0, 0]
}: {
  tabs: string[]
  width?: string
  value?: string | number
  gap?: string
  fontSize?: string
  style?: any
  setSelect: (e?: any) => void
  tabsCount?: number[]
}) {
  return (
    <AutoRow width={width} gap={gap || '10px'} style={style}>
      {tabs.map((v, index) => (
        <TabSmallItem
          selected={v === value}
          key={v}
          onClick={() => {
            setSelect(v)
          }}
        >
          <TYPE.mediumHeader fontSize={isMobile ? '16px' : fontSize}>
            {v}
            <span className={'counts'}>
              {tabsCount[index] > 0 && tabsCount[index] < 10 ? '0' + tabsCount[index] : tabsCount[index]}
            </span>
          </TYPE.mediumHeader>
        </TabSmallItem>
      ))}
    </AutoRow>
  )
}

export function TabsRadius({
  tabs,
  value,
  width,
  gap,
  fontSize = '22px',
  setSelect,
  style
}: {
  tabs: string[]
  width?: string
  value?: string | number
  gap?: string
  fontSize?: string
  style?: any
  setSelect: (e?: any, f?: any) => void
}) {
  return (
    <AutoRow width={width} gap={gap || '10px'} style={style}>
      {tabs.map((v, index) => (
        <TabsRadiusItem
          selected={v === value}
          key={v}
          onClick={() => {
            setSelect(v, index)
          }}
        >
          {v}
        </TabsRadiusItem>
      ))}
    </AutoRow>
  )
}

export default function SimpleTabs({
  tabs,
  value,
  width,
  gap,
  fontSize = '22px',
  setSelect,
  style
}: {
  tabs: string[]
  width?: string
  value?: string | number
  gap?: string
  fontSize?: string
  style?: any
  setSelect: (e?: any) => void
}) {
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
          <TYPE.mediumHeader fontWeight={500} fontSize={fontSize}>
            {v}
          </TYPE.mediumHeader>
        </TabsItem>
      ))}
    </AutoRow>
  )
}

export function SimpleNameTabs({
  tabs,
  value,
  width,
  gap,
  fontSize = '1rem',
  setSelect,
  style
}: {
  tabs: string[]
  width?: string
  value?: string | number
  gap?: string
  fontSize?: string
  style?: any
  setSelect: (e?: any) => void
}) {
  return (
    <AutoRow width={width} gap={gap || '12px'} style={style}>
      {tabs.map(v => (
        <TabsItem
          selected={v === value}
          key={v}
          onClick={() => {
            setSelect(v)
          }}
        >
          <TYPE.mediumHeader fontWeight={400} fontSize={fontSize}>
            {v}
          </TYPE.mediumHeader>
        </TabsItem>
      ))}
    </AutoRow>
  )
}
