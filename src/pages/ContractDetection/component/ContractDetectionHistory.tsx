import React, { useEffect, useState } from "react";
import { HistoryContainer, HistoryDom } from "../styled";
import { Colorsecurity } from "../stylePro";

import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import Erc20Listdom from "../component/Erc20List";
import Erc721Listdom from "../component/Erc721List";
import Icon_green from "../../../assets/svg/icon_green.svg";
import Icon_red from "../../../assets/svg/icon_red.svg";
import Icon_yellow from "../../../assets/svg/icon_yellow.svg";
import { Tabs } from "antd";
import { getList } from "../../../utils/fetch/detect";
const { TabPane } = Tabs;

interface ResultList {
  id: number;
  file_name: string;
  contract_address: string;
  network: string;
  score?: any;
  project: string;
  contract: string;
  chain: string;
  token: string;
  token_symbol: string;
  balance: string;
  approved_amount: any;
  advice: number;
  risk: number;
  malicious_behavior: [string];
  nft_name: string;
  nft_symbol: string;
}
const showsecurity = [
  "currently no security risks",
  "Some security risks",
  "significant security risks",
];

// const ShowText = [
//   "Significant Risk",
//   "High Risk",
//   "Medium Risk",
//   "Some Risk",
//   "Excellent",
// ];
export default function ContractDetectionHistory(): JSX.Element {
  const TotalTest: any = Number(localStorage.getItem("totalNum"));
  const ErcData: any = JSON.parse(localStorage.getItem("ercData") || "");
  const NftData: any = JSON.parse(localStorage.getItem("nftData") || "");
  const [erc20resultList, setErc20resultList] = useState([] as ResultList[]);
  const [nftresultList, setNftresultList] = useState([] as ResultList[]);
  const { account } = useWeb3React();
  const history = useHistory();

  useEffect(() => {
    const addressString = window.location.href;
    if (
      addressString.substring(addressString.lastIndexOf("/") + 1) !== account ||
      !account
    ) {
      history.push("/home");
    }

    //滑倒顶部
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setErc20resultList(ErcData?.result || []);
    setNftresultList(NftData?.result || []);
    // eslint-disable-next-line
  }, [account]);
  // eslint-disable-next-line
  useEffect(() => {
    setInterval(() => {
      const params = {
        chain: "BSC",
        user_address: account,
      };

      getList(params).then((res: any) => {
        if (res?.data) {
          const { erc20, nft721 } = res?.data;
          setErc20resultList(erc20?.result || []);
          setNftresultList(nft721?.result || []);
          const totalNum =
            JSON.parse(erc20?.count_risk || 0) +
            JSON.parse(nft721?.count_risk || 0);
            localStorage.setItem("totalNum", totalNum);
            localStorage.setItem("ercData", JSON.stringify(erc20));
            localStorage.setItem("nftData", JSON.stringify(nft721));
        }
      });
    }, 30000);
  }, [account]);

  return (
    <HistoryContainer>
      <HistoryDom>
        <div className="title">Triathon </div>
        <div className="title">Address Security Report</div>
        <div className="addresscon">
          <p>
            <Colorsecurity type={TotalTest}>
              {TotalTest >= Number(10) && showsecurity[2]}
              {TotalTest < Number(10) &&
                TotalTest > Number(0) &&
                showsecurity[1]}
              {TotalTest === Number(0) && showsecurity[0]}
            </Colorsecurity>
          </p>
          <p>
            Your address: <span>{account}</span>
          </p>
          <span className="logo">
            <embed
              src={
                TotalTest >= Number(10)
                  ? Icon_red
                  : TotalTest === Number(0)
                  ? Icon_green
                  : Icon_yellow
              }
              type="image/svg+xml"
            />
          </span>
        </div>
        <div className="datacon">
          <h4>Following are the security recommendations</h4>
          {TotalTest === Number(0) && (
            <h6>
              but there are too few interaction records. It is recommended to
              perform regular checks.
            </h6>
          )}
          <div className="showcard">
            <div className="item">
              <h3>
                <Colorsecurity type={TotalTest}>{TotalTest}</Colorsecurity>
              </h3>
              <p>Approval security risks</p>
            </div>
            <div className="item" style={{ margin: "0 33px" }}>
              <h3>COMING SOON</h3>
              <p>Interactive security risks</p>
            </div>
            <div className="item">
              <h3>COMING SOON</h3>
              <p>Asset security</p>
            </div>
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="ERC - 20" key="2">
              <Erc20Listdom resultList={erc20resultList}></Erc20Listdom>
            </TabPane>
            <TabPane tab="ERC - 721" key="3">
              <Erc721Listdom data={nftresultList}></Erc721Listdom>
            </TabPane>
          </Tabs>
        </div>
        <div className="subscribe">
          <div className="left">
            <h3>Security subscribe service</h3>
            <p>push address security risk to you in time</p>
          </div>
          <div className="right">
            <span>Coming Soon</span>
          </div>
        </div>
      </HistoryDom>
    </HistoryContainer>
  );
}
