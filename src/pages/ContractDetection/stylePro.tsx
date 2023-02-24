import styled from 'styled-components'
import StyleBg from '../../assets/images/contrastDetecPro/StyleBg.png'
import maskBg from '../../assets/images/contrastDetecPro/maskBg.png'
import introBg from '../../assets/images/contrastDetecPro/introBg.png'
import findBg from '../../assets/images/contrastDetecPro/findbg.png'
import disBg from '../../assets/images/contrastDetecPro/disBg.png'


export const ContractDetectionDetailProDom = styled.div`
    width: 100%;
    padding-top: 134px;
    background: url(${StyleBg});
    background-size: 100% 346px;
    background-repeat: no-repeat;
    min-height: 400px;
    position: relative;
    .maskDiv{
        position: absolute;
        top: 292px;
        width: 100%;
        height: 54px;
        background-image: url(${maskBg});
        background-size: 100% 100% ;
        background-repeat: no-repeat;
        z-index: 0;
    }
    
    
`

export const Container = styled.div`
    width: 1294px;
    margin: 0 auto;
    .header{
        .timer{
            font-size: 20px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 28px;
            margin-bottom: 24px;

        }
        .con{
            position: relative;
            padding: 24px 0 31px;
            p{
                height: 96px;
                font-size: 56px;
                font-family: Poppins;
                color: #FFFFFF;
                line-height: 96px;
                margin-bottom: 24px;

            }
            .text{
                font-size: 20px;
                font-family: Poppins-Regular, Poppins;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 28px;
            }
        }
    }
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: #FFFFFF;
    position: relative;
    
    &.up{
        &::before{
            position: absolute;
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, .5);
            content: '';
            left: 0;
            top: 10px;
        }
    }
    &.down{
        &::before{
            position: absolute;
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, .5);
            content: '';
            left: 0;
            top: -10px;
        }
    }
`
export const TitText = styled.div`
    height: 52px;
    font-size: 44px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 52px;
`

export const ItemsIntro = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-family: Poppins;
    line-height: 24px;
    color: #FFFFFF;
    .intro{
        color: rgba(99, 107, 128, 1);
    }
`
export const Executive = styled.div`
    margin-top: 335px;
    .con{
        height: 411px;
        margin-top: 28px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        .left{
            width: 525px;
            padding: 47px 32px;
            >div{
                margin-bottom: 24px;
            }
        }
    }

`

export const Summary = styled.div`
    margin-top: 199px;
    .introText{
        width: 100%;
        height: 180px;
        border-radius: 16px;
        margin: 50px 0 64px;
        background: url(${introBg}) 100% 100% no-repeat;
        padding: 50px 32px 0;
        font-size: 16px;
        font-family: Poppins-SemiBold, Poppins;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 28px;
    }
    .sumaryIntro{
        color: #FFFFFF;
        font-size: 16px;
        font-family: Poppins;
        color: #636B80;
        line-height: 24px;
        .head{
            display: flex;
            color: #636B80;
        }
        .sumaryCon{
            padding-top: 24px;
            .items{
                display: flex;
                font-size: 16px;
                font-family: Poppins-Medium, Poppins;
                font-weight: 500;
                color: #FFFFFF;
                margin-bottom: 18px;
            }
        }
        .id{
                width: 415px;
                padding-left: 32px;

        }
        .des{
            flex: 1;
        }
        .sev{
            text-align:right;
            padding-right: 32px;
            width: 415px;
        }
        .empty{
            margin-top: 50px;
            text-align: center;
            color: #fff;
        }
    }
`
export const ColorTexts = styled.span<{ type: string }>`
    font-size: 16px;
    border-radius: 8px;
    font-family: Poppins-SemiBold, Poppins;
    font-weight: 600;
    color: ${({ type }) => (type==='high'?'rgba(225, 49, 48, 1)':type==='medium'?'#FF761F':'#FFC92C')};
    background: ${({ type }) => (type==='high'?'rgba(225, 49, 48, .2)':type==='medium'?'rgba(255, 118, 31, .2)':'rgba(255, 201, 44, .2)')};
    padding: 4px 16px;
`

export const Findings = styled.div`
    margin-top: 204px;
    .findCon{
        margin-top: 48px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        .fingItems{
            padding: 60px 0;
            .title{
                display: flex;
                justify-content: space-between;
                font-size: 24px;
                font-family: Poppins-SemiBold, Poppins;
                font-weight: 600;
                color: #FFFFFF;
                line-height: 32px;
                .right{
                    color: rgba(255, 255, 255, .5);
                }
            }
            .button{
                text-align: right;
                margin: 22px 0 38px;


            }
            .con{
                width: 100%;
                padding: 48px 32px;
                height: auto;
                background: url(${findBg}) repeat;
                border-radius: 16px;
                >div{
                    font-size: 16px;
                    font-family: Poppins-Regular, Poppins;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 28px;
                }
            }
        }
    }
   
`

export const Disclaimer = styled.div`
    margin-top: 87px;
    height: 644px;
    background: url(${disBg}) ;
    background-size: 100% 644px;
    background-repeat: no-repeat;
    .container{
        width: 1294px;
        margin: 0 auto;
        padding-top: 174px;
        .tit{
            font-size: 44px;
            font-family: Poppins-SemiBold, Poppins;
            font-weight: 600;
            color: #636B80;
            line-height: 52px;
            margin-bottom: 50px;
        }
        .text{
            font-size: 16px;
font-family: Poppins-Regular, Poppins;
font-weight: 400;
color: #636B80;
line-height: 28px;
        }
    }
`