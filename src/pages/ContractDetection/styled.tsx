import styled from 'styled-components'
import point from '../../assets/images/contrastDetec/point@2x.png'
import reportLogo from '../../assets/images/contrastDetec/reportLogo.png'
import SharePic from '../../assets/images/contrastDetec/SharePic.png'
import CopySvg from '../../assets/images/contrastDetec/CopySvg.svg'
import twitterSvg from '../../assets/images/contrastDetec/twitterSvg.svg'
import picSvg from '../../assets/images/contrastDetec/picSvg.svg'
import ShareBg from '../../assets/images/contrastDetec/ShareBg.png'



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
        span{
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
        }
    }
`
export const StyledInput = styled.input`
        width:100%;
        border: none;
        background: none;
        outline: none;
        font-size: 16px;
        font-family: Poppins-Regular, Poppins;
        font-weight: 600;
        color: #FFFFFF;
        padding-left: 20px;
        height: 60px;
        line-height: 60px;
        &::placeholder{
            font-size: 16px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #575A61;
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
            width: 20px;
            height: 18px;
            background: linear-gradient(180deg, #6B9BFF 0%, #2561F0 100%);
            margin-right: 10px;

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
        height: 2376px;
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
        }
        margin-bottom: 40px;
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
                background: #FFFFFF;
                border-radius: 9px;
                opacity: 0.06;
                margin-right: 16px;
            }
            .text{
                .top{
                    font-size: 16px;
                    font-family: Poppins-Regular, Poppins;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 16px;
                    margin-bottom: 12px;
                }
                .bottom{
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