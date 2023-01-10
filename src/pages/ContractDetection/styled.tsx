import styled from 'styled-components'
import point from '../../assets/images/contrastDetec/point@2x.png'



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
        .select{
            width: 149px;
            height: 60px;
            border-radius: 8px;
            border: 1px solid #23252C;
            margin-right: 12px;
        }
        .inputCon{
            width: 475px;
            height: 60px;
            border-radius: 8px;
            border: 1px solid #23252C;
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



 