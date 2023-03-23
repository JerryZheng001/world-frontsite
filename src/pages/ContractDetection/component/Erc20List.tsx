import React, {  } from "react";
// import Right from "../../../assets/images/contrastDetec/right@2x.png";
import ethPic from "../../../assets/images/contrastDetec/ethPic.png";
import bscPic from "../../../assets/images/contrastDetec/bscPic.png";
import safe from "../../../assets/images/safe.png";
import danger from "../../../assets/images/danger.png";
// import JSBI from "jsbi";
// import { Token } from "../../../constants/token";
// import { TokenAmount } from "../../../constants/token";
// // import TransactionConfirmationModal from '../../../components/TransactionConfirmationModal'
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
  // const token_address1 = localStorage.getItem('token_address') || '0xF43B79193c33dAc3530Db9307C54E4885df364de'
  // const contract1 = localStorage.getItem('contract') || '0x2E8aF2195a6Da7Dd8b8E89173E258B91E9712433'


  // const ERC20TokenAmount = new TokenAmount(
  //   new Token(
  //     56,
  //     "0xF43B79193c33dAc3530Db9307C54E4885df364de",
  //     18,
  //     "token",
  //     "token"
  //   ),
  //   JSBI.BigInt("0")
  // );


  

  // const Revokefun = (params: any) => {
  //   const { contract, token_address, token } = params || {};

  //   // triasApprovalCallback();
  // };

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
                    -- &nbsp;&nbsp;
                    {/* <div
                      className="btn"
                      onClick={() => {
                        Revokefun(item);
                      }}
                    >
                    
                      Revoke Access
                    </div> */}
                  </ItemDiv>
                </div>
              );
            })
          ) : (
            <div className="empty"> No Data ~</div>
          )}
        </div>
      </div>

      {/* <TransactionConfirmationModal
          isOpen={true}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onDismiss={()=>{}}
          hash={'1233333'}
          attemptingTxn={false}
          error={false}
          errorMsg={'123'}
        /> */}
    </ListDom>
  );
}
