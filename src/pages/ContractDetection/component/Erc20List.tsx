import React, { useEffect } from "react";
import Right from "../../../assets/images/contrastDetec/right@2x.png";
import ethPic from "../../../assets/images/contrastDetec/ethPic.png";
import bscPic from "../../../assets/images/contrastDetec/bscPic.png";
import safe from "../../../assets/images/safe.png";
import danger from "../../../assets/images/danger.png";


import { ListDom, ItemDiv, ItemheadDiv, ColorInner } from "../styled";
import { shortenAddress } from "../../../utils/index";
// import { useHistory } from "react-router-dom";
interface Echartechdata {
  project: string;
  contract: string;
  chain: string;
  token: string;
  token_symbol: string;
  balance: string;
  approved_amount: string;
  advice: number;
  risk: number;
  malicious_behavior: [];
}

export default function listdom({
  resultList,
}: {
  resultList: Echartechdata[];
}) {
  // const history = useHistory();
  return (
    <ListDom>
      <div className="listCom">
        <div className="headIntro">
          <ItemheadDiv
            width="326px"
            type={1}
            style={{
              borderRadius: "8px",
              paddingLeft: "14px",
              marginRight: "6px",
            }}
          >
            Approved Spender (Project/Contract）
          </ItemheadDiv>
          <ItemheadDiv width="74px" type={3}>
            Chain
          </ItemheadDiv>
          <ItemheadDiv width="220px" type={1}>
            Token
          </ItemheadDiv>
          <ItemheadDiv width="140px" type={2}>
            Balance
          </ItemheadDiv>
          <ItemheadDiv width="160px" type={2}>
            Approved Amount
          </ItemheadDiv>
          <ItemheadDiv width="100px" type={2}>
            Aadvice
          </ItemheadDiv>
          <ItemheadDiv width="204px" type={2} style={{ paddingRight: "14px" }}>
            opera
          </ItemheadDiv>
        </div>
        <div className="container">
          {resultList.length !== 0 ? (
            resultList.map((item, index) => {
              return (
                <div className="listItems" key={index}>
                  <ItemDiv width="326px" type={1}>
                    <div className="address">
                      <div className="item">
                        <img src={item.advice > 0 ? danger : safe} alt="" />
                      </div>
                      {item?.project === null ? (
                        <div className="item">
                          <span>{item?.project}</span>
                          <span>{shortenAddress(item.contract)}</span>
                        </div>
                      ) : (
                        <div className="item">
                          <p className="noproject">
                            {shortenAddress(item.contract)}
                          </p>
                        </div>
                      )}
                    </div>
                  </ItemDiv>
                  <ItemDiv width="74px" type={1}>
                    <img
                      src={item?.chain === "56" ? bscPic : ethPic}
                      alt=""
                      className="chainImg"
                    />
                  </ItemDiv>
                  <ItemDiv width="220px" type={1} className="chainText">
                    <span>{item?.token} </span>{" "}
                    <span>{item?.token_symbol}</span>
                  </ItemDiv>
                  <ItemDiv width="140px" type={2} className="chainBalance">
                    {item?.balance} {item?.token_symbol}
                    {/* {Math.floor(Number(item.score) * 100) >= 50
                      ? ShowText[0]
                      : Math.floor(Number(item.score) * 100) >= 30
                      ? ShowText[1]
                      : Math.floor(Number(item.score) * 100) >= 10
                      ? ShowText[2]
                      : Math.floor(Number(item.score) * 100) >= 5
                      ? ShowText[3]
                      : ShowText[4]} */}
                  </ItemDiv>
                  <ItemDiv width="160px" type={2}>
                    <ColorInner type={item?.advice}>
                      {item?.approved_amount}
                    </ColorInner>
                  </ItemDiv>
                  <ItemDiv width="100px" type={2}>
                    <ColorInner type={item?.advice}>{item?.advice}</ColorInner>
                  </ItemDiv>
                  <ItemDiv width="204px" type={1}>
                    <div className="btn"> Revoke Access</div>
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
