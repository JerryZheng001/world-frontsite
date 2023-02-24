
import React, { useEffect, useState } from 'react'
import { useHistory, } from 'react-router-dom'

import { ColorText, ContractDetectionDetailDom } from '../styled'





import { getTestResult } from '../../../utils/fetch/detect';
import ErrModel from './ErrModel';

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { ColorTexts, Container, ContractDetectionDetailProDom, Disclaimer, Executive, Findings, ItemsIntro, Line, Summary, TitText } from '../stylePro';
import EchartsShow from './echartsShow';
dayjs.extend(utc)




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

const echartsDate = [
    {
        "type": "high",
        "count": 5,
        "ratio": "0.04"
    },
    {
        "type": "medium",
        "count": 14,
        "ratio": "0.01"
    },
    {
        "type": "low",
        "count": 0,
        "ratio": "0.00"
    },
    {
        "type": "pass",
        "count": 95,
        "ratio": "0.95"
    }
]
const SummaryInfo = [
    {
        idCode: 'TSP-1',
        description: 'Undocumented Staking And Accrued Interest Logic',
        level: 'high'

    },
    {
        idCode: 'TSP-1',
        description: 'Undocumented Staking And Accrued Interest Logic',
        level: 'medium'

    },
    {
        idCode: 'TSP-1',
        description: 'Undocumented Staking And Accrued Interest Logic',
        level: 'medium'

    },
    {
        idCode: 'TSP-1',
        description: 'Undocumented Staking And Accrued Interest Logic',
        level: 'low'

    },
]

const findDate = [
    {
        name: 'Undocumented Staking And Accrued Interest Logic',
        idCode: 'TSP-1',
        level: 'high',
        description: 'The logicinstake, unstake, accrueInterestandcalculateAccruedInterest isnot properly documented. The specification does not mention anything related accrued interest: hence there is no referenceto match aaainst theimplemented codeMoreover. the mathematical relations for computing the total amount of shares when staking and unstaking is not documented.Asa consecuence one cannottell ifthe implementation is indeed correct andffs the intended behaviorthis mau havea sianificant imnact on end users',
        recommend: [
            'Enhance the specification markdown file with adescriptive explanation of staking, unstaking and interest accrual.',
            'Enhance the specification markdown file with adescriptive explanation of staking, unstaking and interest accrual.',
        ]
    },
    {
        name: 'Undocumented Staking And Accrued Interest Logic',
        idCode: 'TSP-1',
        level: 'high',
        description: 'The logicinstake, unstake, accrueInterestandcalculateAccruedInterest isnot properly documented. The specification does not mention anything related accrued interest: hence there is no referenceto match aaainst theimplemented codeMoreover. the mathematical relations for computing the total amount of shares when staking and unstaking is not documented.Asa consecuence one cannottell ifthe implementation is indeed correct andffs the intended behaviorthis mau havea sianificant imnact on end users',
        recommend: [
            'Enhance the specification markdown file with adescriptive explanation of staking, unstaking and interest accrual.',
            'Enhance the specification markdown file with adescriptive explanation of staking, unstaking and interest accrual.',
        ]
    },
    {
        name: 'Undocumented Staking And Accrued Interest Logic',
        idCode: 'TSP-1',
        level: 'medium',
        description: 'The logicinstake, unstake, accrueInterestandcalculateAccruedInterest isnot properly documented. The specification does not mention anything related accrued interest: hence there is no referenceto match aaainst theimplemented codeMoreover. the mathematical relations for computing the total amount of shares when staking and unstaking is not documented.Asa consecuence one cannottell ifthe implementation is indeed correct andffs the intended behaviorthis mau havea sianificant imnact on end users',
        recommend: [
            'Enhance the specification markdown file with adescriptive explanation of staking, unstaking and interest accrual.',
            'Enhance the specification markdown file with adescriptive explanation of staking, unstaking and interest accrual.',
        ]
    },
    {
        name: 'Undocumented Staking And Accrued Interest Logic',
        idCode: 'TSP-1',
        level: 'low',
        description: 'The logicinstake, unstake, accrueInterestandcalculateAccruedInterest isnot properly documented. The specification does not mention anything related accrued interest: hence there is no referenceto match aaainst theimplemented codeMoreover. the mathematical relations for computing the total amount of shares when staking and unstaking is not documented.Asa consecuence one cannottell ifthe implementation is indeed correct andffs the intended behaviorthis mau havea sianificant imnact on end users',
        recommend: [
            'Enhance the specification markdown file with adescriptive explanation of staking, unstaking and interest accrual.',
            'Enhance the specification markdown file with adescriptive explanation of staking, unstaking and interest accrual.',
        ]
    },
]


