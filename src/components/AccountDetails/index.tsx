import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useActiveWeb3React } from '../../hooks'
import { AppDispatch } from '../../state'
import { clearAllTransactions } from '../../state/transactions/actions'
// import { shortenAddress } from '../../utils'
import Copy from './Copy'
import Transaction from './Transaction'
import { SUPPORTED_WALLETS } from '../../constants'
// import { getEtherscanLink } from '../../utils'
import { injected, walletconnect, walletlink, fortmatic, portis } from '../../connectors'
import CoinbaseWalletIcon from '../../assets/images/coinbaseWalletIcon.svg'
import WalletConnectIcon from '../../assets/images/walletConnectIcon.svg'
import FortmaticIcon from '../../assets/images/fortmaticIcon.png'
import PortisIcon from '../../assets/images/portisIcon.png'
// import Identicon from '../Identicon'
import { ButtonSecondary, ButtonClosePrimary, ButtonChangePrimary } from '../Button'
// import { ExternalLink as LinkIcon } from 'react-feather'
import { /*ExternalLink*/ } from '../../theme'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import { ReactComponent as Close } from '../../assets/images/x.svg'


const CloseIcon = styled.div`
  position: absolute;
  right: 40px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
const CloseColor = styled(Close)`
width: 24px;
height: 24px;
  color:#ffff;
  path {
    stroke: ${({ theme }) => theme.text4};
  }
`
const UpperSection = styled.div`
  position: relative;
  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }
  h5:last-child {
    margin-bottom: 0px;
  }
  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`
const WalltHead = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(225,225,225,.1);
  padding: 0 40px;
`
const AccountGroupingRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text1};
  div {
    ${({ theme }) => theme.flexRowNoWrap}
    align-items: center;
  }
`
const LowSection = styled.div`
  padding: 10px 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LowerSection = styled.div`
  width: 750px;
  height: 166px;
  background: #172966;
  border-radius: 4px;
  padding: 30px;
  margin: 0 auto;
  overflow: hidden;
  overflow-y: auto;
   &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
    &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`
const AccountControl = styled.div`
  width: 750px;
  height: 58px;
  margin: 40px auto 30px;
  background: rgba(7, 15, 51, 0.6);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  &>div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
`
const AccountLeft = styled.div`
  display: flex;
  align-items: center;
  &>p{
    font-size: 16px;
    font-weight: 800;
    margin-top: 20px;
  }
`

// const AddressLink = styled(ExternalLink)<{ hasENS: boolean; isENS: boolean }>`
//   font-size: 0.825rem;
//   color: ${({ theme }) => theme.text3};
//   margin-left: 1rem;
//   font-size: 0.825rem;
//   display: flex;
//   :hover {
//     color: ${({ theme }) => theme.text2};
//   }
// `


const WalletName = styled.div<{ fontSize?: boolean }>`
  height: 16px;
  font-size: ${({ fontSize }) => fontSize ? '18px' : '20px'};
  font-family: MPLUS1-Bold, MPLUS1;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 16px;
`
const IconWrapper = styled.div<{ size?: number }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '32px')};
    width: ${({ size }) => (size ? size + 'px' : '32px')};
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: flex-end;
  `};
`
const Dot = styled.span`
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #ffffff 4.17%, rgba(255, 255, 255, 0) 75%);
  border: 0.6px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50%;
`
const ConnectMask = styled.div`
  min-width: 830px;
  min-height: 514px;
  border-radius: 8px;
  backdrop-filter: blur(29px);
`
const TransactionListWrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap};
`
const WalletAction = styled(ButtonSecondary)`
  width: fit-content;
  font-weight: bold;
  margin-left: 8px;
  font-size: 14px;
  color: #fff;
  padding: 4px 6px;
  :hover {
    color: #18EAC4;
    cursor: pointer;
    text-decoration: underline;
  }
`

const ClearnButton = styled.div`
  font-size: 14px;
  font-family: MPLUS1-Regular, MPLUS1;
  font-weight: 600;
  color: rgba(225,225,225,.5);
  &:hover{
    color: #EB423D;
    cursor: pointer;
  }
`

const MainWalletAction = styled(WalletAction)`
  color: ${({ theme }) => theme.primary1};
