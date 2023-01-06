import React from 'react'
import styled from 'styled-components'
import PcModal from '../Modal/PcModal'
import { Text } from 'rebass'
import { CloseIcon, HideSmall, ShowSmall, TYPE } from '../../theme'
import { RowBetween, RowFixed, RowFlat } from '../Row'
import { AutoColumn } from '../Column'
import { useActiveWeb3React } from '../../hooks'
import useTheme from '../../hooks/useTheme'
import { LoadingView, SubmittedView } from '../ModalViews'
import { ChainId } from '../../constants/chain'
import { AlertCircle } from 'react-feather'

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
  background: ${({ theme }) => theme.bg3};
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
  width: 77px;
  height: 32px;
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-align: center;
  line-height: 30px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.text3};
    color: ${({ theme }) => theme.text3};
  }
`

const Close = styled(CloseIcon)`
  color: ${({ theme }) => theme.text2};
`
function ConfirmationPendingContent({ onDismiss, pendingText = '' }: { onDismiss: () => void; pendingText: string }) {
  const theme = useTheme()
  return (
    <>
      <LoadingView onDismiss={onDismiss}>
        <AutoColumn gap="12px" justify={'center'}>
          <Text fontWeight={400} fontSize={18}>
            Waiting For Confirmation
          </Text> 
          <AutoColumn gap="12px" justify={'center'}>
            <Text fontWeight={400} fontSize={14} textAlign="center" color={theme.text2}>
              {pendingText}
            </Text>
          </AutoColumn>
        </AutoColumn>
      </LoadingView>
    </>
  )
}

function TransactionSubmittedContent({
  onDismiss,
  chainId,
  hash
}: {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
}) {
  return (
    <>
      <SubmittedView onDismiss={onDismiss} hash={hash}>
        <Text fontWeight={400} fontSize={18}>
          Transaction Submitted
        </Text>
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
          <Text fontWeight={500} fontSize={18}>
            {title}
          </Text>
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
      <Section>
        <RowBetween style={{ height: 'fit-content' }}>
          <RowFixed>
            <AlertCircle style={{ marginRight: 10 }} />
            <Text fontWeight={700} fontSize={16}>
              {title || 'Prompt information'}
            </Text>
          </RowFixed>
          <Close onClick={onDismiss} />
        </RowBetween>
        <ShowSmall>
          <Text fontWeight={400} fontSize={16}>
            {message}
          </Text>
        </ShowSmall>
        <AutoColumn style={{ padding: '1rem 0 2rem' }} gap="24px">
          <HideSmall>
            <TYPE.darkGray fontWeight={400} fontSize={16} style={{ width: '85%' }}>
              {message}
            </TYPE.darkGray>
          </HideSmall>
        </AutoColumn>
        <RowFlat style={{ justifyContent: 'flex-end' }}>
          <CloseBtn onClick={onDismiss}>OK</CloseBtn>
        </RowFlat>
      </Section>
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
  submittedContent
}: ConfirmationModalProps & { error?: boolean; errorMsg?: string }) {
  const { chainId } = useActiveWeb3React()

  if (!chainId) return null

  // confirmation screen
  return (
    <PcModal isOpen={isOpen} minWidth={500} onDismiss={onDismiss} maxHeight={90}>
      {attemptingTxn ? (
        <ConfirmationPendingContent onDismiss={onDismiss} pendingText={pendingText || ''} />
      ) : error ? (
        <TransactionErrorContent
          message={errorMsg ?? 'Failed!  Please try again.'}
          onDismiss={onDismiss}
        ></TransactionErrorContent>
      ) : hash ? (
        <>
          {submittedContent ? (
            submittedContent()
          ) : (
            <TransactionSubmittedContent chainId={chainId} hash={hash} onDismiss={onDismiss} />
          )}{' '}
        </>
      ) : (
        content && content()
      )}
    </PcModal>
  )
}
