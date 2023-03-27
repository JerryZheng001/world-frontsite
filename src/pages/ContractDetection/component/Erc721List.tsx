import React, { useEffect, useState } from "react";
import ethPic from "../../../assets/images/contrastDetec/ethPic.png";
import bscPic from "../../../assets/images/contrastDetec/bscPic.png";
import safe from "../../../assets/images/safe.png";
import danger from "../../../assets/images/danger.png";
import { ListDom, ItemDiv, ItemheadDiv, ColorInner } from "../styled";
import { shortenAddress } from "../../../utils/index";
import { useERC721ApproveAllCallback } from "../../../hooks/useERC721ApproveAllCallback";
import { useERC721Contract } from "../../../hooks/useContract";
import { ApprovalState } from "../../../hooks/useApproveCallback";
import TransactionConfirmationModal from "../../../components/TransactionConfirmationModal";
interface ERC721TYPE {
  project: string;
  contract: string;
  chain: string;
  nft_name: string;
  nft_symbol: string;
  balance: string;
  approved_amount: number;
  advice: number;
  risk: number;
  malicious_behavior: [string];
}

export default function Listdom({ data }: { data: ERC721TYPE[] }) {
  const [initLoad, setInitLoad] = useState(false);
  const [mathnum, setMathnum] = useState(1);
  const [erc721address, setErc721address] = useState(
    "0x89ec61846E20e45A23CFC2a4000F4a74e406b52e"
  );
  const [erc721contract, setErc721Contract] = useState(
    "0xF568dB7Fd1A4afd826A6500134aFB385D7562E8b"
  );
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);
  const [attemptingTxn, setAttemptingTxn] = useState(false);
  const [hash, setHash] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const transactionOnDismiss = () => {
    setError(false);
    setErrorMsg("");
    setTransactionModalOpen(false);
  };

  const Transaction721Contract = useERC721Contract(erc721address);
  // eslint-disable-next-line
  const [approvalState, approvalCallback] = useERC721ApproveAllCallback(
    Transaction721Contract,
    erc721contract
  );
  const OnRevoke = (params: any) => {
    setMathnum(Math.random());
    setInitLoad(true);
    setErc721address(params?.nft_address)
    setErc721Contract(params?.contract)
  };

  useEffect(() => {
    if (!initLoad && approvalState === 0) return;
    console.log(approvalState,ApprovalState.APPROVED,'erc721')
    if (approvalState === ApprovalState.APPROVED) {
      setTransactionModalOpen(true);
      setAttemptingTxn(true);
      approvalCallback()
        .then((res: any) => {
          if (res?.hash) {
            setTransactionModalOpen(true);
            setAttemptingTxn(false);
            setHash(res?.hash);
          }
        })
        .catch(() => {
          setAttemptingTxn(false);
          setError(true);
          setErrorMsg("you are rejected");
          console.error("you are rejected");
        });
    } else {
      return;
    }
    // eslint-disable-next-line
  }, [erc721address,erc721contract,mathnum,approvalState]);

  return (
    <ListDom>
      <div className="listCom">
        <div className="headIntro">
          <ItemheadDiv
            width="325px"
            type={1}
            style={{
              borderRadius: "8px",
              paddingLeft: "14px",
              marginRight: "6px",
            }}
          >
            Approved Spender (Project/Contract）
          </ItemheadDiv>
          <ItemheadDiv
            width="120px"
            type={1}
            style={{ paddingLeft: "10px" }}
            className="leftborder"
          >
            Chain
          </ItemheadDiv>
          <ItemheadDiv width="240px" type={1}>
            NFT
          </ItemheadDiv>

          <ItemheadDiv width="161px" type={2}>
            Approved Amount
          </ItemheadDiv>
          <ItemheadDiv width="120px" type={2}>
            advice
          </ItemheadDiv>
          <ItemheadDiv width="251px" type={2} style={{ paddingRight: "14px" }}>
            opera
          </ItemheadDiv>
        </div>
        <div className="container">
          {data.length !== 0 ? (
            data.map((item, index) => {
              return (
                <div className="listItems" key={index}>
                  <ItemDiv width="340px" type={1} className="fistinner">
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
                  <ItemDiv width="120px" type={1}>
                    <img
                      src={item?.chain === "56" ? bscPic : ethPic}
                      alt=""
                      className="chainImg"
                    />
                  </ItemDiv>
                  <ItemDiv width="240px" type={1} className="chainText">
                    <span></span>
                    <span>{item?.nft_name} </span>
                    <span>{item?.nft_symbol}</span>
                    {item?.nft_name && (
                      <div className="txt_tips">
                        <span></span>
                        {item?.nft_name} &nbsp;&nbsp;
                        {item?.nft_symbol}
                      </div>
                    )}
                  </ItemDiv>
                  <ItemDiv width="161px" type={2}>
                    <ColorInner type={item?.approved_amount}>
                      {item?.approved_amount === 0 ? "single" : "approval all"}
                    </ColorInner>
                  </ItemDiv>
                  <ItemDiv width="120px" type={2}>
                    <ColorInner type={item?.advice}>
                      {item?.advice > 0 ? "Revoke" : "Keep Vuke"}
                    </ColorInner>
                  </ItemDiv>
                  <ItemDiv width="251px" type={2}>
                    <div
                      className="btn1"
                      onClick={() => {
                        OnRevoke(item);
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
