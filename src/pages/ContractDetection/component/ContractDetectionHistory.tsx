import React, { useEffect, useState } from "react";
import { HistoryContainer, HistoryDom } from "../styled";
import { Colorsecurity } from "../stylePro";

import {
  // getHistoryLists,
  getWalletdetection,
} from "../../../utils/fetch/detect";

// import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import Erc20Listdom from "../component/Erc20List";
import Erc721Listdom from "../component/Erc721List";
// import Icon_svg from "../../../assets/svg/icon.svg";
import { Tabs } from "antd";
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
  approved_amount: string;
  advice: number;
  risk: number;
  malicious_behavior: [string];
  nft_name: string;
  nft_symbol: string;
}
const showsecurity = [
  "significant security risks",
  "Some security risks",
  "currently no security risks",
];

// const ShowText = [
//   "Significant Risk",
//   "High Risk",
//   "Medium Risk",
//   "Some Risk",
//   "Excellent",
// ];
export default function ContractDetectionHistory(): JSX.Element {
  const [TotalTest, setTotalTest] = useState(10);
  const [resultList, setresultList] = useState([] as ResultList[]);
  const { account } = useWeb3React();

  // const history = useHistory();
  // const [InputValue, setInputValue] = useState("");

  //钱包检测列表
  const getTestList = (type:number) => {
    setresultList([])
    const Params = {
      user_address: account,
      chain: "BSC",
      option: Number(type),
    };
    getWalletdetection(Params).then((res) => {
   
      if (res?.data) {
        const { result = [],count_risk= 0 } = res?.data;
        setTotalTest(count_risk)
        setresultList(result);
        
      }
    });
  };
  const callback = (key:any)=>{
    getTestList(key)
  }

  useEffect(() => {
    getTestList(2);
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <HistoryContainer>
      <HistoryDom>
        <div className="title">TRIATHON </div>
        <div className="title">Contract Detection Report</div>
        <div className="addresscon">
          <p>
            <span>
            {/* <embed style ={{color:"red"}} src={Icon_svg} type="image/svg+xml" /> */}
            

            </span>
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
        </div>
        <div className="datacon">
          <h4>Following are the security recommendations</h4>
          <div className="showcard">
            <div className="item">
              <h3>
                <Colorsecurity type={TotalTest}>{TotalTest}</Colorsecurity>
              </h3>
              <p>Approval security risks</p>
            </div>
            <div className="item" style={{ margin: "0 33px" }}>
              <h3>Coming Soon</h3>
              <p>Approval security risks</p>
            </div>
            <div className="item">
              <h3>Coming Soon</h3>
              <p>Approval security risks</p>
            </div>
          </div>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="ERC - 20" key="2">
              <Erc20Listdom resultList={resultList}></Erc20Listdom>
            </TabPane>
            <TabPane tab="ERC - 721" key="3">
              <Erc721Listdom data={resultList}></Erc721Listdom>
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
