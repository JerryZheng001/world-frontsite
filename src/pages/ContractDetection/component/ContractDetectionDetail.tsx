
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import html2canvas from "html2canvas";

import { CloseColor, ContractDetectionDetailDom, IntroTit, ReportDetail, ReportDom, ShowShareDropCon, WrokContainer } from '../styled'
import EchartsShow from './echartsShow'
import { useCallbackState } from './useCallbackState';
import useCopyClipboard from '../../../hooks/useCopyClipboard';
import CopyShowTips from '../../../components/Tips';
import QRCodeDom from './Code';
import PcModal from '../../../components/Modal/PcModal';



const ResultDetail = [
    {
        title: 'Contract source code verified',
        intro: 'This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.',
        type: '1'
    },
    {
        title: 'Contract source code verified',
        intro: 'This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.',
        type: '2'
    },
    {
        title: 'Contract source code verified',
        intro: 'This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.',
        type: '3'
    },
]

export default function ContractDetectionDetail(): JSX.Element {
    const history = useHistory()

    const [ShowShareDrop, setShowShareDrop] = useState(false)
    const [isShare, setIsShare] = useCallbackState(false);
    const [isCopied, setCopied] = useCopyClipboard()

    const [isOpen, setisOpen] = useState(false)


    const shareTwitter = () => {
        setShowShareDrop(false)
        const toOpen = function (url: string) {
            const option =
                'toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350'
            window.open(url, '_blank', option)
        }
        const title = 'BSC  Detection (BSC  Detection, a technical insight into BSC)'
        // const href = encodeURIComponent(document.location.href);
        const href = 'https://www.triathon.space/contract_detection';

        toOpen('https://twitter.com/share/?text=' + title + '&url=' + href)
    }

    const sharePic = () => {
        setShowShareDrop(false)
        setIsShare(true, function (data: any) {
            const el: any = document.getElementById('pic');
            let imgHeight = el.offsetHeight
            let imgWidth = el.offsetWidth
            let scale = window.devicePixelRatio
            // el.scrollIntoView()
                html2canvas(el, {
                    scale: scale,
                    width: imgWidth,
                    height: imgHeight
                }).then((canvas: any) => {
                    let saveUrl = canvas.toDataURL('image/png')
                    let a = document.createElement('a')
                    document.body.appendChild(a)
                    a.href = saveUrl
                    a.download = 'report'
                    a.click()
                    setIsShare(false)
                })

        })
    }

    return <ContractDetectionDetailDom className='ContractDetectionDetail'>
        <div className="container">
            <div className="title">Triathon Contract Detection Report</div>
            <div className="detect" onClick={() => {
                history.push('/contract_detection')
            }}>Detect other contract</div>
            <div className="text">Notice : This detection is the basic item scan, please do not treat it as the final audit report.For the final report, please contact customer service for manual audit</div>
            <ReportDom>
                <div className={isShare?'SharereportShow':'reportShow'} id='pic' >
                    {
                        !isShare && <div className="reportLogo"></div>
                    }
                    
                    <IntroTit>Presented by Triathon
                       {
                        !isShare &&  <>
                        <span className='Share' onClick={() => {
                            setShowShareDrop(!ShowShareDrop)
                        }}></span>
                        {
                            ShowShareDrop && <ShowShareDropCon>
                            <div className="item1" onClick={() => { shareTwitter() }}>
                                <span></span>
                                Twitter
                            </div>
                            <div className="item2" onClick={sharePic}>
                                <span></span>
                                Save picture
                            </div>
                            <div className="item3" onClick={() => {
                                setCopied('https://www.triathon.space/#/ranking')
                                setShowShareDrop(false)
                            }}>
                                <span></span>
                                Copy link
                            </div>
                        </ShowShareDropCon>
                        }
                        </>
                       }
                        
                        
                    </IntroTit>
                    <div className="present">
                        <div className="item">
                            <span>Detect User: </span>
                            <span></span>
                        </div>
                        <div className="item">
                            <span>Detect time: </span>
                            <span></span>
                        </div>
                    </div>
                    <IntroTit>Contract Info</IntroTit>
                    <div className="contractInfo">
                        <div className="item">
                            <span>Chain</span>
                            <span></span>
                        </div>
                        <div className="item">
                            <span>Contact Address</span>
                            <span></span>
                        </div>
                    </div>
                    <IntroTit>Security Detection Result</IntroTit>
                    <div className="result">
                        <div className="left">
                            <div className="icon"></div>
                            <div className="text">
                                <div className="top">Excellent</div>
                                <div className="bottom">
                                    <span className='colorText'>92</span>
                                    <span >  / 100</span>
                                </div>
                            </div>
                        </div>
                        {
                            !isShare && <div className="right"  onClick={()=>setisOpen(true)}>How it works?</div>
                        }
                        
                    </div>
                    <IntroTit>Distributed</IntroTit>
                    <div className="distributed">
                        <EchartsShow />
                    </div>
                    {
                        isShare && <div className="code">
                        <QRCodeDom url='http://164.52.93.82:8002/#/'/>
                    </div>
                    }
                </div>

                <div className="reportDetail">
                    <IntroTit>Detail</IntroTit>
                    <ReportDetail>
                        {
                            ResultDetail.map((item, index) => {
                                return <div className="item" key={index}>
                                    <div className={item.type === '1' ? 'titleIntro green' : item.type === '2' ? 'titleIntro yellow' : 'titleIntro red'}>{item.title}</div>
                                    <div className="intro">{item.intro}</div>
                                </div>
                            })
                        }
                    </ReportDetail>
                </div>
            </ReportDom>
            {isCopied && <CopyShowTips />}
        </div>
        <PcModal isOpen={isOpen} minWidth={683} onDismiss={()=>setisOpen(false)} minHeight={537}>
            <WrokContainer>
                <div className="header">
                    <div className="left">How it work</div>
                    <div className="close" onClick={()=>setisOpen(false)}>  <CloseColor></CloseColor>
                    </div>
                </div>
                <div className="con">
                    <p> The Triathon platform backed by Core security detection engine.</p>
                    <p>Core security testing platform incorporate the fuzzing-test testing method and the concept of chaos engineering (experimental) to redefine the way of blockchain security testing.</p>
                    <div className="title">Main utilities of “CORE”</div>
                    <p>1. (Testing) Tool building: <br/>A collection of various testing tools. Testing capabilities will be packaged in the form of API and be provided to third parties including security white hats in the future.</p>
                    <p>2. API building: <br/>CORE continuously converts vulnerabilities into testing methods and outputs APIs.</p>
                    <p>3. Developer management:<br/>Eco-developers mint new NFT (i. e. test service) based on API; or they can report vulnerabilities based on their use of the API application.</p>
                    <p>4. Vulnerability conversion: <br/>The vulnerability platform is a key component of CORE’s continuous capacity building.</p>
                </div>
            </WrokContainer>
        </PcModal>
    </ContractDetectionDetailDom>
}






