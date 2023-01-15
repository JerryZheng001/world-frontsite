import styled from 'styled-components'
import point from '../../assets/images/contrastDetec/point@2x.png'
import reportLogo from '../../assets/images/contrastDetec/reportLogo.png'
import SharePic from '../../assets/images/contrastDetec/SharePic.png'
import CopySvg from '../../assets/images/contrastDetec/CopySvg.svg'
import twitterSvg from '../../assets/images/contrastDetec/twitterSvg.svg'
import picSvg from '../../assets/images/contrastDetec/picSvg.svg'
import ShareBg from '../../assets/images/contrastDetec/ShareBg.png'
import {ReactComponent as close} from '../../assets/images/contrastDetec/close.svg'
import search from '../../assets/images/contrastDetec/search.svg'
import copyImg from '../../assets/images/contrastDetec/copyImg.svg'
import uploadFile from '../../assets/images/contrastDetec/uploadFile.svg'
import coreImg from '../../assets/images/contrastDetec/coreImg.png'
import loadingPic from '../../assets/images/contrastDetec/loading.png'



export const ContainerCon = styled.div<{ isPadding?: boolean }>`
  width: 100%;
  height: 100%;
  .container{
    padding-top: 87px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`
export const WidthDiv = styled.div`

    .title{
        font-size: 56px;
        font-family: Poppins-SemiBold, Poppins;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 64px;
        margin-bottom: 72px;
        /* color: #c7d63c; */
        /* background-image: linear-gradient(90deg, #6e40aa, #963db3, #bf3caf, #e3419e, #fe4b83, #ff5e64, #ff7747, #fb9633, #e2b72f, #c7d63c, #c7d63c);
        background-position: 100% 0;
        background-size: 500% 100%;
        transition: background-position 1s linear;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: 1.75s linear 0s infinite alternate both running textGradient; */
        @keyframes textGradient {
        from {
            background-position: 100% 0;
        }
        to {
            background-position: 0% 0;
        }
}


    }
    .tabs{
        text-align: center;
        height: 28px;
        margin-bottom: 40px;
        >span{
            cursor: pointer;
            font-size: 20px;
            font-family: Poppins-SemiBold, Poppins;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 28px;
        }
        .tab1{
            margin-right: 80px;
        }
        .active{
            color: #3772FF;
        }
    }
    .addreccCon{
        display: flex;
        justify-content: center;
        height: 60px;
        position: relative;
        .select{
            width: 149px;
            height: 60px;
            border-radius: 8px;
            border: 1px solid #23252C;
            margin-right: 12px;
            .ant-select{
                width: 149px;
                height: 60px;
                .ant-select-selection{
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
                    img{
                        width: 30px;
                        height: 30px;
                        margin-right: 8px;
                    }
                    .ant-select-selection__rendered,.ant-select-selection-selected-value{
                        height: 60px;
                        font-size: 16px;
                        font-family: Poppins-Medium, Poppins;
                        font-weight: 500;
                        line-height: 60px;
                        margin: 0;
                        display: flex;

                    }
                    .ant-select-arrow{
                        i svg{
                            width: 15px;
                            height: 15px;
                            color: #fff;
                            position: relative;
                            top: -2px;
                        }
                    }
                }
            }
            .ant-select-focused,.ant-select-enabled{
                border: none;
            }
        }
        .inputCon{
            width: 475px;
            height: 60px;
            border-radius: 8px;
            border: 1px solid #23252C;
        }
        .err{
            position: absolute;
            bottom: -40px;
            color: red;
            left: 65px;
        }
    }
    .notice{
        width: 636px;
        height: 40px;
        font-size: 12px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #636B80;
        line-height: 20px;
        margin: 0 auto;
        text-align: center;

    }
    .detect{
        height: 50px;
        line-height: 50px;
        text-align: center;
        width: 636px;
        margin: 48px auto 0;
        font-size: 16px;
        font-family: Poppins-Medium, Poppins;
        font-weight: 500;
        color: #FFFFFF;
        cursor: pointer;
        .pointRight{
            width: 12px;
            height: 12px;
            display: inline-block;
            background: url(${point}) no-repeat;
            background-size: 100% 100%;
            margin-left: 5px;
        }
    }
    .fileCon{
        width: 636px;
        margin: 0 auto;
        height: auto;
        .uploadBefore{
            width: 100%;
            height: 144px;
            background: #161719;
            border-radius: 16px;
            border: 1px solid #23252C;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
        }
    }
`

