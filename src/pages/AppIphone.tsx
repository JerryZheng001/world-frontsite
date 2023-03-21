import React, { useState } from 'react';
import styled from 'styled-components'
import IconClose from '../components/Icons/IconClose';
import PcModal from '../components/Modal/PcModal';
import CopyShowTips from '../components/Tips';
import useCopyClipboard from '../hooks/useCopyClipboard';

const Content = styled.div`
    width: 335px;
    height: 276px;
    background: #22262F;
    border-radius: 12px;

    .head{
        height: 68px;
        position: relative;
        padding: 23px 0 0 24px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        .text{
            font-size: 18px;
            font-family: Poppins-SemiBold, Poppins;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 22px;
        }
        >div{
            position: absolute;
            width: 32px;
            height: 32px;
            top: 38px;
            right: 24px;
            >svg{
                width: 16px;
                height: 16px;
                top: 5px;
                left: 5px;
            }
    cursor: pointer;

            &:hover {
    background: #fff;
    border: none;
    svg {
      color: #353945;
    }
  }
        }
    }
    .con{
        padding: 22px 24px;
        .intro{
            font-size: 14px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 22px;
        }
        .link{
            font-size: 14px;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #3772FF;
            line-height: 20px;
            margin: 14px 0 32px 0;
        }
        .copy{
            width: 137px;
            height: 44px;
            border-radius: 8px;
            border: 1px solid #353945;
            margin: 0 auto;
            font-size: 14px;
            font-family: Poppins-Medium, Poppins;
            font-weight: 500;
            color: #FFFFFF;
            text-align: center;
            line-height: 44px;
            &:hover{
                background: #fff;
                color: #22262F;
            }
        }
    }
`

function AppIphone() {
    const [isOpen, setisOpen] = useState(true)
    const [isCopied, setCopied] = useCopyClipboard()
    return (
        <div className="AppIphone">
            <PcModal isOpen={isOpen} minWidth={335} onDismiss={() => setisOpen(false)} maxHeight={276}>
                <Content>
                    <div className="head">
                        <span className='text'>Notice</span>

                        <IconClose right={true} onEvent={() => setisOpen(false)} />
                    </div>
                    <div className="con">
                        <div className="intro">Please use the PC webpage to open and
                            access the latest version</div>
                            <div className="link">https://detection.triathon.space/#/</div>
                            <div className="copy" onClick={()=>{
                                setCopied('https://www.triathon.space/wallet_security/#/')
                            }}>Copy</div>
                    </div>
                </Content>
            </PcModal>
            {isCopied && <CopyShowTips />}

        </div>
    )
}

export default AppIphone