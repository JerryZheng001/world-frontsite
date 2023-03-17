import styled from "styled-components";
import point from "../../assets/images/contrastDetec/point@2x.png";
import reportLogo from "../../assets/images/contrastDetec/reportLogo.png";
import SharePic from "../../assets/images/contrastDetec/SharePic.png";
import CopySvg from "../../assets/images/contrastDetec/CopySvg.svg";
import twitterSvg from "../../assets/images/contrastDetec/twitterSvg.svg";
import picSvg from "../../assets/images/contrastDetec/picSvg.svg";
import ShareBg from "../../assets/images/contrastDetec/ShareBg.png";
import { ReactComponent as close } from "../../assets/images/contrastDetec/close.svg";
import search from "../../assets/images/contrastDetec/search.svg";
import copyImg from "../../assets/images/contrastDetec/copyImg.svg";
import uploadFile from "../../assets/images/contrastDetec/uploadFile.svg";
import coreImg from "../../assets/images/contrastDetec/coreImg.png";
import loadingPic from "../../assets/images/contrastDetec/loading.png";
import notice from "../../assets/images/contrastDetec/notice.svg";
// import StyleBg from "../../assets/images/contrastDetec/StyleBg.png";
import homePageBg from "../../assets/images/contrastDetec/homePageBg.png";
import play1 from "../../assets/images/contrastDetec/play1@2x.png";
import play2 from "../../assets/images/contrastDetec/play2@2x.png";
import play3 from "../../assets/images/contrastDetec/play3@2x.png";
import play4 from "../../assets/images/contrastDetec/play4@2x.png";
import play5 from "../../assets/images/contrastDetec/play5@2x.png";
import play6 from "../../assets/images/contrastDetec/play6@2x.png";
// import CommingImg from "../../assets/images/tokenDetec/CommingImg.png";
import securitybg from "../../assets/images/securitybg.png";
import subscribebg from "../../assets/images/subscribebg.png";
import AddressBg from "../../assets/images/addressBg.png";
import Tokenbg from "../../assets/images/contrastDetec/tokenbg.png";
import arrowRight from "../../assets/images/arrowRight.png";
import TitleIcon from "../../assets/images/titleIcon.png";

