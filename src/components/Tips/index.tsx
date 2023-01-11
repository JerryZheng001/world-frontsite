import React from 'react'
import styled from 'styled-components'
import Succes from '../../assets/images/tips/success.svg'

const ShowTips = styled.div`
position: fixed;

bottom: 20px;
left: 50%;
transform: translateX(-50%);
padding: 10px 16px;
font-size: 16px;
font-family: Poppins-Regular, Poppins;
font-weight: 400;
color: #111112;
line-height: 25px;
background: #ffffff;
border-radius: 8px;
text-align: center;
z-index:9999;
img {
  width: 18px;
  height: 18px;
}
`

export default function CopyShowTips() {
    return (
      <ShowTips>
        <img src={Succes} style={{ width: 24, height: 24, marginRight: 12 }} alt="" />
        Copy successful！
      </ShowTips>
    )
  }