export const ShowDecting = styled.div`
    width: 636px;
    height: 144px;
    background: #161719;
    border-radius: 16px;
    border: 1px solid #23252C;
    margin-bottom: 24px;
    margin: 0 auto 24px;
    .loading{
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
    .text{
        width: 100%;
        text-align: center;
        font-size: 16px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #FFFFFF;
    }

`
export const StyledInput = styled.input<{ShowRed?:boolean}>`
        width:100%;
        background: none;
        outline: none;
        font-size: 16px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 600;
        color: #FFFFFF;
        padding-left: 20px;
        height: 60px;
        line-height: 60px;
        border: ${({ ShowRed }) => !ShowRed ? '1px solid rgba(254, 55, 55, 1)' : 'none'};
        border-radius: 8px;
        &::placeholder{
            font-size: 16px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #575A61;
        }
        caret-color:#3772FF;
        &:focus{
            border: 1px solid ;
            border-color: ${({ ShowRed }) => !ShowRed ? 'rgba(254, 55, 55, 1)' : 'rgba(55, 114, 255, 1)'};;
            border-radius: 8px;
        }
`
export const StyleSolInputUp = styled.div`
        width: 209px;
        height: 44px;
        background: #FFFFFF;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: Poppins-Medium, Poppins;
        font-weight: 500;
        color: #111112;
        cursor: pointer;
        span{
            display: inline-block;
            width: 24px;
            height: 24px;
            background: linear-gradient(180deg, #6B9BFF 0%, #2561F0 100%);
            margin-right: 10px;
            background: url(${uploadFile});
        }
        position: relative;
        >input{
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
        
`
export const FileContent = styled.div`
    width: 636px;
    height: 240px;
    margin: 0 auto;
`
export const StyleButton = styled.div<{ width?: string; height?: string; disabled?: boolean }>`
    width: 636px;
    height: 50px;
    background: #3772FF;
    border-radius: 8px;
    color: ${({ disabled }) => disabled ? 'rgba(255, 255, 255, .4)' : 'rgba(255, 255, 255, 1)'};
    background: ${({ disabled }) =>
    disabled
    ? 'rgba(55, 114, 255, .4)'
    : 'rgba(55, 114, 255, 1)'};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    font-size: 16px;
    font-family: Poppins-Medium, Poppins;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 50px;
    text-align: center;
    margin: 56px auto 24px;
`
export const StyleCodeDom = styled.div`
    width: 636px;
    height: 240px;
    border-radius: 8px;
    border: 1px solid #23252C;
    .CodeMirror{
        height: 240px !important;
        border-radius: 8px;
    }
`



 export const ContractDetectionDetailDom = styled.div`
    width: 100%;
    padding-top: 134px;
    .container{
        max-width: 1294px;
        width: 1294px;
        text-align: center;
        margin: 0 auto;
        text-align: center;
        .title{
            font-size: 48px;
            font-family: Poppins-SemiBold, Poppins;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 56px;
        }
        .detect{
            width: 636px;
            height: 50px;
            background: #3772FF;
            border-radius: 8px;
            cursor: pointer;
            line-height: 50px;
            text-align: center;
            font-size: 16px;
            font-family: Poppins-Medium, Poppins;
            font-weight: 500;
            color: #FFFFFF;
            margin: 64px auto 24px;
        }
        .text{
            width: 636px;
            height: 40px;
            font-size: 12px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #636B80;
            line-height: 20px;
            margin: 0 auto 64px;

        }
    }
 `

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
            width: 100px;
            height: 30px;
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
                .top{
                    font-size: 16px;
                    font-family: Poppins-Regular, Poppins;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 16px;
                }
                .bottom{
                    margin-bottom: 14px;
                    .colorText{
                        font-size: 28px;
                        font-family: Poppins-SemiBold, Poppins;
                        font-weight: 600;
                        color: #1DD6D0;
                        line-height: 28px;
                    }
                    font-size: 18px;
                    font-family: Poppins-SemiBold, Poppins;
                    font-weight: 600;
                    color: #FFFFFF;
                    line-height: 18px;
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
 `

export const ColorText = styled.span<{type:number}>`
     font-size: 28px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: ${({ type }) => (type===0?'#6C7897':type===1?'#E13131':type===2?'#FFC32B':type===3?'#20DDB5':'#754CFF')};
    line-height: 28px;
`

 export const IntroTit = styled.div`
    font-size: 24px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 24px;
    margin: 24px 0 32px 0;
    text-align: left;
    position: relative;
    .Share{
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
 `
 export const IntroTitle = styled.div`
    height: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 16px;
font-family: Poppins-SemiBold, Poppins;
font-weight: 600;
color: #FFFFFF;
    .leftintro{
        font-size: 16px;
        font-family: Poppins-SemiBold, Poppins;
        font-weight: 600;
        color: #FFFFFF;
    }
    .rightIntro{
        font-size: 16px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #FFFFFF;
    }

 `
export const ShowShareDropCon = styled.div`
    position: absolute;
    bottom: -128px;
    right: 0;
    width: 122px;
    height: 120px;
    background: #242528;
    border-radius: 8px;
    >div{
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 12px;
        font-size: 12px;
        font-family: Poppins-Medium, Poppins;
        font-weight: 500;
        color: #FFFFFF;
        cursor: pointer;
        &:hover{
            background: #3772FF;
        }
    }
    .item1{
        border-radius: 8px 8px 0px 0px;
        span{
            width: 14px;
            height: 14px;
            background: url(${twitterSvg}) no-repeat;
            background-size: 100% 100%;
            margin-right: 8px;
        }
        
    }
    .item2{
        span{
            width: 14px;
            height: 14px;
            background: url(${picSvg}) no-repeat;
            background-size: 100% 100%;
            margin-right: 8px;
        }
        
    }
    .item3{
        border-radius: 0px 0px 8px 8px;
        span{
            width: 14px;
            height: 14px;
            background: url(${CopySvg}) no-repeat;
            background-size: 100% 100%;
            margin-right: 8px;
        }
        
    }
`
 export const ReportDetail = styled.div`
 text-align: left;
    .titleIntro{
        height: 26px;
        font-size: 18px;
        font-family: Poppins-SemiBold, Poppins;
        font-weight: 600;
        line-height: 26px;
        margin-bottom: 12px;
        position: relative;
        img{
            width: 30px;
            height: 30px;
            margin-right: 12px;
        }
    }
    .green{
        color: #1DD6D0;
    }
    .yellow{
        color: #FFB340;
    }
    .red{
        color: #FE4747;
    }
    .intro{
        font-size: 14px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 22px;
        margin-bottom: 32px;
    }
 `

export const CloseColor = styled(close)<{ strokeColor?: string }>`
width: 18px;
height: 18px;
  path {
    stroke: ${({ theme, strokeColor }) => (strokeColor ? strokeColor : '#000')};
  }
`
export const WrokContainer = styled.div`
    width: 683px;
    height: 537px;
    background: #22262F;
    border-radius: 16px;
    backdrop-filter: blur(29px);
    padding: 40px;
    .header{
        margin-bottom: 40px;
        position: relative;
        .left{
            font-size: 24px;
            font-family: Poppins-SemiBold, Poppins;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 32px;
        }
        .close{
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
            :hover{
                background: #fff;
                border: none;
                path {
                    stroke: '#000';
                }
            }
            
        }

    }
    .con{
        p{
            font-size: 12px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 20px;
        }
        .title{
            font-size: 16px;
            font-family: Poppins-Medium, Poppins;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 24px;
            margin-bottom: 16px;
        }
    }
`

export const HistoryDom = styled.div`
    padding-top: 134px;
    width: 1294px;
    margin: 0 auto;
    .title{
        text-align: center;
        font-size: 48px;
        font-family: Poppins-SemiBold, Poppins;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 56px;
        margin-bottom: 14px;

    }
    .showTitle{
        width: 370px;
        margin: 0 auto 48px;
        font-size: 48px;
        font-family: Poppins-SemiBold, Poppins;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 56px;
        background: linear-gradient(270deg, #72ACFF 0%, #5846F9 35%, #45D8FB 64%, #FF63EB 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        user-select: none;
    }
    .listCom{
        padding-top: 48px;
        .headIntro{
            width: 100%;
            display: flex;
            height: 59px;
            justify-content: flex-end;
            div{
                font-size: 14px;
                font-family: Poppins-Medium, Poppins;
                font-weight: 500;
                color: #575A61;
            }
        }
    }
    .container{
        width: 100%;
        .listItems{
            height: 80px;
            display: flex;
            align-items: center;
            div{
                font-size: 16px;
                font-family: Poppins-Medium, Poppins;
                font-weight: 500;
                color: #FFFFFF;
                .rightPoint{
                    width: 32px;
                    height: 28px;
                    cursor: pointer;
                }
                .chainImg{
                    width: 18px;
                    height: 18px;
                    margin-right: 6px;
                }
            }
        }
        .empty{
            font-size: 16px;
            font-family: Poppins-Medium, Poppins;
            font-weight: 500;
            color: #FFFFFF;
            text-align: center;
            margin-top: 200px;

        }
    }
    .footerIntro{
        font-size: 14px;
        font-family: Poppins-Medium, Poppins;
        font-weight: 500;
        color: #575A61;
        line-height: 22px;
        height: 22px;
        text-align: center;
        margin: 79px 0 100px 0;
    }
`

export const SearchDom = styled.div`
    width: 573px;
    height: 60px;
    background: #FFFFFF;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 8px 0 15px;
    .icon{
        width: 18px;
        height: 18px;
        background: url(${search}) no-repeat;
    }
    .button{
        width: 97px;
        height: 44px;
        background: #3772FF;
        box-shadow: 0px 4px 8px 0px rgba(55,114,255,0.4);
        border-radius: 8px;
        font-size: 14px;
        font-family: Poppins-Medium, Poppins;
        font-weight: 500;
        color: #FFFFFF;
        text-align: center;
        line-height: 44px;
        cursor: pointer;
    }
`

export const InputCon = styled.input`
    border: none;
    outline: none;
    background: none;
    height: 44px;
    flex: 1;
    padding-left: 5px;
    font-size: 16px;
    font-family: Poppins-Regular, Poppins;
    font-weight: 400;
    color: #111112;
    padding-right: 15px;
    overflow: hidden;
`

export const ItemDiv = styled.div<{width:string,type:number}>`
 width: ${({ width }) => width };
 text-align: ${({ type }) => type===0?'center':type===1?'left':'right' };

`


export const Items = styled.div`
width: 22px;
height: 22px;
display: inline-block;
position: relative;
top: 5px;
margin-left: 5px;
img{
    cursor: pointer;
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
}
.showCopyed{
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
  color: #FFFFFF;
  text-align: center;
  line-height:  32px;
}
`


export const ErrWraper = styled.div`
    width: 384px;
    min-height: 230px;
    background: #22262F;
    border-radius: 16px;
    backdrop-filter: blur(29px);
    padding: 40px ;
    text-align: center;
    .notice{
        font-size: 24px;
        font-family: Poppins-SemiBold, Poppins;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 32px;
        margin-bottom: 24px;

    }
    .info{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 22px;
    }
    .button{
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
        color: #FFFFFF;
        &:hover{
            background: #fff;
            color: #000;
        }
    }
`