import React from "react";
// import Right from "../../../assets/images/contrastDetec/right@2x.png";
import ethPic from "../../../assets/images/contrastDetec/ethPic.png";
import bscPic from "../../../assets/images/contrastDetec/bscPic.png";
import safe from "../../../assets/images/safe.png";
import danger from "../../../assets/images/danger.png";
import {
  ListDom,
  ItemDiv,
  ItemheadDiv,
  ColorInner,
} from "../styled";
import { shortenAddress } from "../../../utils/index";
// import { useHistory } from "react-router-dom";
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

export default function listdom({ data }: { data: ERC721TYPE[] }) {
  // const history = useHistory();

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
                  <ItemDiv width="251px" type={2} >
                    -- &nbsp;&nbsp;
                    {/* <div className="btn1"> Revoke Access</div> */}
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