export const ContainerCon = styled.div<{ isPadding?: boolean }>`
  width: 100%;
  height: 100%;
  /* border:1px solid red; */
  /* 
  background-size: 100% 100%; */
  background-repeat: no-repeat;
  position: relative;
  padding-bottom: 133px;
  .homeContainer {
    background: url(${homePageBg});
    background-size: 100% 146%;
    background-repeat: no-repeat;
    .playContainer {
      z-index: 1;
      width: 1294px;
      height: 780px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    .play1 {
      width: 126px;
      height: 121px;
      position: absolute;
      background: url(${play1});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      left: -68px;
      top: 136px;
      top: calc(286 / 1080 vh);
      animation: float90 6s ease-in-out infinite;
      animation-delay: 0s;
    }
    .play2 {
      width: 83px;
      height: 62px;
      position: absolute;
      background: url(${play2});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      left: -160px;
      top: 428px;
      animation: float90 6s ease-in-out infinite;
      animation-delay: 0.9s;
    }
    .play3 {
      width: 91px;
      height: 92px;
      position: absolute;
      background: url(${play3});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      left: 37px;
      top: 551px;
      animation: float90 6s ease-in-out infinite;
      animation-delay: 1.8s;
    }
    .play4 {
      width: 87px;
      height: 68px;
      position: absolute;
      background: url(${play4});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      right: -33px;
      top: 114px;
      animation: float90 6s ease-in-out infinite;
      animation-delay: 2.7s;
    }
    .play5 {
      width: 109px;
      height: 93px;
      position: absolute;
      background: url(${play5});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      right: -170px;
      top: 300px;
      animation: float90 6s ease-in-out infinite;
      animation-delay: 3.6s;
    }
    .play6 {
      width: 131px;
      height: 129px;
      position: absolute;
      background: url(${play6});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      right: -67px;
      top: 506px;

      animation: float90 6s ease-in-out infinite;
      animation-delay: 4.5s;
    }
    .animation {
      animation: float90 6s ease-in-out infinite;
    }
    @keyframes float90 {
      0% {
        -webkit-transform: translateY(-7%);
        transform: translateY(-7%);
      }
      50% {
        -webkit-transform: translateY(7%);
        transform: translateY(7%);
      }
      100% {
        -webkit-transform: translateY(-7%);
        transform: translateY(-7%);
      }
    }
  }
  .container {
    padding-top: 87px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    position: relative;
    z-index: 3;
  }
`;
export const WidthDiv = styled.div`
  .title {
    position: relative;
    font-size: 64px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    width: 909px;
    text-align: center;
    line-height: 64px;
    margin-top: 200px;
    margin-bottom: 72px;
    color: #ffffff;
    span {
      display: inline-block;
      width: 179px;
      height: 42px;
      position: absolute;
      top: -42px;
      right: 0px;
      background: url(${TitleIcon}) 0% 0% / 100% 100% no-repeat;
    }
    @keyframes Hue {
      0% {
        filter: hue-rotate(0deg);
      }
      to {
        filter: hue-rotate(-1turn);
      }
    }
  }
  .tabs {
    text-align: center;
    font-size: 20px;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #ffffff;
    line-height: 28px;
    margin-bottom: 72px;
    > span {
      cursor: pointer;
      font-size: 20px;
      font-family: Poppins-SemiBold, Poppins;
      font-weight: 600;
      color: #ffffff;
      line-height: 28px;
    }
    .tab1 {
      margin-right: 80px;
    }
    .active {
      color: #3772ff;
    }
  }
  .addreccCon {
    display: flex;
    justify-content: center;
    height: 60px;
    position: relative;
    .select {
      width: 149px;
      height: 60px;
      border-radius: 8px;
      border: 1px solid #23252c;
      margin-right: 12px;
      .ant-select {
        width: 149px;
        height: 60px;
        .ant-select-selection {
          background: none;
          height: 60px;
          color: #fff;
          font-size: 16px;
          font-family: Poppins-Medium, Poppins;
          font-weight: 500;
          line-height: 60px;
          border: none;
          box-shadow: none;
          padding-left: 16px;
          img {
            width: 30px;
            height: 30px;
            margin-right: 8px;
          }
          .ant-select-selection__rendered,
          .ant-select-selection-selected-value {
            height: 60px;
            font-size: 16px;
            font-family: Poppins-Medium, Poppins;
            font-weight: 500;
            line-height: 60px;
            margin: 0;
            display: flex;
          }
          .ant-select-arrow {
            i svg {
              width: 15px;
              height: 15px;
              color: #fff;
              position: relative;
              top: -2px;
            }
          }
        }
      }
      .ant-select-focused,
      .ant-select-enabled {
        border: none;
      }
    }
    .inputCon {
      width: 636px;
      height: 60px;
      border-radius: 8px;
      border: 1px solid rgba(185, 192, 216, 0.25);
      padding: 22px 34px;
      img {
        width: 26px;
        height: 26px;
        margin-top: -8px;
        margin-right: 10px;
      }
      span {
        display: inline-block;
        font-size: 16px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #ffffff;
        line-height: 16px;
      }
    }
    .err {
      position: absolute;
      bottom: -35px;
      color: red;
      /* left: 65px; */
      padding-left: 137px;
      width: 100%;
    }
  }
  .notice {
    width: 636px;
    height: 40px;
    font-size: 12px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #636b80;
    line-height: 20px;
    margin: 0 auto;
    text-align: center;
    padding-left: 22px;
    position: relative;
    text-align: left;
    &::before {
      position: absolute;
      width: 16px;
      height: 16px;
      content: "";
      background: url(${notice});
      left: 0;
      top: 4px;
    }
  }
  .detect {
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 636px;
    margin: 48px auto 0;
    font-size: 16px;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    .pointRight {
      width: 12px;
      height: 12px;
      display: inline-block;
      background: url(${point}) no-repeat;
      background-size: 100% 100%;
      margin-left: 5px;
    }
  }
  .fileCon {
    width: 636px;
    margin: 0 auto;
    height: auto;
    .uploadBefore {
      width: 100%;
      height: 144px;
      background: #161719;
      border-radius: 16px;
      border: 1px solid #23252c;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
    }
  }
`;

