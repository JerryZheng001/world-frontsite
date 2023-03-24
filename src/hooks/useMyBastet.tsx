// eslint-disable-next-line
import react from 'react'
import { useMyBastetContract,useTokenContract } from './useContract'
import { useTransactionAdder } from '../state/transactions/hooks'

import { TransactionResponse } from '@ethersproject/providers'
// import { useActiveWeb3React } from '../hooks'


// import { useSingleCallResult} from '../state/multicall/hooks'
export enum ClaimNFTCallbackState {
  INVALID,
  LOADING,
  VALID
}
// const summary = 'Stake NFT'


//testRecoord  quhui 

export  function userMintCallback(): {
  state: ClaimNFTCallbackState
  callback: undefined | ((userAddress:any,ids:any,amounts:any,feeType:any,needFee:any,nonce:any,msgHash:any,v:any,r:any,s:any) => Promise<string>)
  error: string | null
} {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contract = useMyBastetContract()
   // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { account } = useActiveWeb3React()
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const addTransaction = useTransactionAdder()

    
  return {
    state: ClaimNFTCallbackState.VALID,
    callback: async function onClaim(...args): Promise<string> {
      if (!contract) {
        throw new Error('Unexpected error. Contract error')
      }
      
      return contract
        .userBatchMint(...args)
        .then((response: TransactionResponse) => {

          addTransaction(response, {
            summary: `Claim NFT`
          })
          return response
        })

    },
    error: ''
  }
}


export  function userErc20(): {
  state: ClaimNFTCallbackState
  callback: ((amounts:any,spender:string) => Promise<string>)
  error: string | null
} {
  const tokenAddress = localStorage.getItem('tokenaddress') || ''
  const contract = useTokenContract(tokenAddress)
  const addTransaction = useTransactionAdder()

  return {
    state: ClaimNFTCallbackState.VALID,
    callback: async function unapprove(...args): Promise<string> {
       
  
      if (!contract) {
        throw new Error('Unexpected error. Contract error')
      }
      
      return contract
        .approve(...args)
        .then((response: TransactionResponse) => {

          addTransaction(response, {
            summary: `unapprove`
          })
          console.log(45665);
          
          return response
        })

    },
    error: ''
  }
}







