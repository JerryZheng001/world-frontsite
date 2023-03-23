import { MaxUint256 } from "@ethersproject/constants";
import { TransactionResponse } from "@ethersproject/providers";
import { useCallback, useMemo } from "react";
import { useTokenAllowance } from "../data/Allowances";
import {
  useTransactionAdder,
  useHasPendingApproval,
} from "../state/transactions/hooks";
import { calculateGasMargin } from "../utils";
import { useTokenContract } from "./useContract";
import { useActiveWeb3React } from "./index";
import JSBI from "jsbi";
import { Token } from "../constants/token";
import { CurrencyAmount, TokenAmount } from "../constants/token/fractions";
import { ETHER } from "../constants/token";



export enum ApprovalState {
  UNKNOWN,
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveCallback(
  amountToApprove?: CurrencyAmount,
  spender?: string
): [() => Promise<void>] {
  //重新定义spender
  console.log(1233);
  

  // spender = localStorage.getItem("contract") || "";
  // const token_address = localStorage.getItem("token_address") || ;
  // const token_erc20 = localStorage.getItem("token_erc20") || {};
  //重新定义token

  const { account } = useActiveWeb3React();
  const token =
    amountToApprove instanceof TokenAmount ? amountToApprove.token : undefined;
  const currentAllowance = useTokenAllowance(
    token,
    account ?? undefined,
    spender
  );
  const pendingApproval = useHasPendingApproval(token?.address, spender);
  // check the current approval status
  const approvalState: ApprovalState = useMemo(() => {
    if (!amountToApprove || !spender) return ApprovalState.UNKNOWN;
    if (amountToApprove.currency === ETHER) return ApprovalState.APPROVED;
    // we might not have enough data to know whether or not we need to approve
    if (!currentAllowance) return ApprovalState.UNKNOWN;

    // amountToApprove will be defined if currentAllowance is
    return currentAllowance.lessThan(amountToApprove)
      ? pendingApproval
        ? ApprovalState.PENDING
        : ApprovalState.NOT_APPROVED
      : ApprovalState.APPROVED;
  }, [amountToApprove, currentAllowance, pendingApproval, spender]);
  const tokenContract = useTokenContract(token?.address);
  const addTransaction = useTransactionAdder();



  const approve = useCallback(
    
    async (): Promise<void> => {


      if (!token) {
        console.error("no token");
        return;
      }

      if (!tokenContract) {
        console.error("tokenContract is null");
        return;
      }

      if (!amountToApprove) {
        console.error("missing amount to approve");
        return;
      }

      if (!spender) {
        console.error("no spender");
        return;
      }

      // eslint-disable-next-line
      let useExact = false;
      const estimatedGas = await tokenContract.estimateGas
        .approve(spender, MaxUint256)
        .catch(() => {
          // general fallback for tokens who restrict approval amounts
          useExact = true;
          return tokenContract.estimateGas.approve(
            spender,
            amountToApprove.raw.toString()
          );
        });

      return tokenContract
        .approve(spender, 0, {
          gasLimit: calculateGasMargin(estimatedGas),
        })
        .then((response: TransactionResponse) => {
          addTransaction(response, {
            summary: "unApprove" + amountToApprove.currency.symbol,
            approval: { tokenAddress: token.address, spender: spender },
          });
        })
        .catch((error: Error) => {
          console.debug("Failed to unapprove token", error);
          throw error;
        });
    },
    [token, tokenContract, amountToApprove, spender, addTransaction]
  );

  return [ approve];
}
