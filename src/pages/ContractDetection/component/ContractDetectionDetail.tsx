
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ContractDetectionDetailDom } from '../styled'

export default function ContractDetectionDetail(): JSX.Element{
    const history = useHistory()


    return <ContractDetectionDetailDom className='ContractDetectionDetail'>
        <div className="container">
            <div className="title">Triathon Contract Detection Report</div>
            <div className="detect" onClick={()=>{
                history.push('/contract_detection')
            }}>Detect other contract</div>
            <div className="text">Notice : This detection is the basic item scan, please do not treat it as the final audit report.For the final report, please contact customer service for manual audit</div>
        </div>
    </ContractDetectionDetailDom>
}




