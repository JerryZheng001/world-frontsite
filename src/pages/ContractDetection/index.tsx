import React, { useCallback, useEffect, useMemo, useState } from "react";
import ErrModel from "./component/ErrModel";
import leftShowPic from "../../assets/images/tokenDetec/leftShowPic.png";
import rightShowPic from "../../assets/images/tokenDetec/rightShowPic.png";
import AddressIcon from "../../assets/images/address_icon.png";
import "./antd.scss";
import { useActiveWeb3React } from "../../hooks";
import { useWalletModalToggle } from "../../state/application/hooks";
import {
  BottomDiv,
  ComingDiv,
  ContainerCon,
  IntroDiv,
  ShowDecting,
  StyleButton,
  WidthDiv,
} from "./styled";
// import { Select } from 'antd';
import { useHistory } from "react-router-dom";
import { getListsTotal, getList } from "../../utils/fetch/detect";
import { Dots, SmallLoading } from "../../components/styleds";

interface BtnProp {
  disabled: boolean;
  text: JSX.Element | string;
  event?: () => void;
}
export default function ContractDetection(): JSX.Element {
  const { account } = useActiveWeb3React();
  const toggleWalletModal = useWalletModalToggle();
  const history = useHistory();

  const [currIndex, setcurrIndex] = useState(0);
  const [AddressContract, setAddressContract] = useState("");

  // const [selectChain, setselectChain] = useState("BSC");

  const [contrastErrText, setcontrastErrText] = useState("");
  const [ErrOpen, setErrOpen] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");

  const [detectIng, setdetectIng] = useState(false);

  const [TotalTest, setTotalTest] = useState(0);

  const [Testing, setTesting] = useState(false);
  // const [TakeResultAllTime, setTakeResultAllTime] = useState(false)
  const [overTimer, setoverTimer] = useState(false);

  const detectContrast = () => {
    if (!account) {
      return;
    }
    setTesting(true);
    const params = {
      chain: "BSC",
      user_address: '0x877D9D69bb4cAA7C7a302Cdc03A646917eA3e4Af',
    };

    getList(params).then((res: any) => {
      if (res?.data) {
        const { erc20, nft721 } = res?.data;
        const totalNum =
          JSON.parse(erc20?.count_risk || 0) +
          JSON.parse(nft721?.count_risk || 0);
        setTesting(false);
        localStorage.setItem("totalNum", totalNum);
        localStorage.setItem("ercData", JSON.stringify(erc20));
        localStorage.setItem("nftData", JSON.stringify(nft721));
        history.push(`/wallet_security/detail/${account}`);
      } else {
        setErrOpen(true);
      }
    });
  };

  //关闭错误弹框
  const closeErrTip = () => {
    setErrOpen(false);
    seterrorMsg("");
    setcontrastErrText("");
    setAddressContract("");
    setdetectIng(false);
    setTesting(false);
  };

  const styleButton: BtnProp = useMemo(() => {
    const rst: BtnProp = {
      text: "Start detection",
      event: () => ({}),
      disabled: true,
    };
    if (!account) {
      rst.text = "Connect Wallet";
      rst.disabled = false;
      rst.event = () => {
        toggleWalletModal();
      };
      return rst;
    }

    if (detectIng) {
      rst.text = (
        <>
          <SmallLoading />
          Detecting
          <Dots />
        </>
      );
      return rst;
    }
    if (overTimer) {
      rst.text = "Too many requests, please wait";
      return rst;
    }
    return {
      text: "Start detection",
      event: () => {
        detectContrast();
      },
      disabled: false,
    };
    // eslint-disable-next-line
  }, [
    account,
    toggleWalletModal,
    detectContrast,
    currIndex,
    detectIng,
    useActiveWeb3React,
    overTimer,
    // eslint-disable-next-line
    localStorage.getItem("chain"),
    AddressContract,
  ]);

  //检测总数
  const handleListTotal = () => {
    getListsTotal()
      .then((res) => {
        if (res.data) {
          const { total } = res.data;
          setTotalTest(total);
        }
      })
      .catch((e) => {
        console.log(e, "wrong");
      });
  };

  //初始化
  const PageStart = useCallback(
    () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setErrOpen(false);
      seterrorMsg("");
      setcontrastErrText("");
      setcurrIndex(0);
      setAddressContract("");
      // setTakeResultAllTime(false)
      setoverTimer(false);
      localStorage.setItem("TakeResultAllTime", "false");
    },
    // eslint-disable-next-line
    [account]
  );

  useEffect(() => {
    localStorage.setItem("chain", "BSC");
    handleListTotal();
    PageStart();
    // GetTestStatusStart();
    // eslint-disable-next-line

    // eslint-disable-next-line
  }, [account]);

  return (
    <ContainerCon className="ContractDetection">
      {/* 合约检测入口 */}
      <div className="homeContainer">
        {/* 内容区域 */}
        <div className="container">
          <WidthDiv className="ContracDec">
            <div className="title">
              Address Security Scan
              <span></span>
            </div>
            <div className="tabs">
              Conduct a comprehensive scan of your address for security
              vulnerabilities.
            </div>
            {Testing ? (
              <ShowDecting>
                {overTimer ? (
                  <>
                    <div className="loading"></div>
                    <div className="text">Too many requests, please wait</div>
                  </>
                ) : (
                  <>
                    <div className="loading"></div>
                    <div className="text">Detecting…</div>
                  </>
                )}
              </ShowDecting>
            ) : (
              <div className="addreccCon">
                {/* <div className="select">
                                <Select defaultValue="BSC" onChange={handleChange} dropdownClassName='dropCon' showArrow >
                                    <Option value="BSC">  <img src={bscPic} alt="" /> BSC</Option>
                                    <Option value="ETH">  <img src={ethPic} alt="" /> ETH</Option>
                                    <Option value="Optimism">  <img src={optimismPic} alt="" /> Optimism</Option>
                                    <Option value="Polygon">  <img src={polyPic} alt="" /> Polygon</Option>
                                    <Option value="Avalanche">  <img src={avaPic} alt="" /> Avalanche</Option>
                                </Select>
                            </div> */}
                <div className="inputCon">
                  {/* <Input value={AddressContract} onUserInput={val => setAddressContract(val)} placeholder='Please enter the Token address' ShowRed={contrastErrText === '' || AddressContract === ''} setcontrastErrText={setcontrastErrText} ></Input> */}
                  <img src={AddressIcon} alt="" />{" "}
                  <span>Your address: {account}</span>
                </div>
                <div className="err">{contrastErrText}</div>
              </div>
            )}

            {!Testing && (
              <StyleButton onClick={styleButton.event}>
                {styleButton.text}
              </StyleButton>
            )}
          </WidthDiv>
        </div>
        <IntroDiv>
          {/* <div>
                <div className="top">4</div>
                <div className="bottom">Engines</div>
            </div> */}
          <div>
            <div className="top">2</div>
            <div className="bottom">Public Chains Supported</div>
          </div>

          <div>
            <div className="top">119K+</div>
            <div className="bottom">Malicious Contracts Collected</div>
          </div>
          <div>
            <div className="top">{TotalTest || "--"} +</div>
            <div className="bottom">Scan Addresses</div>
          </div>
        </IntroDiv>
      </div>

      <ComingDiv>
        <div className="tit">TRIATHON Token Detection</div>
        <div className="intro">
          A Crypto Detection and security Platform for Everyone.
        </div>
        <div
          className="go"
          onClick={() => {
            window.open("https://www.triathon.space/tokenDetections/#/");
          }}
        >
          Go
        </div>
      </ComingDiv>
      <BottomDiv>
        <div className="left">
          <img src={leftShowPic} alt="" />
        </div>
        <div className="right">
          <img src={rightShowPic} alt="" />
        </div>
      </BottomDiv>
      <ErrModel
        isOpen={ErrOpen}
        onDismiss={closeErrTip}
        errorMsg={errorMsg}
      ></ErrModel>
    </ContainerCon>
  );
}
