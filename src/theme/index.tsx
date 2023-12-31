// @ts-nocheck
import { transparentize } from 'polished'
import React, { useMemo } from 'react'
import styled, {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
  DefaultTheme
} from 'styled-components'
import { useIsDarkMode } from '../state/user/hooks'
import { Text, TextProps } from 'rebass'
import { Colors } from './styled'
import { isActivity } from '../utils/date'

export * from './components'

export const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ? '#AAAAAA' : '#565A69',
    text3: darkMode ? '#1D32FF' : '#1D32FF',
    text4: darkMode ? '#19202D' : '#C3C5CB',
    text5: darkMode ? '#7C7C7C' : '#EDEEF2',
    text6: darkMode ? '#A8A8A8' : '#A8A8A8',
    text7: darkMode ? '#43484a' : '#43484a',
    

    // backgrounds / greys
    bg1: darkMode ? '#090B0F' : '#FFFFFF',
    bg2: darkMode ? '#0C0F14' : '#F7F8FA',
    bg3: darkMode ? '#212936' : '#F7F8FA',
    bg4: darkMode ? '#27303D' : '#EDEEF2',
    bg5: darkMode ? '#303030' : '#CED0D9',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,.7)' : 'rgba(0,0,0,0.3)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',

    //primary colors
    primary1: darkMode ? '#33A4AA' : '#FF007A',
    primary2: darkMode ? '#3DFFF1' : '#FF8CC3',
    primary3: darkMode ? '#B3FBFF' : '#FF99C9',
    primary4: darkMode ? '#979797' : '#F6DDE8',
    primary5: darkMode ? '#2B3A14' : '#FDEAF1',

    // color text
    primaryText1: darkMode ? '#B2F355' : '#ff007a',

    // secondary colors
    secondary1: darkMode ? '#739A3B' : '#ff007a',
    secondary2: darkMode ? '#191919' : '#F6DDE8',
    secondary3: darkMode ? '#252525' : '#FDEAF1',

    // other
    red1: '#FF0000',
    red2: '#FF2828',
    red3: '#FF4B4B',
    green1: '#24FF00',
    yellow1: '#FFE270',
    yellow2: '#F3841E',
    blue1: '#2172E5',

    // battleground text
    text11: darkMode ? '#354251' : '#354251',
    text22: darkMode ? '#7C8692' : '#7C8692',
    text33: darkMode ? '#A8A8A8' : '#A8A8A8',
    text44: darkMode ? '#A1A6AD' : '#A1A6AD',
    text55: darkMode ? '#3DFFF1' : '#3DFFF1',

    // battleground backgrounds / greys
    bg11: darkMode ? '#1B212A' : '#1B212A',
    bg22: darkMode ? '#12171E' : '#12171E',
    bg33: darkMode ? '#18222F' : '#18222F',
    bg44: darkMode ? '#3DFFF1' : '#3DFFF1',
    bg55: darkMode ? '#1F2B38' : '#1F2B38',

    // battleground primary colors
    primary11: darkMode ? '#3DFFF1' : '#3DFFF1',

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',
    translucent: 'rgba(255, 255, 255, 0.08)',
    gradient1:
      '#000000 linear-gradient(283.31deg, rgba(255, 255, 255, 0.18) -2.53%, rgba(255, 255, 255, 0.17) 18.66%, rgba(255, 255, 255, 0) 98.68%)',
    gradient2: '#000000 linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)'
  }
}

export const wght = (fontWeight: number) => css`
  font-variation-settings: 'wght' ${fontWeight};
`

export const fontWeight = () => {
  return {
    fw300: wght(300),
    fw400: wght(400),
    fw500: wght(500),
    fw600: wght(600),
    fw700: wght(700)
  }
}

export function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),
    ...fontWeight(),

    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },

    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',

    // media queries
    mediaWidth: mediaWidthTemplates,

    zIndex: {
      header: 2000,
      modal: 2001
    },

    isActivity: isActivity(),

    //rwd
    mobile: css`
      display: none;
      ${mediaWidthTemplates.upToSmall`display:inherit;`}
    `,
    desktop: css`
      ${mediaWidthTemplates.upToSmall`display:none;`}
    `,
    mobileHeaderHeight: '66px',
    headerHeight: '87px',
    containWidth: '1248px',

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useIsDarkMode()

  const themeObject = useMemo(() => theme(darkMode), [darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors; fontWeight: number }>`
  color: ${({ color, theme }) => (theme as any)[color]};
  font-variation-settings: 'wght' ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
`

export const TYPE = {
  main(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text1'} {...props} />
  },
  link(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  black(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'#fff'} {...props} />
  },
  white(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'white'} {...props} />
  },
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} color={'text1'} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={38} {...props} />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={22} {...props} />
  },
  smallHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={16} {...props} />
  },
  subHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={14} {...props} />
  },
  small(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={12} {...props} />
  },
  smallGray(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={12} color={'text3'} {...props} />
  },
  blue(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'blue1'} {...props} />
  },
  yellow(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'yellow1'} {...props} />
  },
  darkGray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text2'} {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={400} color={'text2'} {...props} />
  },
  italic(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} fontStyle={'italic'} color={'text2'} {...props} />
  },
  error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={500} color={error ? 'red1' : 'text2'} {...props} />
  }
}

export const FixedGlobalStyle = createGlobalStyle`
html, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

 a {
   color: ${colors(false).blue1}; 
   text-decoration: none;
 }

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  li {
    list-style: none;
  }
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
  
}
.MuiTooltip-tooltip {
  background: #2B3647 !important;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
  padding: 10px 15px !important;
}
`

export const ThemedGlobalStyle = createGlobalStyle`
html {
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg2};
}

body {
  min-height: 100vh;
  background-position: 0 -30vh;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `radial-gradient(50% 50% at 50% 50%, ${transparentize(0.9, theme.primary1)} 0%, ${transparentize(
      1,
      theme.bg1
    )} 100%)`};
    iframe{
      z-index:-1 !important;
    }
}
`
