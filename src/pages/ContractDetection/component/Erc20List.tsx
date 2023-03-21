import React, {  } from "react";
// import Right from "../../../assets/images/contrastDetec/right@2x.png";
import ethPic from "../../../assets/images/contrastDetec/ethPic.png";
import bscPic from "../../../assets/images/contrastDetec/bscPic.png";
import safe from "../../../assets/images/safe.png";
import danger from "../../../assets/images/danger.png";
// import JSBI from "jsbi";
// import { Token } from "../../../constants/token";
// import { TokenAmount } from "../../../constants/token";
import {
  ListDom,
  ItemDiv,
  ItemheadDiv,
  ColorInner,
  ColorInner1,
} from "../styled";
import { shortenAddress } from "../../../utils/index";
// import {
//   ApprovalState,
//   useApproveCallback,
// } from "../../../hooks/useCancleApprove";
// import { useWalletModalToggle } from "../../../state/application/hooks";
// import { useHistory } from "react-router-dom";
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
interface BtnProp {
  disabled?: boolean;
  text?: JSX.Element | string;
  event?: () => void;
}


export default function Listdom({ resultList }: { resultList: ERC20TYPE[] }) {
  // const history = useHistory();
  // const toggleWalletModal = useWalletModalToggle();
  // const ERC20TokenAmount = new TokenAmount(
  //   new Token(
  //     97,
  //     "0xF43B79193c33dAc3530Db9307C54E4885df364de",
  //     18,
  //     "TRIAS",
  //     "TRIAS"
  //   ),
  //   JSBI.BigInt('0')
  // );
  // const [triasApprovalState, triasApprovalCallback] = useApproveCallback(
  //   ERC20TokenAmount,
  //   "0x2E8aF2195a6Da7Dd8b8E89173E258B91E9712433"
  // );
  // const revokefun = () => {
  //   const rst: BtnProp = {
  //     text: "Convert",
  //     event: () => ({}),
  //     disabled: true,
  //   };
  //   console.log(123333, triasApprovalState);
  //   if (triasApprovalState !== ApprovalState.APPROVED) {
  //     if (triasApprovalState === ApprovalState.NOT_APPROVED) {
  //       rst.event = triasApprovalCallback;
  //       rst.disabled = false;
  //       return rst;
  //     }
  //     if (triasApprovalState === ApprovalState.PENDING) {
  //       rst.text = <>Approve</>;
  //       return rst;
  //     }
  //     if (triasApprovalState === ApprovalState.UNKNOWN) {
  //       rst.text = <>Please refresh</>;
  //       return rst;
  //     }
  //   }else {
  //     console.log(787878);
      
  //     triasApprovalCallback()
  //   }
  // };

  // const revokeButton: any = useMemo(() => {
  //   console.log(123333,triasApprovalState);

  //   const rst: BtnProp = {
  //     text: "Convert",
  //     event: () => ({}),
  //     disabled: true,
  //   };

  //   if (triasApprovalState !== ApprovalState.APPROVED) {
  //     if (triasApprovalState === ApprovalState.NOT_APPROVED) {
  //       rst.text = "Approve";
  //       rst.event = triasApprovalCallback;
  //       rst.disabled = false;
  //       return rst;
  //     }
  //     if (triasApprovalState === ApprovalState.PENDING) {
  //       rst.text = <>Approve</>;
  //       return rst;
  //     }
  //     if (triasApprovalState === ApprovalState.UNKNOWN) {
  //       rst.text = <>Please refresh</>;
  //       return rst;
  //     }
  //   }
  // }, [ triasApprovalCallback, triasApprovalState]);

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
                    {/* -- &nbsp;&nbsp; */}
                    <div className="btn">
                      --
                      {/* Revoke Access */}
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
    </ListDom>
  );
}
