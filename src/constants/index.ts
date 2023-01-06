import { AbstractConnector } from '@web3-react/abstract-connector'
import { Token } from './token'
import { fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'
// import { injected } from '../connectors'
import JSBI from 'jsbi'
import { ChainId } from './chain'

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH

// trias
export const BAST_TOKEN: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xa4838122c683f732289805fc3c207febd55babdd', 18, 'TRIAS', 'TRIAS'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0x851096A1F6553e81C200897c3607731201104ddC', 18, 'TRIAS', 'TRIAS'),
  [ChainId.BSCTEST]: new Token(ChainId.BSCTEST, '0xF43B79193c33dAc3530Db9307C54E4885df364de', 18, 'TRIAS', 'TRIAS')
}

export const TEMP_TOKEN: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x5a20F38f8148C0eb0978B31CCf896594f71A01CF', 18, 'TRIAS', 'TRIAS'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0x5a20F38f8148C0eb0978B31CCf896594f71A01CF', 18, 'TRIAS', 'TRIAS'),
  [ChainId.BSCTEST]: new Token(ChainId.BSCTEST, '0x5a20F38f8148C0eb0978B31CCf896594f71A01CF', 18, 'TRIAS', 'TRIAS')
}

//geon token
export const GEON_TOKEN: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x167FcFED3AAD2d11052fCde0cbf704D879939473', 18, 'GEON', 'GEON'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xa382e1dB43cc44BF9104DA89a5d794Fb5d38E560', 18, 'GEON', 'GEON'),
  [ChainId.BSCTEST]: new Token(ChainId.BSCTEST, '0xa382e1dB43cc44BF9104DA89a5d794Fb5d38E560', 18, 'GEON', 'GEON')
}

export const ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'



// loot
export const TRIATHON_LOOT_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x4f0C8a8085774b28999f149954c908273D6632dF',
  [ChainId.KOVAN]: '0x6880cE80c8462f7aa1383C9928C08F7B88616759',
  [ChainId.BSCTEST]: '0xC3Bbc31FdAFd7FaCF10CA216E36F15C540Adc9c9'
}

// loot market action
export const TRIATHON_MARKET_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1De015789Ba95ff8C144B5fA7105bbc99827Ed13',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xC8C484CDDf30caaEa48C221f7563f89EE014a3C7'
}

// transaction repeat loot
export const TRIATHON_TRANSACTION_ADDRESS = TRIATHON_LOOT_ADDRESS

// transaction hulls sell
export const TRIATHON_TRANSACTION_MARKET_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x749bCD8e14ef7Aa3F1F35FCE0Fd46bc7A5033a9c',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xcD4E6AE3d4caafc4B202A17C7E413c7B5aD82213'
}


// loot parts
export const TRIATHON_TOOLS_LOOT_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5d2D4FA3f22d52b9C4821C720F1C646529cF4130',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xf5baF4BD26FC5895D18cdC24A326000A6AD5CcC8'
}

// parts market
export const TRIATHON_PARTS_MARKET_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xe60ACFFD18eAA99796E7214FEa4051D5505c4d8c',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0x01494BBC52c218B555fF4A2d3B401ca1EF114288'
}

// transaction loot parts
export const TRIATHON_TRANSACTION_TOOLS_LOOT_ADDRESS = TRIATHON_TOOLS_LOOT_ADDRESS

// transaction parts sell
export const TRIATHON_TRANSACTION_PARTS_MARKET_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7DC8e0c608ca882Fa9852A437675406E8F30be3d',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0x7671Adf0f6B997a13f412957c21cE25959A2005E'
}

export const NO_FREE_LOOT_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x623332BA2CE86C8b8e1fF3fF7C1a12E7bD17eEF1',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xD1334E56C493e1Ff307951b7CF627132Aae3558b'
}

export const WEAPON_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xE5913A0358d1600fBF3D73DF2F1e2d791228A8b1',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xEda16508495Ad0f33b6B22E76A168c726E40EA17'
}

export const ARTWORKS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xA2EE4FA1Dffd77E52d9351f5384D2B3185f33186',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0x06c003772B191AAae583e08b20CCa43d8ea6577E'
}
export const NEWARTWORKS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xB5FE65E1a8d8db54Ec3200104f4dFf00529040F7',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xB5FE65E1a8d8db54Ec3200104f4dFf00529040F7'
}

export const WEAPON_HELPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x99d593c2ef1e1bdde46aE92da64621d290D41ac0',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xe53D6bD591029B5B1249D46168F1738b078B3d34'
}

export const TRIATHON_WEAPONS_MARKET_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xFC95B2fA657d5C2f2eDcEbd1a858F29dDAA57C46',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xA745479672C9D9Ec374535845b8C699B71c3Ad06'
}

export const TRANSACTION_WEAPON_ADDRESS = WEAPON_ADDRESS

export const TRIATHON_TRANSACTION_WEAPONS_MARKET_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x3987C21b99cEE9545778ab4341BC650d77Ab6191',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xf0d4AD6eDE62D88aa1c402929ad51D38Cd34525B'
}

export const TRIATHON_ARTWORKS_MARKET_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x3Cf8792e1f764D30dA5c68159aA27C164Be300D8',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0x5a4954d5FaD5304fafDE14f4a33D48832B1B6E38'
}

export const TRIATHON_TRANSACTION_ARTWORKS_MARKET_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5e8e663E090D6E87C457d265Ed1C5808B91956C7',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xDc06b3C72F52F51026A01E62f7f64c45C90B763F'
}

export const STAKING_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xA42eA1c6E2B06D26610745D99222344eE93C8dd6',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0x9981fA1119E46cEF590860D242c3086Af5fe0235'
}

export const BLIND_BOX: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xa69595663a9cca2DBC557108c1bB24c791bBe551',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0x4a30a6Fbd4B36AA1DC68EA9eDFbD2956B7C501fb'
}
//add
export const NEWBLIND_BOX: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xbbe133725DEe17F29de9c792d5Ae17b510c4Ad0e',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xbbe133725DEe17F29de9c792d5Ae17b510c4Ad0e'
}




// export const BSC_DETECT: { [chainId in ChainId]: string } = {
//   [ChainId.MAINNET]: '',
//   [ChainId.KOVAN]: '',
//   [ChainId.BSCTEST]: '0x1d78dd284B400Ed5E19DAdc8EB59364C0b6978B8'
// }
//geon amount
export const GEON_DATA: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xa382e1dB43cc44BF9104DA89a5d794Fb5d38E560'
}
//trais amount
export const TRIAS_DATA: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0xF43B79193c33dAc3530Db9307C54E4885df364de'
}

//textRecord bsc mynft 
export const TEXTRECORD_DATA: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x6EeB72Aa5E35910cD37668ae79c607074E9c7Eec',
  [ChainId.KOVAN]: '',
  // [ChainId.BSCTEST]: '0x7f0F37e5576f315404BA7a4BE99f65c0a6654AE3'
  [ChainId.BSCTEST]: '0x4dEFB947C1d191254Fc22F282A3FA56b8A2e9760'
}

//MYBASTET
export const MYBASTET_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc03aE3FBc9f06fEF6Dbf1b6ec5bD1c5fdD6C9550',
  [ChainId.KOVAN]: '',
  [ChainId.BSCTEST]: '0x78fBA723626FE34Fa3032e9C57bC54f59B79B2cB'
}


export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Magic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Magic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C'
]

export const ISTESTING = false
