import { AbstractConnector } from '@web3-react/abstract-connector'
import React from 'react'
import styled from 'styled-components'
// import { RowBetween } from '../../Row'
// import { ButtonPrimary } from '../../Button'
import { ReactComponent as CrossCircle } from '../../../assets/svg/cross_circle.svg'
import { AutoColumn } from '../../Column'
import Loader from '../../Loader'

const PendingSection = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  & > * {
    width: 100%;
  }
`
const LoadingMessage = styled.div`
  align-items: center;
  justify-content: flex-start;
  border-radius: 12px;
  margin-bottom: 20px;
  border: 1px solid #000;
  & > * {
    padding: 1rem;
  }
`

const LoadingWrapper = styled.div`
  align-items: center;
  justify-content: center;
`
const ChangeText = styled.div`
  font-size: 14px;
  font-family: MPLUS1-SemiBold, MPLUS1;
  font-weight: 600;
  color: #000;
`

const StyledLoader = styled(Loader)`
  margin-right: 1rem;
`


export default function PendingView({
  connector,
  error = false,
  setPendingError,
  tryActivation,
  children
}: {
  children: React.ReactNode
  connector?: AbstractConnector
  error?: boolean
  setPendingError: (error: boolean) => void
  tryActivation: (connector: AbstractConnector) => void
}) {
  // const isMetamask = window?.ethereum?.isMetaMask

  return (
    <AutoColumn gap="32px">
      <PendingSection>
        {error ? (
          <AutoColumn justify="center" gap="16px">
            <CrossCircle />
            <ChangeText> Error connecting. Please try again</ChangeText>
          </AutoColumn>
        ) : (
          <>
            <LoadingMessage>
                <LoadingWrapper>
                  <StyledLoader />
                <ChangeText>Initializing...</ChangeText>
              </LoadingWrapper>
            </LoadingMessage>
          </>
        )}
      </PendingSection>
      {error && (
        <div>
          {children}
          {error && (
            <div
              onClick={() => {
                setPendingError(false)
                connector && tryActivation(connector)
              }}
            >
              Try Again
            </div>
          )}
        </div>
      )}
    </AutoColumn>
  )
}
