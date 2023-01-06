import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from '../../theme'

const InfoCard = styled.button<{ active?: boolean }>`
  &:focus {
    background: #353945;
  }
  display: flex;
  width: 226px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid #353945;
  background: none;
  outline: none;
`

const OptionCardLeft = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap};
  justify-content: center;
  height: 100%;
`

const OptionCardClickable = styled(InfoCard as any)<{ clickable?: boolean }>`
  padding-top: 23px;
  padding-left: 23px;
  padding-bottom: 23px;
  &:hover {
    cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};
    background: #353945;
  }
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`


const HeaderText = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  font-size:16px;
  font-family: Poppins-Medium, Poppins;
font-weight: 500;
color: #FFFFFF;
line-height: 24px;
`

const IconWrapper = styled.div<{ size?: number | null }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  margin-right: 22px;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '24px')};
    width: ${({ size }) => (size ? size + 'px' : '24px')};
  }
`






export default function Option({
  link = null,
  clickable = true,
  size,
  onClick = null,
  color,
  header,
  subheader = null,
  icon,
  active = false,
  id
}: {
  link?: string | null
  clickable?: boolean
  size?: number | null
  onClick?: null | (() => void)
  color: string
  header: React.ReactNode
  subheader: React.ReactNode | null
  icon: string
  active?: boolean
  id: string
}) {
  const content = (
    <OptionCardClickable id={id} onClick={onClick} clickable={clickable && !active} active={active}>
      <IconWrapper size={size} className='imgIcon'>
        <img src={icon} alt={'Icon'} />
      </IconWrapper>
      <OptionCardLeft>
        <HeaderText color={color}>
          {active ? (
            <></>
          ) : (
            ''
          )}
          {header}
        </HeaderText>
      </OptionCardLeft>
      {/* <OptionCardLeft>
        <HeaderText color={color} className='textbtn'>
          {active ? (
            <CircleWrapper>
              <GreenCircle>
                <div />
              </GreenCircle>
            </CircleWrapper>
          ) : (
            ''
          )}
          {header}
        </HeaderText>
        {subheader && <SubHeader>{subheader}</SubHeader>}
      </OptionCardLeft> */}
    </OptionCardClickable>
  )
  if (link) {
    return <ExternalLink href={link}>{content}</ExternalLink>
  }

  return content
}
