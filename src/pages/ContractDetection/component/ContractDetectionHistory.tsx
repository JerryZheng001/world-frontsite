
import React, { useState } from 'react'
import { HistoryDom, InputCon, ItemDiv, SearchDom } from '../styled'



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
                <ItemDiv width='240px' type={2}>Contact address</ItemDiv>
                <ItemDiv width='225px' type={2}>Chain</ItemDiv>
                <ItemDiv width='225px' type={2}>Detect Score</ItemDiv>
                <ItemDiv width='194px' type={2}>Operation</ItemDiv>
            </div>
        </div>
    </HistoryDom>
}