export default function ContractDetectionDetail(params: any): JSX.Element {
    const history = useHistory()
    const [IntroInfo, setIntroInfo] = useState({
        chain: '', contract_address: '', score: '', time: '', user: ''
    } as InfoData)
    const [ResultDetail, setResultDetail] = useState([] as ResultDetailList[])
    const [echartDate, setechartDate] = useState([] as EchartList[])
    const [ErrOpen, setErrOpen] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')
    //报告详情
    const getReportDetail = (id: any) => {
        getTestResult({ id }).then((res: any) => {
            if (res.code === 200) {
                if (JSON.stringify(res.data) === '{}') {
                    setErrOpen(true)
                    seterrorMsg(res.msg)
                } else {
                    const { list, score_ratio: { result }, chain, contract_address, score, time, user } = res.data
                    const Info = {
                        chain: chain || '', contract_address: contract_address || '', score: score || '', time: time || '', user: user || ''
                    }
                    setIntroInfo(Info)
                    setResultDetail(list)
                    setechartDate(result)
                }
            } else {
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

    useEffect(() => {

        const { params: { id } } = params.match
        getReportDetail(id)
        return () => {

        }
        // eslint-disable-next-line
    }, [params.match])


    return <ContractDetectionDetailProDom className='ContractDetectionDetail'>
        <div className="maskDiv"></div>
        <Container>
            <div className="header">
                <div className="timer">February 28th 2023 — Triathon Verified </div>
                <Line className='up'></Line>
                <div className="con">
                    <p>VoYage Token</p>
                    <div className="text">The security assessment wos presented by Triathon, based on Core plantfrom</div>
                </div>
                <Line className='down'></Line>
            </div>
            <Executive>
                <TitText>Executive</TitText>
                <div className="con">
                    <div className="left">
                        <ItemsIntro>
                            <div className="intro">Type</div>
                            <div>Token</div>
                        </ItemsIntro>
                        <ItemsIntro>
                            <div className="intro">Time</div>
                            <div>Token</div>
                        </ItemsIntro>
                        <ItemsIntro>
                            <div className="intro">Language</div>
                            <div>Token</div>
                        </ItemsIntro>
                        <ItemsIntro>
                            <div className="intro">Chain</div>
                            <div>Token</div>
                        </ItemsIntro>
                        <ItemsIntro>
                            <div className="intro">Methods</div>
                            <div>Token</div>
                        </ItemsIntro>
                        <ItemsIntro>
                            <div className="intro">Code source</div>
                            <div>Token</div>
                        </ItemsIntro>
                        <ItemsIntro>
                            <div className="intro">Certificate Code</div>
                            <div>Token</div>
                        </ItemsIntro>
                    </div>
                    <div className="right">
                        <EchartsShow echdata={echartsDate} />
                    </div>
                </div>
            </Executive>

            <Summary>
                <TitText>Summary of findings</TitText>
                <div className="introText">
                    Triathon has performed a security audit of the Republic VoyagerToken,Swap and Staking contracts and hasidentified10 issuesranging across al severity levels. Additionally we have identified 6 best practice issues, 3documentation issues and a lowbranch coverage when executing the test suite.Werecommend addressing all of these issues before deploying the code on a production environment.
                </div>
                <div className="sumaryIntro">
                    <div className="head">
                        <div className="id">Id</div>
                        <div className="des">Description</div>
                        <div className="sev">Severity</div>
                    </div>
                    <div className="sumaryCon">
                        {
                            SummaryInfo.length !== 0 ? SummaryInfo.map((item, index) => {
                                return <div className="items">
                                    <div className="id">{item.idCode}</div>
                                    <div className="des">{item.description}</div>
                                    <div className="sev">
                                        <ColorTexts type={item.level} >{
                                            item.level === 'high' ? 'High risk' : item.level === 'medium' ? 'Medium risk' : 'Low risk'
                                        }</ColorTexts>
                                    </div>
                                </div>
                            }) : <div className='empty'> No Date ~ </div>
                        }
                    </div>
                </div>
            </Summary>
            <Findings>
                <TitText>Findings</TitText>
                <div className="findCon">
                    {
                        findDate.map((item, index) => {
                            return <div className="fingItems" key={index}>
                                <div className="title">
                                    <div>{item.name}</div>
                                    <div className="right">{item.idCode}</div>
                                </div>
                                <div className="button">
                                    <ColorTexts type={item.level}>
                                        {
                                            item.level === 'high' ? 'Severity : High risk' : item.level === 'medium' ? 'Severity : Medium risk' : 'Severity : Low risk'
                                        }
                                    </ColorTexts>
                                </div>
                                <div className="con">
                                    <div>Description:</div>
                                    <div>{item.description}</div>
                                    <br />
                                    <div>Recommend:</div>
                                    {
                                        item.recommend.map((item, index) => {
                                            return <div className="itemsList" key={index}>
                                                {item}
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </Findings>


        </Container>
        <Disclaimer>
            <div className="container">
                <div className="tit">Disclaimer</div>
                <div className="text">
                This report is based on the scope of materials and documentation provided for a limited review at the time provided. Results may not be complete nor inclusive of all vulnerabilities. The review and this report are provided on an as-is, where-is, and as-available basis. You agree that your access and/or use, including but not limited to any associated services, products, protocols, platforms, content, and materials, will be at your sole risk. Blockchain technology remains under development and is subject to unknown risks and flaws. The review does not extend to the compiler layer, or any other areas beyond the programming language, or other programming aspects that could present security risks. A report does not indicate the endorsement of any particular project or team, nor guarantee its security. No third party should rely on the reports in any way, including for the purpose of making any decisions to buy or sell a product, service or any other asset. 
                </div>
            </div>
        </Disclaimer>
        <ErrModel
            isOpen={ErrOpen}
            onDismiss={closeErrTip}
            errorMsg={errorMsg}
        ></ErrModel>
    </ContractDetectionDetailProDom>
}






