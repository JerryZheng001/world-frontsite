
import React, { useEffect, useState } from 'react'
import { useHistory, } from 'react-router-dom'
import html2canvas from "html2canvas";

import { CloseColor, ContractDetectionDetailDom, IntroTit, IntroTitle, Items, ReportDetail, ReportDom, ShowShareDropCon, WrokContainer } from '../styled'
import EchartsShow from './echartsShow'
import { useCallbackState } from './useCallbackState';
import useCopyClipboard from '../../../hooks/useCopyClipboard';
import CopyShowTips from '../../../components/Tips';
import QRCodeDom from './Code';
import PcModal from '../../../components/Modal/PcModal';
import ethPic from '../../../assets/images/contrastDetec/ethPic.png'
import bscPic from '../../../assets/images/contrastDetec/bscPic.png'
import hasCopyed from '../../../assets/images/contrastDetec/hasCopyed.svg'
import copy from '../../../assets/images/contrastDetec/copy.svg'

import low from '../../../assets/images/contrastDetec/low@2x.png'
import high from '../../../assets/images/contrastDetec/mid@2x.png'
import mid from '../../../assets/images/contrastDetec/high@2x.png'


import { getFile, getTestResult } from '../../../utils/fetch/detect';
import { StyleCode } from './StyleCode';
import ErrModel from './ErrModel';




function CopyShowTipsSmall({ account, }: { account: string }) {
    const [isCopied, setCopied] = useCopyClipboard()
    const openNotification = () => {
        !isCopied && setCopied(account)
    }
    return (
        <Items>
            <img src={!isCopied ? copy : hasCopyed} alt="" onClick={openNotification} />
            {
                isCopied && <div className="showCopyed">Copied!</div>
            }
        </Items>
    )
}

interface InfoData {
    chain: string,
    contract_address: string,
    score: string,
    time: any,
    user: string
}

interface ResultDetailList {
    id: number;
    title: string;
    level: string;
    description: string;
}
interface EchartList {
    type: string;
    count: number;
    ratio: string;
}

const ShowText = ['Significant Risk', 'High Risk', 'Medium Risk', 'Some Risk', 'Excellent']

