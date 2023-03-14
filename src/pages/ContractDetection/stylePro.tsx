import styled from "styled-components";
import StyleBg from "../../assets/images/contrastDetecPro/StyleBg.png";
import maskBg from "../../assets/images/contrastDetecPro/maskBg.png";
import introBg from "../../assets/images/contrastDetecPro/introBg.png";
import findBg from "../../assets/images/contrastDetecPro/findbg.png";
import disBg from "../../assets/images/contrastDetecPro/disBg.png";
import SharePic from "../../assets/images/contrastDetec/SharePic.png";
import icon from "../../assets/images/tips.png";

export const ContractDetectionDetailProDom = styled.div`
  width: 100%;
  padding-top: 134px;
  background: url(${StyleBg});
  background-size: 100% 346px;
  background-repeat: no-repeat;
  min-height: 400px;
  position: relative;
  .maskDiv {
    position: absolute;
    top: 292px;
    width: 100%;
    height: 54px;
    background-image: url(${maskBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 0;
  }
`;

export const Container = styled.div`
  width: 1294px;
  margin: 0 auto;
  .header {
    position: relative;
    .timer {
      font-size: 20px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #ffffff;
      line-height: 28px;
      margin-bottom: 24px;
    }
    .con {
      position: relative;
      padding: 24px 0 40px;
      p {
        height: 96px;
        font-size: 56px;
        font-family: Poppins-SemiBold, Poppins;
        color: #ffffff;
        line-height: 96px;
        margin-bottom: 24px;
        font-weight: 600;
        position: relative;
        img {
          width: 180px;
          height: 180px;
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      .text {
        font-size: 20px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #ffffff;
        line-height: 28px;
        margin-bottom: 20px;
      }
    }
    .button {
      cursor: pointer;
      /* width: 220px; */
      text-align: center;
      font-size: 20px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #ffffff;
      line-height: 28px;
      /* margin-top: 80px; */
      margin: 0 0 0;
      position: absolute;
      top: 0;
      right: 0;

      &::before {
        position: absolute;
        bottom: 0;
        content: "";
        width: 210px;
        height: 1px;
        background: #fff;
      }
      .share {
        width: 28px;
        height: 28px;
        border-radius: 14px;
        cursor: pointer;
        background: url(${SharePic}) no-repeat;
        background-size: 100% 100%;
        display: inline-block;
        margin-left: 20px;
        position: relative;
        top: 8px;
      }
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #ffffff;
  position: relative;

  &.up {
    &::before {
      position: absolute;
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.5);
      content: "";
      left: 0;
      top: 10px;
    }
  }
  &.down {
    &::before {
      position: absolute;
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.5);
      content: "";
      left: 0;
      top: -10px;
    }
  }
`;
export const TitText = styled.div`
  height: 52px;
  font-size: 44px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  line-height: 52px;
`;

export const ItemsIntro = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: Poppins;
  line-height: 24px;
  color: #ffffff;
  .intro {
    color: rgba(99, 107, 128, 1);
  }
  .chain {
    text-transform: uppercase;
  }
`;
export const Executive = styled.div`
  margin-top: 60px;
  .con {
    height: 411px;
    margin-top: 28px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;

    .left {
      width: 525px;
      padding: 47px 32px;
      > div {
        margin-bottom: 24px;
      }
    }
    .right {
      position: relative;
      .show {
        position: absolute;
        position: absolute;
        font-size: 16px;
        left: 155px;
        top: 40px;
        color: rgba(99, 107, 128, 1);
      }
    }
  }
