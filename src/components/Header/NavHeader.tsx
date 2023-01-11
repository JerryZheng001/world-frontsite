/* eslint-disable */
import React, {
  useMemo,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import HeaderLogo from "../../assets/images/nav-icons/logoNew.svg";
import styled from "styled-components";
import {
  useWalletModalToggle
} from "../../state/application/hooks"
import { useTranslation } from "react-i18next";
import { useActiveWeb3React } from "../../hooks";
import Web3Status from "../Web3Status";
import { NavLink } from "react-router-dom";
import { ChevronDown, ArrowLeft } from 'react-feather'
import { ExternalHeaderLink, ExternalLink } from "../../theme";


const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 73px;
  align-items: center;
  position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: ${({ theme }) => theme.headerHeight};
    z-index: 111;

`


const Address = styled.div`
  width: 175px;
  height: 38px;
  border-radius: 0 24px 24px 0;
  color: #2253ff;
  border: none;
  text-align: center;
`;



export const TitleIcon = styled.img`
  width: 16px;
  height: 16px;
  display: block;
  margin-right: 8px;
`;


const Logo = styled.div`
  width: 149px;
  height: 32px;
  background: url(${HeaderLogo}) no-repeat;
  background-size: 100% 100%;
`
const NavCon = styled.div`
  flex: 1;
  height: ${({ theme }) => theme.headerHeight};
  align-items: center;
  display: flex;
  justify-content: center;
  >div{
    height: ${({ theme }) => theme.headerHeight};
  }
  >a,span{
    &.comingSoon{
      cursor: not-allowed;
    }
  }
  
`
const StyledDropdown = styled.div`
  font-size: 16px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #fff;
  margin-right:56px;
  align-items: center;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
  height: 84px;
  position: relative;
  -webkit-perspective: 200;
  svg {
    margin-left: 5px;
  }
  > div {
      /* display: none; */
      opacity: 0;
      top: 74px;
      height: auto;
    }
    .nft{
      left: -30px;
    }
    .about{
      right: -30px;
    }
  :hover,
  :focus {
    svg {
      transform: rotate(180deg);
    }
    & > div {
     
      /* display: block; */
      opacity: 1;
      transform: rotateX(1deg);
      transition: all .5s;
      pointer-events: auto;
    }
  }
  ${({ theme }) => theme.flexRowNoWrap}
`
const Dropdown = styled.div`
  background: #fff;
  z-index: 3;
  height: 0;
  position: absolute;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  /* filter: drop-shadow(0 10px 20px rgba(136,120,172,.2)); */
  transform-style: preserve-3d;
  transform-origin: top center;
  transform: rotateX(-3deg);
  transition: transform .4s cubic-bezier(.17,.67,.59,1.21),opacity .1s .1s,-webkit-transform .4s cubic-bezier(.17,.67,.59,1.21);
  backface-visibility: hidden;
  pointer-events: none;
  
  a,span {
    color: #111112;
    text-decoration: none;
    padding: 14px 60px 14px 12px;
    transition: 0.5s;
    display: inline-block;
    border-radius: 8px;
    align-items: center;
    white-space: nowrap;
    position: relative;
    width: 100%;
    svg{
      position: absolute;
      right: 19px;
      top: calc(50% - 9px);
      display: none;
    }
    :last-child{
      border: none;
    }
    :hover {
      background-color:  #F2F2F2;
      color: #111112;
      svg{
        display: block;
      }
    }
    &.comingSoon{
      color: rgba(153, 153, 153, 1);
      cursor: not-allowed;
    }
  }
`

const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #FFFFFF;
  align-items: center;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
  white-space: nowrap;
  transition: 0.5s;
  margin-right: 56px;
  &:hover{
    color: #fff;
  }

`
const StyledNavLinkSoon = styled.span`
  font-size: 16px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #FFFFFF;
  align-items: center;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
  white-space: nowrap;
  transition: 0.5s;
  margin-right: 56px;
  &:hover{
    color: #fff;
  }

`
const IntroText = styled.div`
  font-size: 12px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  white-space: nowrap;
`


interface TabContent {
  name: string
  pathUrl?: string
  link?: string
  introText?: string
  showRightPoint?: boolean
  comingSoon?: boolean
  titleContent?: JSX.Element
  isJump?:boolean
}

interface Tab extends TabContent {
  childPaths?: TabContent[]
}

const NavRouter: Tab[] = [
  // {
  //   name: 'Home',
  //   pathUrl: 'home'
  // },
  // {
  //   name: 'Product',
  //   childPaths: [
  //     {
  //       name: 'Contract detection',
  //       pathUrl: '/contract_detection'
  //     },
  //     {
  //       name: 'BSC Detection',
  //       link: 'https://www.triathon.space/#/battleground',
  //       isJump:false
  //     },
  //     {
  //       name: 'Expert mode',
  //       link: 'https://www.triathon.space/#/expertmode',
  //       isJump:false,
  //     },
  //     {
  //       name: 'Mainstage',
  //       link: 'https://battleground.triathon.space/mainstage#/',
  //       isJump:false
  //     },
      
  //   ]
  // },
 
  // {
  //   name: 'ITO',
  //   comingSoon: true,
  // },

  // {
  //   name: 'About',
  //   childPaths: [
  //     {
  //       name: 'White Paper',
  //       pathUrl: '/whitepaper'
  //     },
  //     {
  //       name: 'Economic Paper',
  //       link: 'https://triathon.gitbook.io/economic-paper/',
  //       isJump:true
  //     },
  //     {
  //       name: 'Spaceship Map',
  //       pathUrl: '/spaceShipMap'
  //     },
  //     {
  //       name: 'Code Book',
  //       pathUrl: '/codebook'
  //     },
  //     {
  //       name: 'Play Book',
  //       link: 'https://triathon.gitbook.io/triath/',
  //       isJump:true
  //     },
  //   ]
  // },
  // {
  //   name:'UserMode',
  //   link:'https://www.triathon.space/#/home',
    
  // }
]

export default function NavHeader(): JSX.Element {
  const [bgOpacity, setBgOpacity] = useState<number>(0);
  const [menuShow, setMenuShow] = useState(false);
  // const [currentMyinfoTab, setCurrentMyinfoTab] = useCurrentMyinfoTab();
  // const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);

  const { t, i18n } = useTranslation();
  const lanRef = useRef<any>(null);
  const { account, connector } = useActiveWeb3React();

  // const walletModalOpen = useModalOpen(ApplicationModal.WALLET);
  const toggleWalletModal = useWalletModalToggle();

  const calcBgOpacity = useCallback(() => {
    const top = document.documentElement.scrollTop;
    if (top >= 50) {
      let nav = document.getElementsByClassName("head-nav")[0] as any;
      nav.style.background =
        "#111112";
      // nav.style.background =
      //   "linear-gradient(180deg, rgba(216, 216, 216, 0.02) 0%, rgba(238, 238, 238, 0.03) 100%)";
      // nav.style.backdropFilter = "blur(20px)";
      // nav.style.webkitBackdropFilter = "blur(20px)";
      setBgOpacity(1);
    } else {
      let nav = document.getElementsByClassName("head-nav")[0] as any;
      nav.style.background = "none";
      nav.style.backdropFilter = "none";
    }
  }, [bgOpacity]);
  useEffect(() => {
    document.addEventListener("scroll", calcBgOpacity);
    return () => {
      document.removeEventListener("scroll", calcBgOpacity);
    };
  }, [calcBgOpacity]);







  return (
    <StyledNav className="head-nav">
     
      <Logo />
      <NavCon>
        {NavRouter.map(({ name, pathUrl, link, childPaths, comingSoon }) => {
          if (childPaths) {
            return (
              <StyledDropdown key={name}>
                {name}
                <ChevronDown size={15} />
                <Dropdown className={name === 'NFT' ? 'nft' : name === 'About' ? 'about' : ''}>
                  {childPaths.map(({ name, pathUrl, link, introText, comingSoon ,isJump }) => {
                    return link ? (
                      <ExternalLink href={link} key={name} className={comingSoon ? 'comingSoon' : ''} target={isJump?'_blank':'_top'}>
                        {
                          introText && <IntroText>{introText}</IntroText>
                        }
                        {name}
                        <ArrowLeft size={18} />
                      </ExternalLink>
                    ) : pathUrl ? (
                      <NavLink to={pathUrl} key={name} className={comingSoon ? 'comingSoon' : ''}>
                        {name}
                        {
                          introText && <IntroText>{introText}</IntroText>
                        }
                        <ArrowLeft size={18} />
                      </NavLink>
                    ) : <span className={comingSoon ? 'comingSoon' : ''}>
                      {name}
                      {
                        introText && <IntroText>{introText}</IntroText>
                      }
                      {/* <ArrowLeft size={18} /> */}
                    </span>
                  })}
                </Dropdown>
              </StyledDropdown>
            )
          }

          return (
            <>
              {link ? (
                <ExternalHeaderLink href={link} key={name} className={comingSoon ? 'comingSoon' : ''}>
                  {name}
                </ExternalHeaderLink>
              ) : (pathUrl) ? (
                <StyledNavLink to={'/' + pathUrl} key={name} className={comingSoon ? 'comingSoon' : ''}>
                  {name}
                </StyledNavLink>
              ) : <StyledNavLinkSoon className={comingSoon ? 'comingSoon' : ''} >{name}</StyledNavLinkSoon>
              }
            </>
          )
        })}
      </NavCon>
      <Web3Status />
      {/* {account ? (
        <Address>
          <Web3Status />
        </Address>
      ) : (
        <Web3Status />
      )} */}
 
    </StyledNav>
  );
}