export const ShowDecting = styled.div`
  width: 636px;
  height: 144px;
  background: #161719;
  border-radius: 16px;
  border: 1px solid #23252c;
  margin-bottom: 24px;
  margin: 0 auto 24px;
  .sorryText {
    font-size: 16px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ffffff;
    line-height: 16px;
    text-align: center;
    margin-top: 55px;
  }
  .loading {
    background: url(${loadingPic});
    background-size: 100% 100%;
    width: 32px;
    height: 32px;
    margin: 32px auto 16px;
    animation: spin 2s linear infinite;
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .text {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ffffff;
  }
`;
export const StyledInput = styled.input<{ ShowRed?: boolean }>`
  width: 100%;
  background: none;
  outline: none;
  font-size: 16px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 600;
  color: #ffffff;
  padding-left: 20px;
  height: 60px;
  line-height: 60px;
  border: ${({ ShowRed }) =>
    !ShowRed ? "1px solid rgba(254, 55, 55, 1)" : "none"};
  border-radius: 8px;
  &::placeholder {
    font-size: 16px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #575a61;
  }
  caret-color: #3772ff;
  &:focus {
    border: 1px solid;
    border-color: ${({ ShowRed }) =>
      !ShowRed ? "rgba(254, 55, 55, 1)" : "rgba(55, 114, 255, 1)"};
    border-radius: 8px;
  }
`;
export const StyleSolInputUp = styled.div`
  width: 209px;
  height: 44px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #111112;
  cursor: pointer;
  span {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: linear-gradient(180deg, #6b9bff 0%, #2561f0 100%);
    margin-right: 10px;
    background: url(${uploadFile});
  }
  position: relative;
  > input {
    width: 100%;
    height: 44px;
    border: none;
    outline: none;
    background: none;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
`;
export const FileContent = styled.div`
  width: 636px;
  height: 240px;
  margin: 0 auto;
`;
export const StyleButton = styled.div<{
  width?: string;
  height?: string;
  disabled?: boolean;
}>`
  width: 636px;
  height: 50px;
  background: #3772ff;
  border-radius: 8px;
  color: ${({ disabled }) =>
    disabled ? "rgba(255, 255, 255, .4)" : "rgba(255, 255, 255, 1)"};
  background: ${({ disabled }) =>
    disabled ? "rgba(55, 114, 255, .4)" : "rgba(55, 114, 255, 1)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  font-family: Poppins-Medium, Poppins;
  font-weight: 500;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  margin: 40px auto 100px;
`;
export const StyleCodeDom = styled.div`
  width: 636px;
  height: 240px;
  border-radius: 8px;
  border: 1px solid #23252c;
  .CodeMirror {
    height: 240px !important;
    border-radius: 8px;
  }
`;

export const ContractDetectionDetailDom = styled.div`
  width: 100%;
  padding-top: 134px;
  background: url(${homePageBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .container {
    max-width: 1294px;
    width: 1294px;
    text-align: center;
    margin: 0 auto 121px;
    text-align: center;
    .title {
      font-size: 48px;
      font-family: Poppins-SemiBold, Poppins;
      font-weight: 600;
      line-height: 56px;
      color: #fff;
      margin-bottom: 40px;

      @keyframes Hue {
        0% {
          filter: hue-rotate(0deg);
        }
        to {
          filter: hue-rotate(-1turn);
        }
      }
    }
    .detect {
      width: 636px;
      height: 50px;
      background: #3772ff;
      border-radius: 8px;
      cursor: pointer;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
      font-family: Poppins-Medium, Poppins;
      font-weight: 500;
      color: #ffffff;
      margin: 64px auto 24px;
    }
    .text {
      width: 636px;
      height: 40px;
      font-size: 12px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #636b80;
      line-height: 20px;
      margin: 0 auto 64px;
      padding-left: 22px;
      position: relative;
      text-align: left;
      &::before {
        position: absolute;
        width: 16px;
        height: 16px;
        content: "";
        background: url(${notice});
        left: 0;
        top: 5px;
      }
    }
  }
`;