export default function ContractDetectionDetail(params: any): JSX.Element {
    const history = useHistory()

    const [ShowShareDrop, setShowShareDrop] = useState(false)
    const [isShare, setIsShare] = useCallbackState(false);
    const [isCopied, setCopied] = useCopyClipboard()
    const [isOpen, setisOpen] = useState(false)
    const [IntroInfo, setIntroInfo] = useState({
        chain: '', contract_address: '', score: '', time: '', user: ''
    } as InfoData)
    const [ResultDetail, setResultDetail] = useState([] as ResultDetailList[])
    const [echartDate, setechartDate] = useState([] as EchartList[])

    const [UploadType, setUploadType] = useState('address')
    const [FileValue, setFileValue] = useState('')



    const [ErrOpen, setErrOpen] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')


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


    //报告详情
    const getReportDetail = (id: any) => {
        getTestResult({ id }).then((res:any) => {
            console.log(res,'ressss',JSON.stringify(res.data));

            if(res.code===200){
                
                
                if(JSON.stringify(res.data) === '{}'){
                    setErrOpen(true)
                    seterrorMsg(res.msg)
                }else{
                    const { list, score_ratio: { result }, chain, contract_address, score, time, user } = res.data
                    const Info = {
                        chain: chain || '', contract_address: contract_address || '', score: score || '', time: time || '', user: user || ''
                    }
                    setIntroInfo(Info)
                    setResultDetail(list)
                    setechartDate(result)
                    if (!contract_address) {
                        setUploadType('file')
                        showFile()
                    }
                }
            }else{
                setErrOpen(true)
                seterrorMsg(res.msg)
            }
            
        })

    }

    //关闭错误弹框
    const closeErrTip = () => {
        setErrOpen(false)
        seterrorMsg('')
        history.push('/contract_detection')
    }


    const showFile = () => {
        const { params: { id } } = params.match
        getFile({ id }).then((res: any) => {
            setFileValue(res)
        })
    }

    useEffect(() => {

        const { params: { id } } = params.match
        getReportDetail(id)

        return () => {

        }
         // eslint-disable-next-line
    }, [params.match])




    return <ContractDetectionDetailDom className='ContractDetectionDetail'>
        <div className="container">
            <div className="title">Triathon Contract Detection Report</div>
            <div className="detect" onClick={() => {
                history.push('/contract_detection')
            }}>Detect other contract</div>
            <div className="text">Notice : This detection is the basic item scan, please do not treat it as the final audit report.For the final report, please contact customer service for manual audit</div>
            <ReportDom>
                <div className={isShare ? 'SharereportShow' : UploadType==='address'?'reportShow':'reportShow fileConNew'} id='pic' >
                    {
                        !isShare && <div className="reportLogo"></div>
                    }

                    <IntroTit>Presented by Triathon
                        {
                            !isShare && <>
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
                            <span> {IntroInfo.user} </span>
                        </div>
                        <div className="item">
                            <span>Detect time: </span>
                            <span> {IntroInfo.time} </span>
                        </div>
                    </div>
                    <IntroTit>Contract Info</IntroTit>
                    {
                        UploadType === 'address' && <div className="contractInfo">
                            <div className="item">
                                <span>Chain</span>
                                <span><img src={IntroInfo.chain === 'bsc' ? bscPic : ethPic} alt="" className='chainImg' />
                                    {
                                        IntroInfo.chain === 'bsc' ? 'BSC' : 'ETH'
                                    }
                                </span>
                            </div>
                            <div className="item">
                                <span>Contract Address</span>
                                <span>
                                    {
                                        IntroInfo.contract_address.length > 10 ? IntroInfo.contract_address.slice(0, 6) + '...' + IntroInfo.contract_address.slice(-6) : ''
                                    }


                                    <CopyShowTipsSmall account={IntroInfo.contract_address || 'none'} ></CopyShowTipsSmall>
                                </span>
                            </div>
                        </div>
                    }
                    {
                        UploadType === 'file' && <div className='fileInfo'>
                            {
                                FileValue !=='' && <StyleCode value={FileValue}></StyleCode>
                            }
                            
                        </div>
                    }




                    <IntroTit>Security Detection Result</IntroTit>
                    <IntroTitle className='IntroTitle'>
                    <div className="leftintro">Score</div>
                        {
                            !isShare && <div className="rightIntro" onClick={() => setisOpen(true)}>How it works?</div>
                        }
                    </IntroTitle>
                   
                    <div className="result">
                        <div className="left">
                            <div className="icon"></div>
                            <div className="text">
                              
                                <div className="bottom">
                                    <span className='colorText'>
                                        {IntroInfo.score}
                                    </span>
                                    <span >  / 100</span>
                                </div>
                                <div className="top">
                                    {
                                        Number(IntroInfo.score) < 25 ? ShowText[0]
                                            : Number(IntroInfo.score) < 50 ? ShowText[1]
                                                : Number(IntroInfo.score) < 75 ? ShowText[2]
                                                    : Number(IntroInfo.score) < 90 ? ShowText[3]
                                                        : ShowText[4]
                                    }
                                </div>
                            </div>
                        </div>
                        {/* {
                            !isShare && <div className="right" onClick={() => setisOpen(true)}>How it works?</div>
                        } */}

                    </div>
                    <IntroTitle>Distributed</IntroTitle>
                    <div className="distributed">
                        <EchartsShow echdata={echartDate} />
                    </div>
                    {
                        isShare && <div className="code">
                            <QRCodeDom url='http://164.52.93.82:8002/#/' />
                        </div>
                    }
                </div>

                <div className="reportDetail">
                    <IntroTit>Detail</IntroTit>
                    <ReportDetail>
                        {
                            ResultDetail.map((item, index) => {
                                return <div className="item" key={index}>
                                    <div className={item.level === 'High' ? 'titleIntro red' : item.level === 'Medium' ? 'titleIntro yellow' : 'titleIntro green'}> <img src={item.level === 'High' ? high : item.level === 'Medium' ? mid : low} alt="" /> {item.title}</div>
                                    <div className="intro">{item.description}</div>
                                </div>
                            })
                        }
                    </ReportDetail>
                </div>
            </ReportDom>
            {isCopied && <CopyShowTips />}
        </div>
        <PcModal isOpen={isOpen} minWidth={683} onDismiss={() => setisOpen(false)} minHeight={537}>
            <WrokContainer>
                <div className="header">
                    <div className="left">How it work</div>
                    <div className="close" onClick={() => setisOpen(false)}>  <CloseColor></CloseColor>
                    </div>
                </div>
                <div className="con">
                    <p> The Triathon platform backed by Core security detection engine.</p>
                    <p>Core security testing platform incorporate the fuzzing-test testing method and the concept of chaos engineering (experimental) to redefine the way of blockchain security testing.</p>
                    <div className="title">Main utilities of “CORE”</div>
                    <p>1. (Testing) Tool building: <br />A collection of various testing tools. Testing capabilities will be packaged in the form of API and be provided to third parties including security white hats in the future.</p>
                    <p>2. API building: <br />CORE continuously converts vulnerabilities into testing methods and outputs APIs.</p>
                    <p>3. Developer management:<br />Eco-developers mint new NFT (i. e. test service) based on API; or they can report vulnerabilities based on their use of the API application.</p>
                    <p>4. Vulnerability conversion: <br />The vulnerability platform is a key component of CORE’s continuous capacity building.</p>
                </div>
            </WrokContainer>
        </PcModal>
        <ErrModel
            isOpen={ErrOpen}
            onDismiss={closeErrTip}
            errorMsg={errorMsg}
        ></ErrModel>
    </ContractDetectionDetailDom>
}






