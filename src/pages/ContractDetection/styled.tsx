import styled from "styled-components";
import Wroldicon from "../../assets/images/home/wroldIcon.png";
import CardBg from "../../assets/images/home/cradbg.png";
import ArrowDown from "../../assets/images/home/arrowTop.png";
import ArrowRight from "../../assets/images/home/arrowRight.png";
import Content1Bg from "../../assets/images/home/content1.png";

export const ContainerCon = styled.div<{ isPadding?: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;

  margin-top: 74px;
  .homeContainer {
    height: 626px;
    background: url(${Wroldicon}) no-repeat right center;
    background-size: auto 100%;

    .content {
      width: 1200px;
      margin: 0 auto;
      padding-top: 120px;
      h1 {
        font-size: 60px;
        font-weight: 700;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
        text-align: left;
        vertical-align: top;
      }
      .socialIcom {
        margin-top: 37px;

        img {
          width: 57px;
          height: 57px;
          margin-left: 37px;
          cursor: pointer;
        }
        img:nth-child(1) {
          margin-left: 0;
        }
      }
    }
  }
  .content1 {
    width: 100%;
    height: 756px;
    background: url(${Content1Bg}) no-repeat;
    background-size: 100% 100%;
    .container {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      padding-top: 100px;
      .item {
        h3 {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0px;
          line-height: 34.75px;
          color: rgba(0, 0, 0, 1);
          text-align: left;
          vertical-align: top;
        }
        p {
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 36px;
          color: rgba(0, 0, 0, 1);
          text-align: left;
          vertical-align: top;
        }
      }
      .item:nth-child(1) {
        width: 40%;
      }
      .item:nth-child(2) {
        h3 {
          text-align: right;
        }
        width: 60%;
        margin-left: 39%;
      }
    }
  }
  .contentpie {
    padding: 71px 0;
    width: 1200px;
    display: flex;
    margin: 0 auto;
    .item {
      flex: 1;
      height: 289px;
      text-align: center;
      img {
        height: 100%;
        margin: 0 auto;
      }
    }
    .item:nth-child(1) {
      margin-top: 70px;
      /* padding-left: 100px; */
      h3 {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0px;
        line-height: 36px;
        color: rgba(0, 0, 0, 1);
        text-align: left;
        vertical-align: top;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 36px;
        color: rgba(0, 0, 0, 1);
        text-align: left;
        vertical-align: top;
        margin: 2px;
      }
    }
    .item:nth-child(3) {
      margin-top: 70px;
      padding-left: 100px;
      p {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20.27px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
        vertical-align: top;
        padding-left: 50px;
        span {
          display: inline-block;
          width: 12px;
          height: 12px;
          opacity: 1;
          border-radius:50%;
          margin-right:8px;
        }
      }
    }
  }

  .content2 {
    padding: 71px 0;
    width: 1200px;
    margin: 0 auto;
    .title {
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0px;
      line-height: 34.75px;
      color: rgba(0, 0, 0, 1);
    }
    .text {
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 36px;
      color: rgba(0, 0, 0, 1);
      text-align: center;
      margin-top: 10px;
    }
    .Iconcontainer {
      display: flex;
      margin-top: 75px;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 55px;
      .item {
        flex: 1;
        text-align: center;
        img {
          height: 148px;
          width: auto;
        }
        p {
          margin-top: 21px;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 36px;
        }
      }
      .items {
        flex: 1;
        height: 200px !important;
        background: url(${CardBg}) no-repeat;
        background-size: 100% 100%;
        padding: 35px 30px;
        img {
          width: 43px;
          height: 43px;
        }
        h3 {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0px;
          line-height: 36px;
          color: rgba(0, 0, 0, 1);
          text-align: left;
          vertical-align: top;
          margin: 10px 0;
        }
        p {
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 36px;
          color: rgba(0, 0, 0, 1);
          text-align: left;
          vertical-align: top;
        }
      }
    }
    .BtnCon {
      padding: 81px 0 37px;
      text-align: center;
      .Btnstyle {
        display: inline-block;
        margin: 0 auto;
        opacity: 1;
        border-radius: 81px;
        background: rgba(0, 0, 0, 1);
        color: #fff;
        font-size: 16px;
        width: 192px;
        height: 60px;
        line-height: 60px;
        cursor: not-allowed;
      }
    }
  }
`;

export const JoinBastDom = styled.div`
  width: 1200px;
  margin: 0 auto 120px;
  background: rgba(245, 245, 245, 1);
  .bastet_list {
    width: 1200px;
    height: auto;
    margin-bottom: 2px;
    background: rgba(245, 245, 245, 1);
    transition: all 1s;
    .bastet_title {
      width: 100%;
      height: 72px;
      padding: 20px 24px;
      display: flex;
      justify-content: space-between;
      background: rgba(212, 212, 212, 1);
      cursor: pointer;
      & > div:nth-child(1) {
        display: flex;
        align-items: center;

        p {
          margin: 0;
          text-align: center;
          display: block;
          margin-right: 12px;
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 36px;
          color: rgba(0, 0, 0, 1);
          text-align: left;
        }
      }

      .change_icon_down {
        width: 16px;
        height: 16px;
        background: url(${ArrowRight});
        background-size: 100% 100%;
        margin-top: 10px;
      }

      .change_icon_up {
        width: 16px;
        height: 16px;
        background: url(${ArrowDown});
        background-size: 100% 100%;
        margin-top: 10px;
      }
    }

    .bastet_text {
      width: 100%;
      height: auto;
      font-size: 18px;
      font-family: ArialMT;
      color: #ffffff;
      line-height: 24px;
      padding-left: 20px;
      padding-bottom: 24px;
      padding-right: 50px;
      background: rgba(245, 245, 245, 1);

      div {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 36px;
        color: rgba(0, 0, 0, 1);
        text-align: left;
        vertical-align: top;
      }
      .showTable {
        width: 360px;
        height: 201px;
        border-radius: 8px;
        border: 1px solid #22243a;
        > div {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(34, 36, 58, 1);
          margin: 0;
          > div {
            margin: 0;
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            font-family: ArialMT;
            color: #ffffff;
            &:nth-child(1) {
              width: 204px;
              padding-left: 24px;
              border-right: 1px solid rgba(34, 36, 58, 1);
            }
            &:nth-child(2) {
              flex: 1;
              text-align: center;
            }
          }
        }
        .head {
          width: 100%;
          height: 40px;
          background: #22243a;
          border-radius: 8px;
          > div {
            font-size: 16px;
            font-family: ArialMT;
            color: #cccccc;

            &:nth-child(1) {
              border-right: none;
            }
          }
        }
      }
    }
  }
`;
