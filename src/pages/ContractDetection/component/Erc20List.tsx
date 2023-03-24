import React, { useState, useEffect } from "react";
// import Right from "../../../assets/images/contrastDetec/right@2x.png";
import ethPic from "../../../assets/images/contrastDetec/ethPic.png";
import bscPic from "../../../assets/images/contrastDetec/bscPic.png";
import safe from "../../../assets/images/safe.png";
import danger from "../../../assets/images/danger.png";
import JSBI from "jsbi";
import { Token } from "../../../constants/token";
import { TokenAmount } from "../../../constants/token";
import { ApprovalState } from "../../../hooks/useApproveCallback";
import TransactionConfirmationModal from '../../../components/TransactionConfirmationModal'
// import { useActiveWeb3React } from '../../../hooks'

import {
  ListDom,
  ItemDiv,
  ItemheadDiv,
  ColorInner,
  ColorInner1,
} from "../styled";
import { shortenAddress } from "../../../utils/index";
import { useApproveCallback } from "../../../hooks/useCancleApprove";
interface ERC20TYPE {
  project: string;
  contract: string;
  chain: string;
  token: string;
  token_symbol: string;
  balance: string;
  approved_amount: string;
  advice: number;
  risk: number;
  malicious_behavior: [string];
}

export default function Listdom({ resultList }: { resultList: ERC20TYPE[] }) {
  // const history = useHistory();
  const [initLoad, setInitLoad] = useState(false);
  const [mathnum, setMathnum] = useState(1);
  const [erc20address, setErc20address] = useState(
    "0xF43B79193c33dAc3530Db9307C54E4885df364de"
  );
  const [erc20Token, setErc20Token] = useState("token");
  const [erc20contract, setErc20Contract] = useState(
    "0x2E8aF2195a6Da7Dd8b8E89173E258B91E9712433"
  );

  const [transactionModalOpen, setTransactionModalOpen] = useState(false)
  const [attemptingTxn, setAttemptingTxn] = useState(false)
  const [hash, setHash] = useState('')
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const transactionOnDismiss = () => {
    setError(false)
    setErrorMsg('')
    setTransactionModalOpen(false)
  }
  const ERC20TokenAmount = new TokenAmount(
    new Token(56, erc20address, 18, erc20Token, erc20Token),
    JSBI.BigInt("0")
  );
  // eslint-disable-next-line
  const [triasApprovalState, triasApprovalCallback] = useApproveCallback(
    ERC20TokenAmount,
    erc20contract
  );

  const Revokefun = (params: any) => {
    setMathnum(Math.random());
    setInitLoad(true);
    setErc20address(params?.token_address);
    setErc20Contract(params?.contract);
    setErc20Token(params?.token);
  };

  useEffect(() => {
    if (!initLoad) return;
    if (triasApprovalState === ApprovalState.APPROVED) {
      setTransactionModalOpen(true)
      setAttemptingTxn(true)
      triasApprovalCallback().then((res:any) => {
        if(res?.hash){
          setTransactionModalOpen(true)
          setAttemptingTxn(false)
          setHash(res?.hash)
        }
      }).catch(()=>{
        setAttemptingTxn(false)
        setError(true)
        setErrorMsg('auction commit err')
        console.error('auction commit err')
      });
    } else {
      return;
    }
    // eslint-disable-next-line
  }, [erc20address, erc20contract, mathnum]);

  return (
    <ListDom>
      <div className="listCom">
        <div className="headIntro">
          <ItemheadDiv
            width="320px"
            type={1}
            style={{
              borderRadius: "8px",
              paddingLeft: "14px",
              marginRight: "6px",
            }}
          >
            Approved Spender (Project/Contract）
          </ItemheadDiv>
          <ItemheadDiv width="74px" type={3} className="leftborder">
            Chain
          </ItemheadDiv>
          <ItemheadDiv width="220px" type={1}>
            Token
          </ItemheadDiv>
          <ItemheadDiv width="141px" type={2}>
            Balance
          </ItemheadDiv>
          <ItemheadDiv width="160px" type={2}>
            Approved Amount
          </ItemheadDiv>
          <ItemheadDiv width="100px" type={2}>
            advice
          </ItemheadDiv>
          <ItemheadDiv width="200px" type={2} style={{ paddingRight: "14px" }}>
            opera
          </ItemheadDiv>
        </div>
        <div className="container">
          {resultList.length !== 0 ? (
            resultList.map((item, index) => {
              return (
                <div className="listItems" key={index}>
                  <ItemDiv width="326px" type={1} className="fistinner">
                    <div className="address">
                      <div className="item">
                        <img src={item?.advice > 0 ? danger : safe} alt="" />
                      </div>
                      {item?.project !== null ? (
                        <div className="item">
                          <span>{item?.project}</span>
                          <span>{shortenAddress(item?.contract)}</span>
                        </div>
                      ) : (
                        <div className="item">
                          <p
                            className="noproject"
                            style={{ lineHeight: "60px" }}
                          >
                            {shortenAddress(item?.contract)}
                          </p>
                        </div>
                      )}
                    </div>
                    {item?.malicious_behavior.length > 0 && (
                      <div className="txt_tips">
                        <span></span>
                        {item?.malicious_behavior[0]}
                      </div>
                    )}
                  </ItemDiv>
                  <div></div>
                  <ItemDiv width="74px" type={1}>
                    <img
                      src={item?.chain === "56" ? bscPic : ethPic}
                      alt=""
                      className="chainImg"
                    />
                  </ItemDiv>
                  <ItemDiv width="220px" type={1} className="chainText">
                    <span></span>
                    <span>{item?.token} </span>
                    <span>{item?.token_symbol}</span>
                    {item?.token && (
                      <div className="txt_tips">
                        <span></span>
                        {item?.token}&nbsp;{item?.token_symbol}
                      </div>
                    )}
                  </ItemDiv>
                  <ItemDiv width="140px" type={2} className="chainBalance">
                    <span className="itemstyle">{item?.balance}</span>{" "}
                    <span>{item?.token_symbol}</span>
                    {item?.balance && (
                      <div className="txt_tips">
                        <span></span>
                        {item?.balance}&nbsp;&nbsp;{item?.token_symbol}
                      </div>
                    )}
                  </ItemDiv>
                  <ItemDiv width="160px" type={2} className="chainApprove">
                    <ColorInner1
                      type={item?.approved_amount}
                      className="approve"
                    >
                      {item?.approved_amount}
                    </ColorInner1>
                    {item?.approved_amount && (
                      <div className="txt_tips">
                        <span></span>
                        {item?.approved_amount}
                      </div>
                    )}
                  </ItemDiv>
                  <ItemDiv width="100px" type={2}>
                    <ColorInner type={item?.advice}>
                      {item?.advice > 0 ? "Revoke" : "Keep Vuke"}
                    </ColorInner>
                  </ItemDiv>
                  <ItemDiv width="202px" type={2}>
                    <div
                      className="btn"
                      onClick={() => {
                        Revokefun(item);
                      }}
                    >
                      Revoke Access
                    </div>
                  </ItemDiv>
                </div>
              );
            })
          ) : (
            <div className="empty"> No Data ~</div>
          )}
        </div>
      </div>

      <TransactionConfirmationModal
          isOpen={transactionModalOpen}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onDismiss={transactionOnDismiss}
          hash={hash}
          attemptingTxn={attemptingTxn}
          error={error}
          errorMsg={errorMsg}
        />
    </ListDom>
  );
}
