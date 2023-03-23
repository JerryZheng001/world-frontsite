import React from 'react'
import { useActiveWeb3React } from '../../hooks'
// import {  ColumnCenter } from '../Column'
import styled from 'styled-components'
// import { ReactComponent as CheckCircle } from '../../assets/svg/transaction_submitted.svg'
// import { ReactComponent as CrossCircle } from '../../assets/svg/transaction_error.svg'
// import successImg from '../../assets/img/circle.png'
import { getEtherscanLink } from '../../utils'
import { ExternalLink } from '../../theme/components'
// import { ButtonPrimary } from 'components/Button'

const ConfirmOrLoadingWrapper = styled.div`
  width: 100%;
  padding: 40px;
  background: #22262f;
  border-radius: 16px;
  backdrop-filter: blur(29px);
  .text {
    font-size: 14px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    padding-top: 16px;
    text-align: center;
  }
  .bscText {
    font-size: 14px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    padding: 24px 10px 0px 10px;
    text-align: center;
    a {
      color: #ffffff;
    }
  }
  .ok {
    width: 146px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #353945;
    margin: 32px auto 0;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      background: #fff;
      border: none;
      color: #000;
    }
  }
`

// const ConfirmedIcon = styled(ColumnCenter)`
//   padding: 0 0 28px;
// `

export function LoadingView({ children, onDismiss }: { children: any; onDismiss: () => void }) {
  return (
    <ConfirmOrLoadingWrapper>
      {/* <RowBetween>
        <div />
        <CloseIcon onClick={onDismiss} />
      </RowBetween> */}
      {/* <ConfirmedIcon>
        <CustomLightSpinner src={Circle} alt="loader" size={'45px'} />
      </ConfirmedIcon> */}
      <div className="content">
        {children}
        <div className="text">Confirm this transaction in your wallet</div>
      </div>
    </ConfirmOrLoadingWrapper>
  )
}

export function SubmittedView({
  children,
  onDismiss,
  hash,
  hideLink,
  isError
}: {
  children: any
  onDismiss: () => void
  hash: string | undefined
  hideLink?: boolean
  isError?: boolean
}) {
  const { chainId } = useActiveWeb3React()

  return (
    <ConfirmOrLoadingWrapper>
      {children}
      <div className="bscText">
        Transaction has been submitted, please &nbsp;
        {!hideLink && !isError && chainId && hash && (
          <ExternalLink href={getEtherscanLink(chainId, hash, 'transaction')}>check on BSCscan</ExternalLink>
        )}
      </div>
      <div className="ok" onClick={onDismiss}>
        OK
      </div>
      {/* <ConfirmedIcon>
        {isError ? <CrossCircle /> : <img src={successImg} alt='adf' style={{ width: '32px', height: '32px' }} />}
      </ConfirmedIcon>
      <AutoColumn gap="32px" justify={'center'}>
        {children}
        {!hideLink && !isError && chainId && hash && (
          <ExternalLink href={getEtherscanLink(chainId, hash, 'transaction')} style={{ color: theme.primary1, marginTop: '-20px' }} >
            <TYPE.main fontWeight={400} fontSize={14} color={theme.primary1}>
              View on BSCscan
            </TYPE.main>
          </ExternalLink>
        )}
        <ButtonPrimary onClick={onDismiss} style={{ marginTop: '-10px', borderRadius: '16px', border: '1px solid rgba(255 , 255, 255,0.12)', width: '85px', background: '#151C2E' }}>
          <TYPE.main fontWeight={500} fontSize={16} color={theme.text55} >
            Close
          </TYPE.main>
        </ButtonPrimary>
      </AutoColumn> */}
    </ConfirmOrLoadingWrapper>
  )
}
