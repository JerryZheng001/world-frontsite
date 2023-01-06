import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { darken } from 'polished'
import React, { useMemo } from 'react'
// import { Activity } from 'react-feather'
import styled from 'styled-components'
import { NetworkContextName } from '../../constants'
import useENSName from '../../hooks/useENSName'
import { useHasSocks } from '../../hooks/useSocksBalance'
import { useWalletModalToggle } from '../../state/application/hooks'
import { isTransactionRecent, useAllTransactions } from '../../state/transactions/hooks'
import { TransactionDetails } from '../../state/transactions/reducer'
import { shortenAddress1 } from '../../utils'
import { ButtonOutlined, ButtonPrimary } from '../Button'
import { fortmatic, injected, portis, walletconnect, walletlink } from '../../connectors'
import CoinbaseWalletIcon from '../../assets/images/coinbaseWalletIcon.svg'
import FortmaticIcon from '../../assets/images/fortmaticIcon.png'
import PortisIcon from '../../assets/images/portisIcon.png'
import WalletConnectIcon from '../../assets/images/walletConnectIcon.svg'
import { AbstractConnector } from '@web3-react/abstract-connector'
// import { useLocation } from "react-router";

// import Identicon from '../Identicon'
import Loader from '../Loader'

import WalletModal from '../WalletModal'
// import { TYPE } from 'theme'
import useTheme from '../../hooks/useTheme'
import { ShowSmall, TYPE } from '../../theme'
import { RowBetween } from '../Row'
// import Copy from '../AccountDetails/Copy'

const Web3StatusGeneric = styled(ButtonPrimary)`
  /* ${({ theme }) => theme.flexRowNoWrap} */
  /* width: 100%;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  :focus {
    outline: none;
  } */
`
const Web3StatusError = styled(Web3StatusGeneric)`
  background-color: ${({ theme }) => theme.red1};
  border: 1px solid ${({ theme }) => theme.red1};
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  padding: 0 15px;
  :hover,
  :focus {
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
`

const Web3StatusConnect = styled.div<{ faded?: boolean }>`
  cursor: pointer;
   width: 173px;
  height: 44px;
  text-align: center;
  line-height: 44px;
    position: relative;
    font-size: 16px;
font-family: Poppins-SemiBold, Poppins;
font-weight: 600;
color: #FFFFFF;
   

`

const Web3StatusConnected = styled(ButtonOutlined) <{ pending?: boolean }>`
  color: ${({ pending, theme }) => (pending ? theme.white : theme.text3)};
  background-color:${({ pending, theme }) => (pending ? '#DFE6FF' : '#DFE6FF')};
  border-radius:24px;
  padding: 0;
  border: none;
  font-weight: 500;
  text-align: center;
  :hover,
  :focus {
    color: ${({ pending, theme }) => (pending ? darken(0.1, theme.primary1) : theme.text1)};
    border: none;
    box-shadow: none;
    background-color: #DFE6FF !important;
  }
  & p {
    margin: 0;
    width: 100%;
  }
  
`

const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  font-size: 13px;
  width: fit-content;
  font-weight: 400;
  height: 38px;
  line-height: 38px;
`

// const NetworkIcon = styled(Activity)`
//   margin-left: 0.25rem;
//   margin-right: 0.5rem;
//   width: 16px;
//   height: 16px;
// `
const IconWrapper = styled.div<{ size?: number }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  & > * {
    height: ${({ size }) => (size ? size + 'px' : '32px')};
    width: ${({ size }) => (size ? size + 'px' : '32px')};
  }
`
const Dot = styled.span`
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #ffffff 4.17%, rgba(255, 255, 255, 0) 75%);
  border: 0.6px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50%;
