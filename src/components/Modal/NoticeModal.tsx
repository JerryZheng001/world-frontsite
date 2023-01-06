import React from 'react'
import { TransactionErrorContent } from '../TransactionConfirmationModal'
import PcModal from './PcModal'

export default function NoticeModal({
  isOpen,
  onDismiss,
  message
}: {
  isOpen: boolean
  onDismiss: () => void
  message: string
}) {
  return (
    <PcModal isOpen={isOpen} minWidth={500} onDismiss={onDismiss} maxHeight={90}>
      <TransactionErrorContent title="Notice" message={message} onDismiss={onDismiss} />
    </PcModal>
  )
}
