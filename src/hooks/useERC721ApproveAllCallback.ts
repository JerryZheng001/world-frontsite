import { TransactionResponse } from '@ethersproject/providers'
import { useCallback, useMemo } from 'react'
import { useHasPendingApproval, useTransactionAdder } from '../state/transactions/hooks'
import { calculateGasMargin } from '../utils'
import { Contract } from '@ethersproject/contracts'
import { useSingleCallResult } from '../state/multicall/hooks'
import { ApprovalState } from './useApproveCallback'
import { useActiveWeb3React } from '.'

function useGetApproved(contract: Contract | null, spender: string) {
  const { account } = useActiveWeb3React()
  const res = useSingleCallResult(account ? contract : null, 'isApprovedForAll', [account || '', spender])
  return useMemo(() => {
    if (res.loading || !res.result) return undefined
    return res.result[0]
  }, [res.loading, res.result])
}

export function useERC721ApproveAllCallback(
  contract: Contract | null,
  spender: string
): [ApprovalState, () => Promise<void>] {
  // const { account } = useActiveWeb3React()
  const isApproved = useGetApproved(contract, spender)
  const pendingApproval = useHasPendingApproval(contract?.address, spender)
  console.log(isApproved,123333);
  
  // check the current approval status
  const approvalState: ApprovalState = useMemo(() => {
    // if (!spender) return ApprovalState.UNKNOWN
    // we might not have enough data to know whether or not we need to approve
    if (isApproved) return ApprovalState.APPROVED
    if (pendingApproval) return ApprovalState.PENDING
    if (isApproved === undefined) return ApprovalState.UNKNOWN
    return ApprovalState.NOT_APPROVED
  }, [isApproved, pendingApproval])

  const addTransaction = useTransactionAdder()

  const approve = useCallback(async (): Promise<void> => {
    // if (approvalState !== ApprovalState.NOT_APPROVED) {
    //   console.error('approve was called unnecessarily')
    //   return
    // }

    if (!contract) {
      console.error('Contract is null')
      return
    }

    if (!spender) {
      console.error('no spender')
      return
    }

    const estimatedGas = await contract.estimateGas.setApprovalForAll(spender, false).catch((error: Error) => {
      console.debug('Failed to approve nft', error)
      throw error
    })

    return contract
      .setApprovalForAll(spender, false, {
        gasLimit: calculateGasMargin(estimatedGas)
      })
      .then((response: TransactionResponse) => {
        addTransaction(response, {
          summary: 'UnApprove NFT',
          approval: { tokenAddress: contract.address, spender }
        })
        return response
      })
      .catch((error: Error) => {
        console.debug('Failed to approve nft', error)
        throw error
      })
  }, [ contract, spender, addTransaction])

  return [approvalState, approve]
}