`

// eslint-disable-next-line react/prop-types
function StatusIcon({ connector }: { connector: AbstractConnector }) {
  if (connector === injected) {
    return <Dot />
  } else if (connector === walletconnect) {
    return (
      <IconWrapper size={16}>
        <img src={WalletConnectIcon} alt={''} />
      </IconWrapper>
    )
  } else if (connector === walletlink) {
    return (
      <IconWrapper size={16}>
        <img src={CoinbaseWalletIcon} alt={''} />
      </IconWrapper>
    )
  } else if (connector === fortmatic) {
    return (
      <IconWrapper size={16}>
        <img src={FortmaticIcon} alt={''} />
      </IconWrapper>
    )
  } else if (connector === portis) {
    return (
      <IconWrapper size={16}>
        <img src={PortisIcon} alt={''} />
      </IconWrapper>
    )
  }
  return null
}

// we want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a: TransactionDetails, b: TransactionDetails) {
  return b.addedTime - a.addedTime
}

const SOCK = (
  <span role="img" aria-label="has socks emoji" style={{ marginTop: -4, marginBottom: -4 }}>
    🧦
  </span>
)


const ShowDrapWidiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .show{
    padding-left: 0.2rem;
    width: 100%;
  height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p{
      margin: 0;
    }
  }
  .showpedding{
    padding-left: 0.1rem;
    width: 100%;
  height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p{
      margin: 0;
    }
    .pedding{
      display: flex;
      align-items: center;
      >div{
        margin-right: 0.01rem;
      }
    }
  }
`



function Web3StatusInner() {
  const { account, connector, error } = useWeb3React()

  const { ENSName } = useENSName(account ?? undefined)

  const allTransactions = useAllTransactions()

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])

  const pending = sortedRecentTransactions.filter(tx => !tx.receipt).map(tx => tx.hash)
  const hasPendingTransactions = !!pending.length
  const hasSocks = useHasSocks()
  const toggleWalletModal = useWalletModalToggle()
  const theme = useTheme()

  if (account) {
    return (
      <>
        <Web3StatusConnected id="web3-status-connected" pending={hasPendingTransactions}>
          <ShowSmall>{!hasPendingTransactions && connector && <StatusIcon connector={connector} />}</ShowSmall>
          {hasPendingTransactions ? (
            <RowBetween style={{ width: 110 }}>
              <Loader width="20px" stroke={theme.bg3} size="20px" padding="0" showText={false} />
              <Text style={{ marginLeft: '0px' }} color={theme.bg3}>
                {pending?.length} Pending
              </Text>
            </RowBetween>
          ) : (
            <ShowDrapWidiv>
              {hasSocks ? SOCK : null}
              <Text>{ENSName || shortenAddress1(account ?? '', 8)}</Text>

            </ShowDrapWidiv>
          )}
        </Web3StatusConnected>
      </>
    )
  } else if (error) {
    return (
      <Web3StatusError id="connect-error" onClick={toggleWalletModal} style={{ 'borderRadius': '24px' }}>
        {/* <NetworkIcon /> */}
        <Text>{error instanceof UnsupportedChainIdError ? 'Network Error' : 'Error'}</Text>
      </Web3StatusError>
    )
  } else {
    return (
      <Web3StatusConnect id="connect-wallet" onClick={toggleWalletModal} faded={!account} style={{ 'borderRadius': '24px' }}>
        <TYPE.black fontSize={16}>Connect Wallet</TYPE.black>
      </Web3StatusConnect>
      // <TYPE.white id="connect-wallet" onClick={toggleWalletModal} color="#a8a8a8" fontSize={16}>{t('Connect Wallet')}</TYPE.white>
    )
  }
}

export default function Web3Status() {
  const { active, account } = useWeb3React()
  const contextNetwork = useWeb3React(NetworkContextName)
  const { ENSName } = useENSName(account ?? undefined)
  const allTransactions = useAllTransactions()
  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])

  const pending = sortedRecentTransactions.filter(tx => !tx.receipt).map(tx => tx.hash)
  const confirmed = sortedRecentTransactions.filter(tx => tx.receipt).map(tx => tx.hash)
  if (!contextNetwork.active && !active) {
    return null
  }

  return (
    <>
      <Web3StatusInner />
      <WalletModal ENSName={ENSName ?? undefined} pendingTransactions={pending} confirmedTransactions={confirmed} />
    </>
  )
}