`

function renderTransactions(transactions: string[]) {
  return (
    <TransactionListWrapper>
      {transactions.map((hash, i) => {
        return <Transaction key={i} hash={hash} />
      })}
    </TransactionListWrapper>
  )
}
interface AccountDetailsProps {
  toggleWalletModal: () => void
  pendingTransactions: string[]
  confirmedTransactions: string[]
  ENSName?: string
  openOptions: () => void
}
// declare global {
//   interface Window{
//     ethereum?:any,
//     web3?:any
//   }
// }

export default function AccountDetails({
  toggleWalletModal,
  pendingTransactions,
  confirmedTransactions,
  ENSName,
  openOptions
}: AccountDetailsProps) {
  const { chainId, account, connector } = useActiveWeb3React()
  const dispatch = useDispatch<AppDispatch>()

  function formatConnectorName() {
    const { ethereum} = window || {}
    const isMetaMask = !!(ethereum && ethereum.isMetaMask)
    const name = Object.keys(SUPPORTED_WALLETS)
      .filter(
        k =>
          SUPPORTED_WALLETS[k].connector === connector && (connector !== injected || isMetaMask === (k === 'METAMASK'))
      )
      .map(k => SUPPORTED_WALLETS[k].name)[0]
    return <WalletName>Connected with {name}</WalletName>
  }

  function getStatusIcon() {
    if (connector === injected) {
      return (
        <IconWrapper size={16}>
          {/* <Identicon /> */}
          <Dot />
        </IconWrapper>
      )
    } else if (connector === walletconnect) {
      return (
        <IconWrapper size={16}>
          <img src={WalletConnectIcon} alt={'wallet connect logo'} />
        </IconWrapper>
      )
    } else if (connector === walletlink) {
      return (
        <IconWrapper size={16}>
          <img src={CoinbaseWalletIcon} alt={'coinbase wallet logo'} />
        </IconWrapper>
      )
    } else if (connector === fortmatic) {
      return (
        <IconWrapper size={16}>
          <img src={FortmaticIcon} alt={'fortmatic logo'} />
        </IconWrapper>
      )
    } else if (connector === portis) {
      return (
        <>
          <IconWrapper size={16}>
            <img src={PortisIcon} alt={'portis logo'} />
            <MainWalletAction
              onClick={() => {
                portis.portis.showPortis()
              }}
            >
              Show Portis
            </MainWalletAction>
          </IconWrapper>
        </>
      )
    }
    return null
  }

  const clearAllTransactionsCallback = useCallback(() => {
    if (chainId) dispatch(clearAllTransactions({ chainId }))
  }, [dispatch, chainId])

  return (
    <ConnectMask>
      <UpperSection>
        <WalltHead>
          {formatConnectorName()}
          <CloseIcon onClick={toggleWalletModal}>
            <CloseColor />
          </CloseIcon>
        </WalltHead>
        <AccountGroupingRow>
          <div>
            {connector !== injected && connector !== walletlink && (
              <WalletAction
                style={{ fontSize: '18px', fontWeight: 400, marginRight: '8px' }}
                onClick={() => {
                  ; (connector as any).close()
                }}
              >
                Disconnect
              </WalletAction>
            )}
          </div>
        </AccountGroupingRow>
        <AccountGroupingRow id="web3-account-identifier-row">
          <AccountControl>
            {ENSName ? (
              <div>
                <AccountLeft>
                  {getStatusIcon()}
                  <p>{ENSName}</p>
                </AccountLeft>
                <AccountLeft>
                  {account && (
                    <Copy toCopy={account} flag='true'>
                      <span style={{ marginLeft: '4px' }}></span>
                    </Copy>
                  )}

                  {/* {chainId && account && (
                          <AddressLink
                            hasENS={!!ENSName}
                            isENS={true}
                            href={chainId && getEtherscanLink(chainId, ENSName, 'address')}
                          >
                            <LinkIcon size={16} />
                            <span style={{ marginLeft: '4px' }}>View on Etherscan</span>
                          </AddressLink>
                        )} */}
                </AccountLeft>
              </div>
            ) : (
              <div>
                <AccountLeft>
                  {getStatusIcon()}
                    <p> {account && account}</p>
                </AccountLeft>
                <AccountLeft>
                  {account && (
                    <Copy toCopy={account} flag='true'>
                      <span style={{ marginLeft: '4px' }}></span>
                    </Copy>
                  )}

                  {/* {chainId && account && (
                          <AddressLink
                            hasENS={!!ENSName}
                            isENS={false}
                            href={getEtherscanLink(chainId, account, 'address')}
                          >
                            <LinkIcon size={16} />
                            <span style={{ marginLeft: '4px' }}>View on Etherscan</span>
                          </AddressLink>
                        )} */}
                </AccountLeft>
              </div>
            )}
          </AccountControl>
        </AccountGroupingRow>
      </UpperSection>
      <LowSection>
        <ButtonChangePrimary
          onClick={() => {
            openOptions()
          }}
          style={{ marginRight: '20px' }}
        >
          Change
        </ButtonChangePrimary>
        <ButtonClosePrimary onClick={toggleWalletModal}>Close</ButtonClosePrimary>
      </LowSection>
      {!!pendingTransactions.length || !!confirmedTransactions.length ? (
        <LowerSection>
          <AutoColumn gap="16px" style={{ width: '100%' }}>
            <RowBetween>
              <WalletName fontSize={true}>Recent Transactions</WalletName>
              <ClearnButton onClick={clearAllTransactionsCallback}>(clear all)</ClearnButton>
            </RowBetween>
            <AutoColumn>
              {renderTransactions(pendingTransactions)}
              {renderTransactions(confirmedTransactions)}
            </AutoColumn>
          </AutoColumn>
        </LowerSection>
      ) : (
        <div>
          <LowerSection>
            <WalletName fontSize={true}>Your transactions will appear here...</WalletName>
          </LowerSection>
        </div>
      )}
    </ConnectMask>
  )
}
