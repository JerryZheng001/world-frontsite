import React from 'react'
import styled from 'styled-components'
import PcModal from '../Modal/PcModal'
// import { Text } from 'rebass'
import { CloseIcon } from '../../theme'
import { RowBetween } from '../Row'
import { AutoColumn } from '../Column'
import { useActiveWeb3React } from '../../hooks'
import { LoadingView, SubmittedView } from '../ModalViews'
import { ChainId } from '../../constants/chain'
import Loader from '../Loader'

const Wrapper = styled.div`
  width: 384px;
  min-height: 252px;
  background: #22262f;
  border-radius: 16px;
  backdrop-filter: blur(29px);
  padding: 40px 70px;
  .title {
    font-size: 24px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #ffffff;
    line-height: 32px;
    text-align: center;
  }
  .text {
    padding-top: 24px;
    font-size: 14px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    text-align: center;
  }
`
const Section = styled(AutoColumn)`
  padding: 24px;
`

const BottomSection = styled(Section)`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0 3rem 2rem;
`
const CloseBtn = styled.div`
  width: 146px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #353945;
  font-size: 14px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  margin: 32px auto 0;
  cursor: pointer;
  &:hover {
    border: none;
    background: #fff;
    color: #000;
  }
`

const TitleText = styled.div<{ font?: number }>`
  height: 32px;
  font-size: 24px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  line-height: 32px;
  text-align: center;
`
const TitleText1 = styled.div<{ font?: number }>`
  font-size: 14px;
    font-family: Poppins-Regular,Poppins;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    padding: 24px 10px 0px 10px;
    text-align: center;
`

const Close = styled(CloseIcon)`
  color: ${({ theme }) => theme.text2};
`
function ConfirmationPendingContent({ onDismiss, pendingText = '' }: { onDismiss: () => void; pendingText: string }) {
  return (
    <>
      <LoadingView onDismiss={onDismiss}>
        <Loader />
      </LoadingView>
    </>
  )
}

function TransactionSubmittedContent({
  onDismiss,
  chainId,
  hash,
  type
}: {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
  type?:string
}) {
  return (
    <>
      <SubmittedView onDismiss={onDismiss} hash={hash}>
        <TitleText>submitted</TitleText>
        {
          type==='token'&& <TitleText1 >The GEON you converted will be issued to your address after the end of this round</TitleText1>
        }
      </SubmittedView>
    </>
  )
}

export function ConfirmationModalContent({
  title,
  bottomContent,
  onDismiss,
  topContent
}: {
  title: string
  onDismiss: () => void
  topContent: () => React.ReactNode
  bottomContent: () => React.ReactNode
}) {
  return (
    <Wrapper>
      <Section>
        <RowBetween>
          <div></div>
          <TitleText font={18}>{title}</TitleText>
          <Close onClick={onDismiss} />
        </RowBetween>
        {topContent()}
      </Section>
      <BottomSection gap="8px">{bottomContent()}</BottomSection>
    </Wrapper>
  )
}

export function TransactionErrorContent({
  message,
  onDismiss,
  title
}: {
  message: string
  onDismiss: () => void
  title?: string
}) {
  return (
    <Wrapper>
      <div className="title">{title || 'Prompt information'}</div>
      <div className="text">{message}</div>
      <CloseBtn onClick={onDismiss}>OK</CloseBtn>
      
    </Wrapper>
  )
}

interface ConfirmationModalProps {
  isOpen: boolean
  onDismiss: () => void
  hash: string | undefined
  content?: () => React.ReactNode
  attemptingTxn: boolean
  pendingText?: string
  submittedContent?: () => React.ReactNode
}

export default function TransactionConfirmationModal({
  isOpen,
  onDismiss,
  attemptingTxn,
  hash,
  pendingText,
  content,
  error,
  errorMsg,
  type,
  submittedContent
}: ConfirmationModalProps & { error?: boolean; errorMsg?: string;type?:string }) {
  const { chainId } = useActiveWeb3React()

  if (!chainId) return null

  // confirmation screen
  return (
    <PcModal isOpen={isOpen} minWidth={384} maxWidth={384} onDismiss={onDismiss} minHeight={214}>
      {attemptingTxn ? (
        <ConfirmationPendingContent onDismiss={onDismiss} pendingText={pendingText || ''} />
      ) : error ? (
        <TransactionErrorContent
          message={errorMsg ?? 'Failed!  Please try again.'}
          onDismiss={onDismiss}
        ></TransactionErrorContent>
      ) : hash ? (
        <>
          <TransactionSubmittedContent chainId={chainId} hash={hash} onDismiss={onDismiss} type={type}/>

          {/* {submittedContent ? (
            submittedContent()
          ) : (
            <TransactionSubmittedContent chainId={chainId} hash={hash} onDismiss={onDismiss} />
          )}{' '} */}
        </>
      ) : (
        content && content()
      )}
    </PcModal>
  )
}