export const ReportDom = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
    .reportShow{
        width: 635px;
        height: 872px;
        background: #181A1C;
        border-radius: 16px;
        margin-right: 24px;
        position: sticky;
        top: 140px;
        padding: 32px 40px 0;
        text-align: left;
        .reportLogo{
            width: 133px;
            height: 40px;
            background: url(${reportLogo}) no-repeat;
            background-size: 100% 100%;
        }
    }
    .fileConNew{
        height: 1102px;
    }
    .SharereportShow{
        background: url(${ShareBg}) no-repeat;
        background-size: 100% 100%;
        width: 635px;
        height: 1080px;
        padding: 32px 40px 0;
        text-align: left;
        position: relative;
    }
    .reportDetail{
        width: 635px;
        height: auto;
        background: #181A1C;
        border-radius: 16px;
        padding: 16px 40px 40px 40px;
    }
    .present{
        .item{
            height: 14px;
            font-size: 14px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 14px;
            margin-bottom: 18px;
        }
        margin-bottom: 40px;
    }
    .contractInfo{
        .item{
            height: 14px;
            font-size: 14px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 14px;
            margin-bottom: 18px;
            display: flex;
            justify-content: space-between;
            .chainImg{
                width: 20px;
                height: 20px;
                margin-right: 5px;
            }
            .copyImg{
                display: inline-block;
                width: 22px;
                height: 22px;
                cursor: pointer;
                background: url(${copyImg});
                position: relative;
                top: 5px;
                margin-left: 5px;
            }
        }
        margin-bottom: 40px;
    }
    .fileInfo{
        width: 100%;
        height: 240px;
        border-radius: 8px;
        border: 1px solid #23252C;
        >div{
            width: 555px;
            height: 240px;
        }
    }
    .result{
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        .left{
            max-width: 300px;
            display: flex;
            height: 64px;
            .icon{
                min-width: 64px;
                max-height: 64px;
                width: 64px;
                height: 64px;
                /* background: #FFFFFF; */
                border-radius: 9px;
                /* opacity: 0.06; */
                margin-right: 16px;
                background: url(${coreImg});
                background-size: 100% 100%;
                
            }
            .text{
                position: static;
                &::before{
                    content:'',
                    width: 0;
                    height: 0;
                    
                }
                .top{
                    font-size: 16px;
                    font-family: Poppins-Regular, Poppins;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 16px;
                    margin-bottom: 12px;
                }
                .bottom{
                    
                    font-size: 14px;
                    font-family: Poppins-Medium, Poppins;
                    font-weight: 500;
                    color: #FFFFFF;
                    line-height: 14px;
                }
            }
        }
        .right{
            font-size: 14px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 14px;
            cursor: pointer;
        }
    }
    .distributed{
        height: 214px;
    }
    .code{
        width: 95px;
        height: 95px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        position: absolute;
        right: 40px;
        bottom: 50px;
    }
 `;
export const ColorInner = styled.span<{ type: number }>`
  color: ${({ type }) => (type === 0 ? "#20DDB5" : "#E13131")};
`;

export const ColorText = styled.span<{ type: number }>`
  font-size: 20px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  margin-bottom: 14px;
  color: ${({ type }) =>
    type === 0
      ? "#E13131"
      : type === 1
      ? "#FF7620"
      : type === 2
      ? "#FFC92B"
      : type === 3
      ? "#3772ff"
      : "#20DDB5"};
  line-height: 28px;
