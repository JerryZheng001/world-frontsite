
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import html2canvas from "html2canvas";

import { ContractDetectionDetailDom, IntroTit, ReportDetail, ReportDom,ShowShareDropCon } from '../styled'
import EchartsShow from './echartsShow'
import { useCallbackState } from './useCallbackState';
import useCopyClipboard from '../../../hooks/useCopyClipboard';
import CopyShowTips from '../../../components/Tips';



const ResultDetail = [
    {
        title:'Contract source code verified',
        intro:'This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.',
        type:'1'
    },
    {
        title:'Contract source code verified',
        intro:'This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.',
        type:'2'
    },
    {
        title:'Contract source code verified',
        intro:'This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.',
        type:'3'
    },
]

export default function ContractDetectionDetail(): JSX.Element{
    const history = useHistory()

    const [ShowShareDrop, setShowShareDrop] = useState(false)
    const [isShare, setIsShare] = useCallbackState(false);
    const [isCopied, setCopied] = useCopyClipboard()
    const shareTwitter = () => {
        const toOpen = function(url: string) {
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
        setIsShare(true, function (data: any) {
          const el: any = document.getElementById('pic');
          let imgHeight = el.offsetHeight 
            let imgWidth = el.offsetWidth 
            let scale = window.devicePixelRatio
            console.log(imgWidth,'imgWidth');
            
            el.scrollIntoView()
          setTimeout(() => {
            html2canvas(el,{
              scale: scale,
              width: imgWidth,
              height: imgHeight
            }).then((canvas:any) => {
              let saveUrl = canvas.toDataURL('image/png')
              let a = document.createElement('a')
              document.body.appendChild(a)
              a.href = saveUrl
              a.download = 'Ships test ranking'
              a.click()
            setIsShare(false)
    
            })
          }, 300);
            
        })
      }

    return <ContractDetectionDetailDom className='ContractDetectionDetail'>
        <div className="container">
            <div className="title">Triathon Contract Detection Report</div>
            <div className="detect" onClick={()=>{
                history.push('/contract_detection')
            }}>Detect other contract</div>
            <div className="text">Notice : This detection is the basic item scan, please do not treat it as the final audit report.For the final report, please contact customer service for manual audit</div>
            <ReportDom>
                <div className="reportShow" id='pic'>
                    <div className="reportLogo"></div>
                    <IntroTit>Presented by Triathon 
                        <span className='Share' onClick={()=>{
                        setShowShareDrop(true)
                    }}></span>
                    <ShowShareDropCon>
                        <div className="item1" onClick={()=>{shareTwitter()}}>
                            <span></span>
                            Twitter
                        </div>
                        <div className="item2" onClick={sharePic}>
                            <span></span>
                            Save picture
                        </div>
                        <div className="item3" onClick={() => setCopied('https://www.triathon.space/#/ranking')}>
                            <span></span>
                            Copy link
                        </div>
                    </ShowShareDropCon>
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
                        <div className="right">How it works?</div>
                    </div>
                    <IntroTit>Distributed</IntroTit>
                    <div className="distributed">
                    <EchartsShow/>
                    </div>
                </div>
                <div className="reportDetail">
                <IntroTit>Detail</IntroTit>
                <ReportDetail>
                    {
                        ResultDetail.map((item,index)=>{
                            return <div className="item" key={index}>
                                <div className={item.type==='1'?'titleIntro green':item.type==='2'?'titleIntro yellow':'titleIntro red'}>{item.title}</div>
                                <div className="intro">{item.intro}</div>
                            </div>
                        })
                    }
                </ReportDetail>
                </div>
            </ReportDom>
            {isCopied && <CopyShowTips />}
        </div>
    </ContractDetectionDetailDom>
}






