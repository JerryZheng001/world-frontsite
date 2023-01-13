
import React, {  } from 'react'
import { HistoryDom, InputCon, ItemDiv, SearchDom } from '../styled'
import Right from '../../../assets/images/contrastDetec/right@2x.png'
import ethPic from '../../../assets/images/contrastDetec/ethPic.png'
import bscPic from '../../../assets/images/contrastDetec/bscPic.png'
const testDate = [
    {
        name: '111',
        contrast: '0x045c...073DcF',
        chain: 'bsc',
        score: 87,

    },
    {
        name: '222',
        contrast: '0x045c...073DcF',
        chain: 'eth',
        score: 87,

    },
    {
        name: '333',
        contrast: '0x045c...073DcF',
        chain: 'bsc',
        score: 87,

    },
]

export default function ContractDetectionHistory(): JSX.Element {

    return <HistoryDom>
        <div className="title">Triathon Contract Detection Report</div>
        <div className="showTitle">4,089 Detected</div>
        <SearchDom>
            <div className="icon"></div>
            <InputCon placeholder='search'></InputCon>
            <div className="button">search</div>

        </SearchDom>
        <div className="listCom">
            <div className="headIntro">
                <ItemDiv width='70px' type={0} >#</ItemDiv>
                <ItemDiv width='340px' type={1}>Name</ItemDiv>
                <ItemDiv width='240px' type={2}>Contract address</ItemDiv>
                <ItemDiv width='225px' type={2}>Chain</ItemDiv>
                <ItemDiv width='225px' type={2}>Detect Score</ItemDiv>
                <ItemDiv width='194px' type={2}>Operation</ItemDiv>
            </div>
            <div className="container">
                {
                    testDate.map((item, index) => {
                        return <div className="listItems" key={index}>
                            <ItemDiv width='70px' type={0} >{index+1}</ItemDiv>
                            <ItemDiv width='340px' type={1}>{item.name}</ItemDiv>
                            <ItemDiv width='240px' type={2}>{item.contrast}</ItemDiv>
                            <ItemDiv width='225px' type={2}> <img src={item.chain==='bsc'?bscPic:ethPic} alt="" className='chainImg'/> {item.chain}</ItemDiv>
                            <ItemDiv width='225px' type={2}>{item.score}</ItemDiv>
                            <ItemDiv width='194px' type={2}>
                                <img src={Right} alt="" className='rightPoint' />
                            </ItemDiv>
                        </div>
                    })
                }
            </div>
        </div>
    </HistoryDom>
}