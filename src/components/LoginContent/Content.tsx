import React from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
// import { Card } from 'antd'
const StyleTitleContent = styled(Title).attrs({
    size:'24'
})`
  @media screen and (max-width: 600px){
    padding:30px 100px 50px;
  }
    padding:18px;

font-family: AppleSystemUIFont;
`

const StyleContent = styled.div`
    width:100%;
    height:100%;
    background:#42B6D6;
    position:relative;
  min-height:941px;
    .copyRight{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
    }
`
const StyleMain = styled.div<{MainColor?:string,width?:string}>`


    width:${({width}) => width || '30%'};
    height:auto;
    // padding-bottom:30%;
    position:absolute;
    left:50%;
    top:50%;
    background:${({MainColor}) => MainColor || 'transparent'};
    border-radius:12px;
    transform:translate(-50%,-50%);
  @media screen and (max-width: 2000px){
    width:${({width}) => width || '50%'}
  }
  @media screen and (max-width: 900px){
    width:${({width}) => width || '80%'}
  }
  @media screen and (max-width: 600px){
    width:95%;
    top:80px;
    left:50%;
    right:0;
    background:${({MainColor}) => MainColor || 'transparent'};
    border-radius:12px;
    transform:translate(-50%,0);
  }
    .formContent{
        width:100%;
        height:100%;
        
    }
    .ant-card-head{
        text-align:center;
        // height:100px;
        line-height:60px;
    }
    .ant-card-body{
        background:#F8F8F8;
    }
    .login_btn{
        background:#42B6D6;
        display:block;
        width:100%;
        color:#fff;
        height:56px;
        border-radius:8px;
    }
    .info_login{
        color: rgba(0, 0, 0, 0.25);
    }
    .ant-form-item-label > label{
        font-size:14px;
        color: rgba(0, 0, 0, 0.65);
    }
    .ant-input{
        line-height:3;
        border-radius:8px;
    }
    .ant-card{
        border-radius:12px!important;
    }
    .ant-card-body{
        border-radius:0 0 12px 12px;
    }
    .capBtn{
        
    }
`

export default function Content({children,MainColor,width}:{children:any,MainColor?:string,width?:string}):JSX.Element{
    return (
        <StyleContent>
            <StyleTitleContent>Mainstage</StyleTitleContent>
            <StyleMain MainColor={MainColor} width={width}>
                {children}
            </StyleMain>
            <Title size="14" className="copyRight" color="#eee">@2021 Mainstage.Terms of Service</Title>
        </StyleContent>
    )
}