`;

export const IntroTit = styled.div`
  font-size: 24px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  line-height: 24px;
  margin: 24px 0 32px 0;
  text-align: left;
  position: relative;
  .Share {
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    right: 0;
    top: 0;
    cursor: pointer;
    background: url(${SharePic}) no-repeat;
    background-size: 100% 100%;
  }
`;
export const IntroTitle = styled.div`
  height: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 16px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  color: #ffffff;
  .leftintro {
    font-size: 16px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #ffffff;
  }
  .rightIntro {
    cursor: pointer;
    font-size: 16px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ffffff;
  }
`;
export const ShowShareDropCon = styled.div`
  position: absolute;
  bottom: -128px;
  right: 0;
  width: 122px;
  height: 120px;
  background: #242528;
  border-radius: 8px;
  > div {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    font-size: 12px;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      background: #3772ff;
    }
  }
  .item1 {
    border-radius: 8px 8px 0px 0px;
    span {
      width: 14px;
      height: 14px;
      background: url(${twitterSvg}) no-repeat;
      background-size: 100% 100%;
      margin-right: 8px;
    }
  }
  .item2 {
    span {
      width: 14px;
      height: 14px;
      background: url(${picSvg}) no-repeat;
      background-size: 100% 100%;
      margin-right: 8px;
    }
  }
  .item3 {
    border-radius: 0px 0px 8px 8px;
    span {
      width: 14px;
      height: 14px;
      background: url(${CopySvg}) no-repeat;
      background-size: 100% 100%;
      margin-right: 8px;
    }
  }
`;
export const ReportDetail = styled.div`
  text-align: left;
  .titleIntro {
    height: 26px;
    font-size: 18px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    line-height: 26px;
    margin-bottom: 12px;
    position: relative;
    img {
      width: 30px;
      height: 30px;
      margin-right: 12px;
    }
  }
  .green {
    color: #ffc92b;
  }
  .yellow {
    color: #ff7620;
  }
  .red {
    color: #e13131;
  }
  .intro {
    font-size: 14px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    margin-bottom: 32px;
  }
`;

export const CloseColor = styled(close)<{ strokeColor?: string }>`
  width: 18px;
  height: 18px;
`;
export const WrokContainer = styled.div`
  width: 683px;
  height: 537px;
  background: #22262f;
  border-radius: 16px;
  backdrop-filter: blur(29px);
  padding: 40px;
  .header {
    margin-bottom: 40px;
    position: relative;
    .left {
      font-size: 24px;
      font-family: Poppins-SemiBold, Poppins;
      font-weight: 600;
      color: #ffffff;
      line-height: 32px;
    }
    .close {
      position: absolute;
      width: 40px;
      height: 40px;
      border: 2px solid #353945;
      right: 0;
      top: 0;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      /* :hover{
                background: #fff;
                border: none;
                path {
                    stroke: '#000';
                }
            } */
    }
  }
  .con {
    p {
      font-size: 12px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
    }
    .title {
      font-size: 16px;
      font-family: Poppins-Medium, Poppins;
      font-weight: 500;
      color: #ffffff;
      line-height: 24px;
      margin-bottom: 16px;
    }
  }
`;
export const HistoryContainer = styled.div`
  width: 100%;
  /* background: url(${AddressBg});
  background-size: 100% 100%;
  background-repeat: no-repeat; */
