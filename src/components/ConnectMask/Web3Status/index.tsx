import React from 'react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components'
import { NetworkContextName } from '../../../constants'
import useENSName from '../../../hooks/useENSName'
import { useWalletModalToggle } from '../../../state/application/hooks'
import { shortenAddress } from '../../../utils'
import WalletModal from '../WalletModal'
import { TitleIcon } from '../../Header/NavHeader'
import useCopyClipboard from '../../../hooks/useCopyClipboard'
import { notification, message } from 'antd'
import copyIcon from '../../../assets/images/copy_address.png'
import Error_img from '../../../assets/image/error.png'

notification.config({
  placement: 'topRight',
  top: 100,
  duration: 3,
  closeIcon: <></>
})

const Web3StatusConnect = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

function CopyShowTips({ account, }: { account: string }) {
  const [isCopied, setCopied] = useCopyClipboard()
  const openNotification = () => {
    notification.info({
      icon: <></>,
      message: <span style={{ color: '#000', display: 'flex' }}>Copy successful!</span>,
      style: {
        width: 220,
        textAlign: 'center',
        background: '#fff',
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 600
      }
    })
    !isCopied && setCopied(account)
  }
  return (
    <p style={{ margin: '0 15px' }} onClick={openNotification}>
      <img src={copyIcon} style={{ width: 17, height: 17 }} alt="" />
    </p>
  )
}

function Web3StatusInner() {
  const { account,error, active } = useWeb3React()
  const { ENSName } = useENSName(account ?? undefined)
  const toggleWalletModal = useWalletModalToggle()
  const [accounts, setAccounts] = useState<any>('')


  if (accounts) {
    return (
      <Web3StatusConnect id="web3-status-connected">
        {ENSName || shortenAddress(accounts ?? '', 5)}
        {accounts && <CopyShowTips account={accounts} />}
      </Web3StatusConnect>
    )
  } else if (error) {
    return (
      <Web3StatusConnect id="connect-error" onClick={toggleWalletModal}>
        <TitleIcon src={Error_img} />
        <span style={{ color: '#EB423D' }}>{error instanceof UnsupportedChainIdError ? 'Please switch BSC' : 'NetWork'}</span>
      </Web3StatusConnect>
    )
  } else {
    return (
      <></>
    )
  }
}


export default function Web3Status() {
  const { active } = useWeb3React()
  const contextNetwork = useWeb3React(NetworkContextName)
  if (!contextNetwork.active && !active) {
    return null
  }

  return (
    <>
      <Web3StatusInner />
      <WalletModal />
    </>
  )
}