`;

export const Summary = styled.div`
  margin-top: 70px;

  .sumaryIntro {
    color: #ffffff;
    font-size: 16px;
    font-family: Poppins;
    color: #636b80;
    line-height: 24px;
    .head {
      display: flex;
      color: #636b80;
      .id {
        .tips {
          display: inline-block;
          margin-left: 5px;
          width: 18px;
          height: 18px;
          /* border: 1px solid red; */
          background: url(${icon}) no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
          position: relative;
          .tipsCon {
            span {
              display: inline-block;
              width: 15px;
              height: 15px;
              background: #242528;

              position: absolute;
              left: -8px;
              top: 50px;

              transform: rotate(45deg);
            }
            width: 100px;
            height: 100px;
            padding: 21px 10px 21px 24px;
            width: 341px;
            height: 116px;
            font-size: 12px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #636b80;
            line-height: 24px;
            position: absolute;
            top: -47px;
            left: 33px;
            display: none;
            background: #242528;
            border-radius: 8px;
          }
          &:hover {
            .tipsCon {
              display: block;
            }
          }
        }
      }
      .des {
        i {
          display: inline-block;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #3772ff;
          line-height: 24px;
        }
      }
    }
    .sumaryCon {
      padding-top: 24px;
      .items {
        display: flex;
        font-size: 16px;
        font-family: Poppins-Medium, Poppins;
        font-weight: 500;
        color: #ffffff;
        margin-bottom: 18px;
      }
    }
    .id {
      width: 415px;
      padding-left: 32px;
    }
    .des {
      flex: 1;
      i {
        display: inline-block;
      }
      span {
        position: relative;
        cursor: pointer;
        &::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;
          border-bottom: 1px solid #fff;
          bottom: 0;
        }
      }
    }
    .sev {
      text-align: right;
      padding-right: 32px;
      width: 415px;
    }
    .empty {
      margin-top: 50px;
      text-align: center;
      color: #fff;
    }
  }
`;
export const ColorTexts = styled.span<{ type: string }>`
  font-size: 16px;
  border-radius: 8px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: ${({ type }) =>
    type === "High"
      ? "rgba(225, 49, 48, 1)"
      : type === "Medium"
      ? "#FF761F"
      : "#FFC92C"};
  background: ${({ type }) =>
    type === "High"
      ? "rgba(225, 49, 48, .2)"
      : type === "Medium"
      ? "rgba(255, 118, 31, .2)"
      : "rgba(255, 201, 44, .2)"};
  padding: 4px 16px;
`;
export const Colorsecurity = styled.span<{ type:number}>``


export const Findings = styled.div`
  margin-top: 150px;
  .introText {
    width: 100%;
    height: 180px;
    border-radius: 16px;
    margin: 50px 0 0;
    background: url(${introBg}) 100% 100% no-repeat;
    padding: 50px 32px 0;
    font-size: 16px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #ffffff;
    line-height: 28px;
  }
  .findCon {
    margin-top: 48px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    .fingItems {
      padding: 60px 0 0 0;
      .title {
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        font-family: Poppins-SemiBold, Poppins;
        font-weight: 600;
        color: #ffffff;
        line-height: 32px;
        .right {
          color: rgba(255, 255, 255, 0.5);
        }
      }
      .button {
        text-align: right;
        margin: 22px 0 38px;
      }
      .con {
        width: 100%;
        padding: 48px 32px;
        height: auto;
        background: url(${findBg}) repeat;
        border-radius: 16px;
        .green {
          color: #3772ff;
        }
        > div {
          font-size: 16px;
          font-family: Poppins-Regular, Poppins;
          font-weight: 400;
          color: #ffffff;
          line-height: 28px;
        }
      }
    }
    .empty {
      margin: 50px 0;
      text-align: center;
      color: #fff;
      font-size: 16px;
      font-family: Poppins;
      font-weight: 400;
    }
  }
`;

export const Disclaimer = styled.div`
  margin-top: 100px;
  height: 502px;
  background: url(${disBg});
  background-size: 100% 502px;
  background-repeat: no-repeat;
  .container {
    width: 1294px;
    margin: 0 auto;
    padding-top: 10px;
    .tit {
      font-size: 44px;
      font-family: Poppins-SemiBold, Poppins;
      font-weight: 600;
      color: #636b80;
      line-height: 52px;
      margin-bottom: 50px;
    }
    .text {
      font-size: 16px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #636b80;
      line-height: 28px;
    }
  }
`;
