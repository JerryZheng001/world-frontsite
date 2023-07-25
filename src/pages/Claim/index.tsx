import React, { } from "react";
import styled from "styled-components";
import clockIcon from "../../assets/images/claim/clock.png";
import { Progress } from "antd";
const ContainerCon = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  margin-top: 74px;
  .container {
    width: 982px;
    margin: 0 auto 142px;
    h2 {
      font-size: 60px;
      font-weight: 700;
      letter-spacing: 0px;
      line-height: 86.88px;
      color: rgba(0, 0, 0, 1);
      text-align: center;
      vertical-align: top;
      padding-top: 120px;
    }
    .descirption {
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 26.06px;
      color: rgba(0, 0, 0, 1);
      text-align: left;
      vertical-align: top;
    }
    .rules {
      margin: 0 145px;
      p {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 26.06px;
        color: rgba(0, 0, 0, 1);
        text-align: left;
        vertical-align: top;
      }
    }
    .timestyle {
      text-align: center;
      font-size: 28px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 40.54px;
      color: rgba(0, 0, 0, 1);
      vertical-align: top;
      margin-top: 60px;
      margin-bottom:6px;
      img {
        width: 37px;
        height: 37px;
        margin-right:10px;
      }
      /* ::before {
        content: "";
        width: 37px;
        height: 37px;
        display: inline-block;
        background: url(${clockIcon}) no-repeat;
        background-size: 100% 100%;
      } */
    }
    .processStyle{
        width: 934px;
        margin:40px auto;
        .ant-progress-bg {
            height: 13px!important;
        }
        .ant-progress-show-info .ant-progress-outer {
            margin-right: 0;
            padding-right: 0;
        }
        .ant-progress-text {
            display: none;
        }
        .processStyletext {
            display: flex;
            span{
                flex: 1;
                display:inline-block;
                font-size: 18px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 26.06px;
                color: rgba(0, 0, 0, 1);
                text-align: left;

            }
            span:nth-child(1){
                text-align:left

            }
            span:nth-child(2){
                text-align:right

            }

        }
    }
    .claimStyle {
        margin:0 auto;
        text-align: center;
        input {
            margin-bottom:30px;
            padding:0 50px;
           
            width: 934px;
height: 81px;
opacity: 1;
border-radius: 657px;
background: rgba(204, 204, 204, 0);

        }
        .claimbtn {
            margin:0 auto;
            width: 192px;
height: 60px;
opacity: 1;
border-radius: 50px;
background: rgba(0, 0, 0, 1);
font-size: 18px;
font-weight: 400;
letter-spacing: 0px;
line-height: 60px;
color: rgba(255, 255, 255, 1);
text-align: center;
cursor: pointer;


        }
    }
  }
`;
export default function ContractDetection(): JSX.Element {
  return (
    <ContainerCon>
      <div className="container">
        <h2>Cliam WC token</h2>

        <p className="descirption">
          现在总共有 400,000,000,000,000 WC 代币可供Zora Holder、Decent nft
          Holder 、Zealy Points和WorldCoin holder领取。
        </p>
        {/* rules */}
        <div className="rules">
          <p>领取规则：</p>
          <p>
            第一天一人100万，第二天50万，第三天30万，3天后未领取的打入World
            coin生态基金
          </p>
        </div>
        {/* time */}
        <div className="timestyle">
          <img src={clockIcon} alt="" />
          2023.4.19.09:00(UTC+0)-2023.4.26.09:00(UTC+0)
        </div>
        <div className="processStyle">
          <div className="processStyletext">
            <span>Received</span>
            <span>80B</span>
          </div>
          <Progress percent={30} strokeColor={"rgba(0, 0, 0, 1)"} />
        </div>
        <div className="claimStyle">
          <input type="text" />
          <div className="claimbtn">Claim</div>
        </div>
      </div>
    </ContainerCon>
  );
}
