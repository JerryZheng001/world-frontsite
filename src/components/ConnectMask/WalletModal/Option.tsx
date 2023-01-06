import React from 'react'
import styled from 'styled-components'


const InfoCard = styled.button<{ active?: boolean }>`
  width: 400px;
  height: 56px;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primary1};
  }
`

const OptionCard = styled(InfoCard as any)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 14px 28px;
  cursor: pointer;
`

const OptionCardLeft = styled.div`
  justify-content: center;
  height: 100%;
`

const OptionCardClickable = styled(OptionCard as any) <{ clickable?: boolean }>`
  margin-top: 0;
  justify-content: space-between;
  &:hover {
    color:#42B6D6;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};
    border: ${({ clickable }) => (clickable ? `1px solid #42B6D6` : `1px solid rgba(0, 0, 0, 0.1)`)};
  }
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`

const GreenCircle = styled.div`
  justify-content: center;
  align-items: center;
  &:first-child {
    height: 8px;
    width: 8px;
    margin-right: 8px;
    border-radius: 50%;
  }
`

const CircleWrapper = styled.div`
  color:#42B6D6;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderText = styled.div`
  font-size: 1rem;
  font-weight: 500;
`

const SubHeader = styled.div`
  color: #000;
  margin-top: 10px;
  font-size: 12px;
`

const IconWrapper = styled.div<{ size?: number | null }>`
  align-items: center;
  justify-content: center;
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
  icon: any
  active?: boolean
  id: string
  }) {
  const content = (
    <OptionCardClickable id={id} onClick={onClick} clickable={clickable && !active} active={active}>
      <OptionCardLeft>
        <HeaderText color={color}>
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
      </OptionCardLeft>
      <IconWrapper size={size}>
        <img src={icon?.default} alt={'Icon'} />
      </IconWrapper>
    </OptionCardClickable>
  )
  if (link) {
    return <a href={link}>{content}</a>
  }

  return content
}
