import React, {  } from "react";
import styled from "styled-components";
// import clockIcon from "../../assets/images/claim/clock.png";
// import { Progress } from "antd";
const ContainerCon = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  margin-top: 74px;
  .container {
    width: 1200px;
    margin: 0 auto 142px;
    h2 {
      font-size: 60px;
      font-weight: 700;
      letter-spacing: 3px;
      line-height: 86.88px;
      color: rgba(0, 0, 0, 1);
      text-align: center;
      vertical-align: top;
    }
    .rules {
      margin: 0 auto;
      p {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 26.06px;
        color: rgba(0, 0, 0, 1);
        text-align: center;
        vertical-align: top;
      }
    }
    .alltotalStyle {
      width: 1200px;
      height: 180px;
      opacity: 1;
      border-radius: 25px;
      background: rgba(242, 242, 242, 1);
      display: flex;
      padding: 54px 0;
      .item {
        flex: 1;
        text-align: center;
        p:nth-child(1) {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0px;
          line-height: 24px;
          color: rgba(0, 0, 0, 1);
        }
        p:nth-child(2) {
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 26.06px;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;
export default function ContractDetection(): JSX.Element {
  return (
    <ContainerCon>
      <div className="container">
        <h2>$3353458.677</h2>

        <div className="rules">
          <p>Total Rewards Distributed</p>
          <p>
            当您通过XXX购买价值 $ 100 的 WC时，您将获得一张奖票。WC 空投每 1
            小时分发一次。该算法是开源的。祝你好运！
          </p>
        </div>
        <div className="alltotalStyle">
          <div className="item">
            <p className="numstyle">3353458.677</p>
            <p className="text"> Total Distributed WC</p>
          </div>
          <div className="item">
            <p className="numstyle">3353458.677</p>
            <p className="text"> Current Round of Rewards</p>
          </div>
          <div className="item">
            <p className="numstyle">3353458.677</p>
            <p className="text"> Total Players</p>
          </div>
          <div className="item">
            <p className="numstyle">3353458.677</p>
            <p className="text"> Total Winners</p>
          </div>
        </div>
      </div>
    </ContainerCon>
  );
}