`;
export const HistoryDom = styled.div`
  padding-top: 134px;
  padding-bottom: 121px;
  width: 1294px;
  margin: 0 auto;
  .subscribe {
    margin-top: 48px;
    height: 180px;
    background: #18181f;
    border-radius: 20px;
    display: flex;
    padding: 50px 150px 50px 70px;
    background: url(${subscribebg}) no-repeat;
    background-size: 100% auto;
    .left {
      flex: 1;
      h3 {
        font-size: 32px;
        font-family: Poppins-SemiBold, Poppins;
        font-weight: 600;
        color: #ffffff;
        line-height: 40px;
      }
      p {
        font-size: 16px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #ffffff;
        line-height: 16px;
      }
    }
    .right {
      flex: 1;
      text-align: right;
      span {
        display: inline-block;
        width: 186px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        font-size: 20px;
        font-family: Poppins-SemiBold, Poppins;
        font-weight: 600;
        color: #ffffff;
        line-height: 60px;
      }
    }
  }
  .title {
    text-align: center;
    font-size: 56px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #ffffff;
    line-height: 72px;
    /* background-image: linear-gradient(92deg,#f35626,#feab3a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: Hue 5s linear infinite;
            user-select: none; */
    @keyframes Hue {
      0% {
        filter: hue-rotate(0deg);
      }
      to {
        filter: hue-rotate(-1turn);
      }
    }
  }
  .addresscon {
    width: 1294px;
    height: 182px;
    border-radius: 20px;
    margin: 78px 0 24px;
    background: url(${securitybg}) no-repeat;
    background-size: 100% auto;

    p {
      margin: 0 136px;
    }
    p:nth-child(1) {
      font-size: 24px;
      font-family: Poppins-SemiBold, Poppins;
      font-weight: 600;
      color: #e13131;
      line-height: 32px;
      padding-top: 58px;
    }
    p:nth-child(2) {
      font-size: 16px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #ffffff;
      line-height: 16px;
      padding-top: 16px;
    }
  }
  .datacon {
    padding: 60px 32px 30px;
    background: rgba(31, 32, 45, 0.5);
    border-radius: 20px;
    .ant-tabs-bar {
      border-bottom: none !important;

      color: #ffffff !important;
      line-height: 28px !important;
      margin: 58px 0 0 0 !important;
    }
    .ant-tabs-ink-bar,
    .ant-tabs-ink-bar-animated {
      display: none !important;
    }
    .ant-tabs-nav,
    .ant-tabs-tab {
      margin-right: 16px !important;
      font-size: 20px !important;
      font-family: Poppins-Medium, Poppins;
      font-weight: 500 !important;
    }

    h4 {
      font-size: 24px;
      font-family: Poppins-SemiBold, Poppins;
      font-weight: 600;
      color: #ffffff;
      line-height: 32px;
      text-align: center;
      margin-bottom: 60px;
    }
    .showcard {
      display: flex;
      display: -webkit-flex;
      height: 120px;
      border-radius: 12px;
      justify-content: space-between;
      .item {
        flex: 1;
        border-radius: 12px;
        border: 1px solid #242836;
        text-align: center;
      }
      .item:nth-child(1) {
        background: linear-gradient(
          315deg,
          rgba(64, 70, 122, 0.3) 0%,
          rgba(58, 63, 108, 0.1) 26%,
          rgba(43, 48, 77, 0.6) 70%,
          #40467a 100%
        );
        border: none;
        border-radius: 12px;
        h3 {
          margin-top: 20px;
          font-size: 36px;
          font-family: Poppins-SemiBold, Poppins;
          font-weight: 600;
          line-height: 36px;
        }
        p {
          font-size: 16px;
          font-family: Poppins-Regular, Poppins;
          font-weight: 400;
          color: #ffffff;
          line-height: 24px;
        }
      }
      .item:nth-child(2),
      .item:nth-child(3) {
        h3 {
          margin-top: 26px;
          font-size: 20px;
          font-family: Poppins-SemiBold, Poppins;
          font-weight: 600;
          color: #636b80;
          line-height: 24px;
          background: linear-gradient(270deg, #636b80 0%, #9ca4b7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 16px;
          font-family: Poppins-Regular, Poppins;
          font-weight: 400;
          color: #636b80;
          line-height: 24px;
        }
      }
    }

    .listCom {
      padding-top: 20px;
      .headIntro {
        width: 100%;
        display: flex;
        height: 59px;
        justify-content: flex-end;
        div {
          font-size: 14px;
          font-family: Poppins-Medium, Poppins;
          font-weight: 500;
          color: #575a61;
        }
      }
    }
    .container {
      width: 100%;
      .listItems {
        height: 80px;
        display: flex;
        align-items: center;
        div {
          font-size: 16px;
          font-family: Poppins-Medium, Poppins;
          font-weight: 500;
          color: #ffffff;
          .rightPoint {
            width: 32px;
            height: 28px;
            cursor: pointer;
          }
          .chainImg {
            width: 24px;
            height: 24px;
            margin-left: 27px;
          }
        }
      }
      .empty {
        font-size: 16px;
        font-family: Poppins-Medium, Poppins;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
        margin-top: 200px;
      }
    }
  }

  .footerIntro {
    font-size: 14px;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #575a61;
    line-height: 22px;
    height: 22px;
    text-align: center;
    margin: 79px 0 100px 0;
  }
`;

export const ListDom = styled.div`
  width: 1221px;
  margin: 0 auto;
  .container {
    width: 100%;
    .listItems {
      height: 80px;
      display: flex;
      align-items: center;
      div {
        font-size: 16px;
        font-family: Poppins-Medium, Poppins;
        font-weight: 500;
        color: #ffffff;
        .rightPoint {
          width: 32px;
          height: 28px;
          cursor: pointer;
        }
        .chainImg {
          width: 18px;
          height: 18px;
          margin-right: 6px;
        }
      }
    }
    .empty {
      font-size: 16px;
      font-family: Poppins-Medium, Poppins;
      font-weight: 500;
      color: #ffffff;
      text-align: center;
      margin-top: 200px;
    }
  }

  .footerIntro {
    font-size: 14px;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #575a61;
    line-height: 22px;
    height: 22px;
    text-align: center;
    margin: 79px 0 100px 0;
  }
`;

export const SearchDom = styled.div`
  width: 573px;
  height: 60px;
  background: #ffffff;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 8px 0 15px;
  .icon {
    width: 18px;
    height: 18px;
    background: url(${search}) no-repeat;
  }
  .button {
    width: 97px;
    height: 44px;
    background: #3772ff;
    box-shadow: 0px 4px 8px 0px rgba(55, 114, 255, 0.4);
    border-radius: 8px;
    font-size: 14px;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    line-height: 44px;
    cursor: pointer;
  }
`;

export const InputCon = styled.input`
  border: none;
  outline: none;
  background: none;
  height: 44px;
  flex: 1;
  padding-left: 12px;
  font-size: 16px;
  font-family: Poppins-Regular, Poppins;
  font-weight: 400;
  color: #111112;
  padding-right: 15px;
  overflow: hidden;
`;

export const ItemDiv = styled.div<{ width: string; type: number }>`
  width: ${({ width }) => width};
  text-align: ${({ type }) =>
    type === 0 ? "center" : type === 1 ? "left" : "right"};
  &.fistinner {
    position: relative;
    .txt_tips {
      display: none;
      border-radius: 4px;
      width: 244px;
      padding: 16px 12px;
      background: #353945;
      backdrop-filter: blur(29px);
      position: absolute;
      bottom: -72px;
      left: 10px;
      z-index: 4;
      span {
        display: inline-block;
        position: absolute;
        top: -5px;
        width: 10px;
        height: 10px;
        background: #353945;
        transform: rotate(45deg);
      }
    }
    &:hover {
      .txt_tips {
        display: block;
      }
    }
  }
  &.chainText {
    span {
      font-size: 14px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #ffffff;
      line-height: 14px;
    }
    span:nth-child(2) {
      color: #636b80;
      padding-left: 5px;
      display: inline-block;
      text-transform: uppercase;
    }
    span:nth-child(1) {
      display: inline-block;
      width: 130px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &::before {
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(216, 216, 216, 0.2);
        margin-right: 10px;
      }
    }
  }
  .approve {
    display: inline-block;
    width: 130px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.chainBalance {
    span {
      font-size: 14px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #ffffff;
      line-height: 14px;

    }
    .itemstyle {
      display: inline-block;

      width: 65px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }

  .address {
    display: flex;
    margin-left: 14px;
    .item {
      img {
        width: 26px;
        height: 26px;
        margin-top: 14px;
      }
    }

    .item:nth-child(2) {
      margin-left: 16px;
      .noproject {
        line-height: 60px;
        margin: 0;
        font-size: 14px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #636b80;
        line-height: 14px;
      }
      span {
        display: block;
        line-height: 28px;
      }

      span:nth-child(1) {
        font-size: 14px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #ffffff;
      }
      span:nth-child(2) {
        font-size: 14px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #636b80;
      }
    }
  }
  .btn {
    width: 144px;
    height: 36px;
    background: #3772ff;
    border-radius: 6px;
    line-height: 36px;
    text-align: center;
    margin-left: 65px;
    cursor: pointer;
  }
  .btn1 {
    width: 144px;
    height: 36px;
    background: #3772ff;
    border-radius: 6px;
    line-height: 36px;
    text-align: center;
    margin-left: 130px;
  }
`;

export const ItemheadDiv = styled.div<{ width: string; type: number }>`
  width: ${({ width }) => width};
  height: 59px;
  line-height: 59px;
  background: #1d1f2a;
  text-align: ${({ type }) =>
    type === 0
      ? "center"
      : type === 1
      ? "left"
      : type === 2
      ? "right"
      : "center"};
  &.chainText {
    text-transform: uppercase;
  }
  .btn {
    width: 144px;
    height: 36px;
    background: #3772ff;
    border-radius: 6px;
    line-height: 36px;
    text-align: center;
    margin-left: 60px;
  }
`;

export const Items = styled.div`
  width: 22px;
  height: 22px;
  display: inline-block;
  position: relative;
  top: 5px;
  margin-left: 5px;
  img {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .showCopyed {
    position: absolute;
    bottom: -38px;
    right: -8px;
    width: 68px;
    height: 32px;
    background: #353945;
    border-radius: 8px;
    font-size: 12px;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    line-height: 32px;
  }
`;

export const ErrWraper = styled.div`
  width: 384px;
  min-height: 230px;
  background: #22262f;
  border-radius: 16px;
  backdrop-filter: blur(29px);
  padding: 40px;
  text-align: center;
  .notice {
    font-size: 24px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #ffffff;
    line-height: 32px;
    margin-bottom: 24px;
  }
  .info {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
  }
  .button {
    cursor: pointer;
    width: 146px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #353945;
    margin: 32px auto 0;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #ffffff;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
`;
export const BottomDiv = styled.div`
  width: 1294px;
  height: 620px;
  margin: 32px auto 0;
  display: flex;
  justify-content: space-between;
  > div {
    background: #161618;
    border-radius: 32px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .left {
    width: 854px;
  }
  .right {
    width: 408px;
  }
`;
export const ComingDiv = styled.div`
  width: 1294px;
  height: 340px;
  margin: 0 auto;
  background: url(${Tokenbg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 70px 0 0 50px;
  .tit {
    font-size: 44px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #ffffff;
    line-height: 52px;
  }
  .intro {
    font-size: 16px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    margin: 24px 0 48px 0;
  }
  .coming {
    width: 158px;
    height: 52px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    text-align: center;
    line-height: 52px;
    font-size: 16px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
  }
  .go {
    width: 110px;
    height: 52px;
    line-height: 52px;
    border-radius: 8px;
    border: 1px solid #ffffff;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    &::after {
      content: "";
      margin-left: 10px;
      display: inline-block;
      width: 12px;
      height: 12px;
      background: url(${arrowRight});
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
`;
export const IntroDiv = styled.div`
  margin: 0 auto 84px;
  width: 1294px;
  display: flex;
  > div {
    flex: 1;
    height: 160px;
    text-align: center;
    padding-top: 32px;
    .top {
      font-size: 44px;
      font-family: Poppins-SemiBold, Poppins;
      font-weight: 600;
      color: #ffffff;
      line-height: 60px;
      margin-bottom: 12px;
    }
    .bottom {
      font-size: 16px;
      font-family: Poppins-Regular, Poppins;
      font-weight: 400;
      color: #7d828c;
      line-height: 24px;
    }
  }
`;
