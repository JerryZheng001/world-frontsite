import styled from 'styled-components'

export const Container = styled.div`
  width: 1148px;
  /* padding: 0 15px; */
  margin: auto;
  @media screen and (max-width: 920px) {
    width: 100%;
  }
`

export const Text = styled.span`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ color, theme }) => color || theme.white};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: ${({ lineHeight }) => lineHeight || '1em'};
`

export const MobileNoShow = styled.div`
  @media screen and (max-width: 920px) {
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
`

export const PCNoShow = styled.div`
  @media screen and (min-width: 920px) {
    display: none;
  }
`

export const MobileWrapPadding = styled.div`
  @media screen and (max-width: 920px) {
    padding-left: 24px;
  }
`

export default Container
