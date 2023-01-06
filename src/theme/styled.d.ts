import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components'
import { wght } from './index'

export type Color = string
export interface Colors {
  // base
  white: Color
  black: Color

  // text
  text1: Color
  text2: Color
  text3: Color
  text4: Color
  text5: Color
  text6: Color
  text7: color

  // backgrounds / greys
  bg1: Color
  bg2: Color
  bg3: Color
  bg4: Color
  bg5: Color

  modalBG: Color
  advancedBG: Color

  //blues
  primary1: Color
  primary2: Color
  primary3: Color
  primary4: Color
  primary5: Color

  primaryText1: Color

  // pinks
  secondary1: Color
  secondary2: Color
  secondary3: Color

  // other
  red1: Color
  red2: Color
  red3: Color
  green1: Color
  yellow1: Color
  yellow2: Color
  blue1: Color

  // battleground text
  text11: Color
  text22: Color
  text33: Color
  text44: Color
  text55: Color

  // battleground backgrounds / greys
  bg11: Color
  bg22: Color
  bg33: Color
  bg44: Color
  bg55: Color

  // battleground primary colors
  primary11: Color

  //gradient
  gradient1: Color
  gradient2: Color

  //opacity
  translucent: Color
}

export interface Grids {
  sm: number
  md: number
  lg: number
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {
    fw300: FlattenSimpleInterpolation
    fw400: FlattenSimpleInterpolation
    fw500: FlattenSimpleInterpolation
    fw600: FlattenSimpleInterpolation
    fw700: FlattenSimpleInterpolation

    grids: Grids

    // shadows
    shadow1: string

    zIndex: {
      header: number
      modal: number
    }

    isActivity: boolean

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
    }

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation

    //rwd
    mobile: FlattenSimpleInterpolation
    desktop: FlattenSimpleInterpolation
    mobileHeaderHeight: string
    headerHeight: string
    containWidth: string
  }
}
